import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema de validación de datos de contacto
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(80),
  email: z.string().email("Correo electrónico no válido").max(100),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres").max(150),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000),
  // Campo Honeypot para detección de bots
  website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validar el payload con Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Datos del formulario no válidos";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, subject, message, website } = result.data;

    // 2. Trampa Honeypot: Si un bot llenó el campo trampa, simulamos éxito sin procesar
    if (website && website.trim() !== "") {
      console.warn(`[Anti-Spam Honeypot Triggers] Bot submission rejected from IP: ${req.headers.get("x-forwarded-for") || "unknown"}`);
      // Se devuelve status 200 para engañar al bot
      return NextResponse.json({ success: true, message: "Mensaje procesado" }, { status: 200 });
    }

    // 3. Procesamiento o Envío de Email (vía Resend si hay API Key configurada)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "kimetz.l@hotmail.com";

    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: recipientEmail,
            reply_to: email,
            subject: `[Portfolio] ${subject}`,
            html: `
              <h2>Nuevo mensaje de contacto desde el Portfolio</h2>
              <p><strong>De:</strong> ${name} (&lt;${email}&gt;)</p>
              <p><strong>Asunto:</strong> ${subject}</p>
              <hr />
              <p><strong>Mensaje:</strong></p>
              <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #0070f3;">
                ${message.replace(/\n/g, "<br />")}
              </blockquote>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errData = await emailResponse.json();
          console.error("Error al enviar email vía Resend:", errData);
        }
      } catch (emailErr) {
        console.error("Fallo al conectar con servicio de email:", emailErr);
      }
    } else {
      // Si aún no se ha configurado la API Key, se registra el mensaje en logs de servidor de forma segura
      console.log("=== NUEVO MENSAJE DE CONTACTO (Sin API Key de email configurada) ===");
      console.log(`De: ${name} <${email}>`);
      console.log(`Asunto: ${subject}`);
      console.log(`Mensaje: ${message}`);
      console.log("===================================================================");
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno al procesar la solicitud" },
      { status: 500 }
    );
  }
}
