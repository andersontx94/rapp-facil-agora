import { Calendar, Ban, AlertTriangle, FileWarning } from "lucide-react";

const penalties = [
  { icon: AlertTriangle, text: "Multas aplicadas pelo IBAMA" },
  { icon: Ban, text: "Bloqueio do CTF (Cadastro Técnico Federal)" },
  { icon: FileWarning, text: "Dificuldades para obter licenças e autorizações ambientais" }
];

const DeadlinePenaltiesSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Prazo, multa e bloqueio: <span className="text-destructive">o que acontece com quem não entrega</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-background border border-border rounded-xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <Calendar className="w-8 h-8 text-accent" />
              <p className="heading-display text-2xl md:text-3xl text-foreground">
                Prazo: <span className="text-accent">31 de março</span>
              </p>
            </div>

            <p className="text-body text-lg text-foreground text-center mb-8 leading-relaxed">
              Empresas que não entregarem o RAPP dentro do prazo podem enfrentar:
            </p>

            <div className="space-y-4 max-w-lg mx-auto mb-8">
              {penalties.map((item, index) => (
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

            {/* Impact phrase */}
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="heading-display text-lg md:text-xl text-center text-foreground">
                O IBAMA <span className="text-destructive">não avisa antes de autuar ou bloquear</span>. 
                Muitas empresas só percebem o problema quando já estão com pendências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeadlinePenaltiesSection;
