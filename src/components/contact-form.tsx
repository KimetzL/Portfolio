"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function ContactForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
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
          title: t.contact.toastSuccess,
          description: t.contact.toastSuccessDesc,
        });
      } else {
        setStatus("error");
        toast({
          variant: "destructive",
          title: t.contact.toastError,
          description: data.error || t.contact.toastErrorDesc,
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      toast({
        variant: "destructive",
        title: t.contact.toastConnError,
        description: t.contact.toastConnErrorDesc,
      });
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto border bg-card/50 backdrop-blur-xs shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold">{t.contact.formTitle}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {t.contact.formDesc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">{t.contact.successTitle}</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              {t.contact.successDesc}
            </p>
            <Button
              variant="outline"
              onClick={() => setStatus("idle")}
              className="mt-4"
            >
              {t.contact.sendAnother}
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
                <Label htmlFor="name">{t.contact.name}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  required
                  maxLength={80}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t.contact.subject}</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder={t.contact.subjectPlaceholder}
                required
                maxLength={150}
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.message}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.contact.messagePlaceholder}
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
                  {t.contact.sending}
                </>
              ) : (
                <>
                  {t.contact.send}
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
