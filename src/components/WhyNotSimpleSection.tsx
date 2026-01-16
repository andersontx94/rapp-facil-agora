import { FileText, AlertCircle, Database, CheckCircle } from "lucide-react";

const complexities = [
  { icon: FileText, text: "Informações técnicas específicas" },
  { icon: Database, text: "Coerência entre atividades declaradas" },
  { icon: CheckCircle, text: "Compatibilidade com o CTF" },
  { icon: AlertCircle, text: "Atenção aos detalhes exigidos" }
];

const WhyNotSimpleSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-5 md:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-5 md:mb-6 px-2">
              Por que o RAPP <span className="text-accent">não é tão simples</span> quanto parece
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-10">
            <p className="text-body text-base md:text-lg text-foreground leading-relaxed text-center mb-6 md:mb-8">
              O RAPP exige:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl mx-auto">
              {complexities.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 md:p-4 bg-muted/30 border border-border rounded-lg"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span className="text-body text-xs md:text-sm text-foreground leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-body text-sm md:text-lg text-muted-foreground leading-relaxed text-center mb-5 md:mb-6 px-2">
              Preenchimentos incorretos, omissões ou dados inconsistentes já causaram prejuízos 
              a empresas que tentaram fazer sozinhas ou de forma improvisada.
            </p>

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 md:p-6 text-center">
              <p className="heading-display text-base md:text-xl text-foreground leading-relaxed">
                Não se trata apenas de entregar. 
                <br />
                <span className="text-accent">Trata-se de entregar corretamente.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNotSimpleSection;
