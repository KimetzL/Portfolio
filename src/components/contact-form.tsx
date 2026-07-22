"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Campo trampa Honeypot (debe mantenerse vacío por usuarios reales)
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactar. Te responderé lo antes posible.",
        });
      } else {
        setStatus("error");
        toast({
          variant: "destructive",
          title: "Error al enviar",
          description: data.error || "Hubo un problema al procesar tu mensaje. Inténtalo de nuevo.",
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Error de conexión",
        description: "No se pudo conectar con el servidor. Revisa tu conexión.",
      });
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto border bg-card/50 backdrop-blur-xs shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold">Enviar un Mensaje</CardTitle>
        <CardDescription className="text-muted-foreground">
          Completa el formulario y me pondré en contacto contigo directamente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">¡Mensaje Recibido!</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Muchas gracias por comunicarte. He recibido tu mensaje con éxito.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setStatus("idle")}
              className="mt-4"
            >
              Enviar otro mensaje
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo Honeypot Oculto (Anti-Spam) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">No llenar este campo</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  maxLength={80}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Motivo de tu mensaje"
                required
                maxLength={150}
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                required
                rows={5}
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full group"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando mensaje...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
