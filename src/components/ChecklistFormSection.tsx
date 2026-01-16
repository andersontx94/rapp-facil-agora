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

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    const message = encodeURIComponent(
      `Olá, tudo bem? Me chamo ${formData.name} e vi o checklist do RAPP no site da FRTB Consultoria Ambiental. Gostaria de receber o material e orientações sobre a situação da minha empresa.`
    );

    window.location.href = `https://wa.me/5592982100631?text=${message}`;
  };

  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Texto */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <FileCheck className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Material Gratuito
                </span>
              </div>

              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                Checklist do RAPP – Evite Multas, Bloqueios e Problemas com o IBAMA
              </h2>

              <p className="text-primary-foreground/90 text-base md:text-lg mb-4 leading-relaxed">
                Descubra os principais pontos que o IBAMA analisa no RAPP e os erros mais comuns que já causaram autuações, bloqueios de CTF e prejuízos em empresas.
              </p>

              <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                Criado pela FRTB Consultoria Ambiental para empresários que querem fazer certo e não correr riscos desnecessários.
              </p>
            </div>

            {/* Formulário */}
            <div className="bg-background rounded-2xl shadow-2xl p-6 md:p-8 w-full">
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
                Receba o Checklist no WhatsApp
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(92) 00000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isSubmitting ? "Redirecionando..." : "Quero receber o checklist agora"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Você será redirecionado para o WhatsApp da FRTB após enviar.
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
