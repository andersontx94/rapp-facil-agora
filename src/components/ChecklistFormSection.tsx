import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileCheck, MessageCircle } from "lucide-react";

const ChecklistFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Encode the pre-filled WhatsApp message
    const message = encodeURIComponent(
      "Olá, tudo bem? Vi o checklist do RAPP no site da FRTB Consultoria Ambiental e gostaria de receber o material e orientações sobre a situação da minha empresa."
    );

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/5592982100631?text=${message}`;
  };

  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <FileCheck className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Material Gratuito
                </span>
              </div>

              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                Checklist do RAPP – Evite Multas, Bloqueios e Erros que Prejudicam Empresas
              </h2>

              <p className="text-primary-foreground/90 text-base md:text-lg mb-6 leading-relaxed">
                Descubra os principais pontos que o IBAMA analisa no RAPP e os erros mais comuns que já causaram problemas, bloqueios e autuações em empresas.
              </p>

              <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                Este checklist foi criado pela FRTB Consultoria Ambiental para ajudar empresários a entenderem o que realmente importa no RAPP e evitar riscos, retrabalho e prejuízos.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-background rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
                Receba seu Checklist Gratuito
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Telefone (WhatsApp)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isSubmitting ? "Redirecionando..." : "Quero receber o checklist no WhatsApp"}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp da FRTB para receber o material.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistFormSection;
