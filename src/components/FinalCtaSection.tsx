import { MessageCircle, ArrowRight, Shield, FileCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Preciso%20resolver%20meu%20RAPP%20com%20a%20FRTB%20Consultoria%20Ambiental.";

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icons row */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Main statement */}
          <p className="text-body text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            O RAPP é uma <strong className="text-foreground">obrigação legal séria</strong>.
          </p>

          {/* Main headline */}
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            A <span className="text-accent">FRTB Consultoria Ambiental</span> é a empresa certa 
            para garantir que sua empresa esteja em conformidade, 
            <span className="text-accent"> sem riscos</span> e 
            <span className="text-accent"> sem dor de cabeça</span>.
          </h2>

          {/* Main CTA */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg md:text-xl px-10 py-5"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com especialista da FRTB e evitar problemas com o IBAMA
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Reassurance */}
          <p className="text-body text-sm text-muted-foreground mt-8">
            Atendimento direto com especialista • Responsabilidade técnica • Atuação em todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
