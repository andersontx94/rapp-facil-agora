import { Shield, UserCheck, FileCheck, Headphones, MessageSquare, Scale } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Especialistas em regularização ambiental",
    description: "Foco total em obrigações legais junto ao IBAMA e órgãos ambientais"
  },
  {
    icon: UserCheck,
    title: "Atendimento direto e personalizado",
    description: "Você fala diretamente com quem resolve, sem intermediários"
  },
  {
    icon: FileCheck,
    title: "Experiência prática com demandas do IBAMA",
    description: "Conhecemos os processos, prazos e exigências reais"
  },
  {
    icon: Scale,
    title: "Organização completa do processo",
    description: "Do levantamento inicial até o protocolo final, tudo organizado"
  },
  {
    icon: Headphones,
    title: "Suporte técnico durante todo o período",
    description: "Acompanhamento até a confirmação da entrega do RAPP"
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara e objetiva",
    description: "Sem juridiquês, sem enrolação. Você entende cada etapa"
  }
];

const WhyTrustSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Por que confiar na <span className="text-accent">FRTB</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Trust cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-display text-lg text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-body text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;
