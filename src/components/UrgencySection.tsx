import { Clock, AlertTriangle, Ban, FileWarning } from "lucide-react";

const consequences = [
  { icon: AlertTriangle, text: "A empresa entra em irregularidade ambiental" },
  { icon: Ban, text: "Bloqueios no CTF (Cadastro Técnico Federal)" },
  { icon: FileWarning, text: "Multas e autuações do IBAMA" }
];

const UrgencySection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Urgent gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <Clock className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Atenção ao prazo</span>
            </div>
            
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Por que <span className="text-destructive">não deixar</span> para depois?
            </h2>
            <div className="section-divider" />
          </div>

          {/* Content */}
          <div className="bg-background border border-border rounded-xl p-8 md:p-10 mb-10">
            <p className="text-body text-lg text-foreground text-center mb-8">
              O prazo oficial do RAPP vai até <strong className="text-accent">31 de março</strong>. 
              Após essa data, sua empresa pode enfrentar:
            </p>

            <div className="space-y-4 max-w-lg mx-auto">
              {consequences.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-destructive/5 border border-destructive/10 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-body text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact phrase */}
          <div className="text-center">
            <p className="heading-display text-xl md:text-2xl text-foreground">
              "Regularizar dentro do prazo é sempre{" "}
              <span className="text-accent">mais seguro</span> e{" "}
              <span className="text-accent">mais barato</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
