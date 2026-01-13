import { Search, FileStack, Upload, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Análise do CNAE",
    description: "Verificamos seu CNAE e enquadramento ambiental para identificar obrigações"
  },
  {
    number: "02",
    icon: FileStack,
    title: "Coleta de Informações",
    description: "Organizamos e coletamos todas as informações necessárias da sua empresa"
  },
  {
    number: "03",
    icon: Upload,
    title: "Preenchimento",
    description: "Realizamos o preenchimento correto no sistema oficial do IBAMA"
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Entrega e Orientação",
    description: "Entregamos o relatório e orientamos você sobre os próximos passos"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nosso Processo
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Como a FRTB resolve o seu <span className="text-accent">RAPP</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border group-hover:bg-accent/50 transition-colors duration-300 z-0" />
                )}
                
                <div className="card-elegant p-6 text-center relative z-10 h-full flex flex-col hover:border-accent/50 transition-colors duration-300">
                  {/* Step number */}
                  <span className="text-accent/30 text-5xl font-display font-bold absolute top-4 right-4">
                    {step.number}
                  </span>
                  
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="heading-display text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-body text-sm text-muted-foreground flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reinforcement text */}
          <div className="text-center">
            <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Você não precisa lidar com sistemas complexos nem correr risco de erro.{" "}
              <strong className="text-foreground">A FRTB cuida de tudo para você.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
