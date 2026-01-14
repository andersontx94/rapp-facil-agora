import { AlertTriangle, DollarSign, Clock, RefreshCw } from "lucide-react";

const risks = [
  { icon: AlertTriangle, text: "Multa por erro no preenchimento" },
  { icon: Clock, text: "Bloqueio do CTF por inconsistências" },
  { icon: RefreshCw, text: "Retrabalho e custos adicionais" }
];

const DiyRiskSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Tentar fazer sozinho pode sair <span className="text-destructive">mais caro</span> do que contratar um especialista
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <p className="text-body text-lg text-foreground leading-relaxed text-center mb-8">
              Muitos empresários tentam resolver o RAPP internamente ou aprendendo pela internet, 
              sem perceber que um erro pode gerar:
            </p>

            <div className="space-y-4 max-w-lg mx-auto mb-8">
              {risks.map((item, index) => (
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

            <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-body text-foreground">
                O custo de <strong>corrigir um problema</strong> é sempre maior do que 
                <strong> fazer corretamente desde o início</strong>. A FRTB Consultoria Ambiental 
                existe para evitar esse tipo de prejuízo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiyRiskSection;
