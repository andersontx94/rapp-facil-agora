import frtbLogoWhite from "@/assets/frtb-logo-white.png";

const WhoIsFrtbSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Quem é a <span className="text-accent">FRTB Consultoria Ambiental</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Content with optional logo */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Subtle logo watermark */}
            <div className="absolute right-4 top-4 opacity-[0.04] pointer-events-none">
              <img 
                src={frtbLogoWhite} 
                alt="" 
                className="w-32 h-auto"
                style={{ filter: 'invert(1)' }}
              />
            </div>

            <div className="relative z-10">
              <p className="text-body text-lg md:text-xl text-foreground leading-relaxed mb-6">
                A FRTB Consultoria Ambiental é uma empresa especializada em regularização ambiental, 
                com atuação prática no atendimento a empresas que precisam cumprir obrigações legais 
                junto ao IBAMA e demais órgãos ambientais.
              </p>
              
              <p className="text-body text-lg text-muted-foreground leading-relaxed">
                Atuamos com responsabilidade técnica, organização documental e acompanhamento completo 
                dos processos, garantindo segurança jurídica e tranquilidade para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFrtbSection;
