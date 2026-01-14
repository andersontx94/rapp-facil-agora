import { Building2, AlertCircle, FileText } from "lucide-react";

const WhoMustDeliverSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Quem é obrigado a entregar o <span className="text-accent">RAPP</span> ao IBAMA
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-body text-lg text-foreground leading-relaxed mb-4">
                  Empresas que exercem <strong>atividades potencialmente poluidoras</strong> ou 
                  <strong> utilizadoras de recursos ambientais</strong> são obrigadas a entregar 
                  o RAPP anualmente ao IBAMA.
                </p>
                <p className="text-body text-lg text-muted-foreground leading-relaxed">
                  Muitas empresas só descobrem essa obrigação quando já estão em situação irregular.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-body text-foreground">
                  Se sua empresa possui <strong>CTF ativo</strong> ou exerce atividade enquadrada 
                  pelo IBAMA, <strong className="text-accent">o RAPP é obrigatório</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoMustDeliverSection;
