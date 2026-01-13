import { FileText, Calendar, Eye, AlertCircle } from "lucide-react";

const WhatIsRappSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Obrigação Legal",
      description: "Exigido pelo IBAMA para empresas com atividades de impacto ambiental"
    },
    {
      icon: Calendar,
      title: "Entrega Anual",
      description: "Deve ser enviado todos os anos até 31 de março"
    },
    {
      icon: Eye,
      title: "Fiscalização",
      description: "Utilizado para controle e monitoramento ambiental"
    },
    {
      icon: AlertCircle,
      title: "Sanções",
      description: "A não entrega gera multas, bloqueios no CTF e outras penalidades"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Entenda
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              O que é o <span className="text-accent">RAPP</span>?
            </h2>
            <div className="section-divider mb-8" />
          </div>

          {/* Main explanation */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-12">
            <p className="text-body text-lg md:text-xl text-foreground leading-relaxed text-center">
              O <strong className="text-accent">RAPP</strong> é o{" "}
              <em>Relatório Anual de Atividades Potencialmente Poluidoras e Utilizadoras de Recursos Ambientais</em>, 
              exigido pelo IBAMA para empresas enquadradas em atividades que causam impacto ambiental 
              ou utilizam recursos naturais.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-elegant p-6 text-center group hover:border-accent/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="heading-display text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRappSection;
