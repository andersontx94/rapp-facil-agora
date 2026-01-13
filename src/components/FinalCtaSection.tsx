import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20FRTB%20sobre%20o%20RAPP.";

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Resolva seu <span className="text-accent">RAPP</span> hoje e fique em dia com o IBAMA
          </h2>
          
          <p className="text-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fale agora com nossa equipe técnica. Analisamos sua situação e cuidamos 
            de todo o processo para você ficar em dia com o IBAMA.
          </p>

          {/* Main CTA */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg md:text-xl px-10 py-5"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com especialista da FRTB no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Reassurance */}
          <p className="text-body text-sm text-muted-foreground mt-8">
            Resposta rápida • Sem burocracia • Atendimento direto
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
