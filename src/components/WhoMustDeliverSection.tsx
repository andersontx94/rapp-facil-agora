import { Building2, AlertCircle, Factory, Fuel, Wrench, Truck, TreePine, Printer, HardHat, Beef, Settings, Building, Briefcase } from "lucide-react";

const segments = [
  { icon: Factory, label: "Indústrias" },
  { icon: Fuel, label: "Postos de combustível" },
  { icon: Wrench, label: "Oficinas mecânicas" },
  { icon: Truck, label: "Transportadoras" },
  { icon: TreePine, label: "Madeireiras" },
  { icon: Printer, label: "Gráficas" },
  { icon: HardHat, label: "Construtoras" },
  { icon: Beef, label: "Frigoríficos" },
  { icon: Settings, label: "Serralherias" },
  { icon: Building, label: "Cerâmicas" },
  { icon: Briefcase, label: "Empresas de serviços com impacto ambiental" },
];

const WhoMustDeliverSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Quem é obrigado a entregar o <span className="text-accent">RAPP</span> ao IBAMA
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10 mb-8">
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
          </div>

          {/* Segments grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {segments.map((segment, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <segment.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-body text-sm text-foreground font-medium">{segment.label}</span>
              </div>
            ))}
          </div>

          {/* Alert box */}
          <div className="bg-muted/30 border border-border rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-body text-foreground">
                Se sua empresa se encaixa em algum desses segmentos, <strong className="text-accent">é muito provável que o RAPP seja obrigatório</strong>. 
                Se possui <strong>CTF ativo</strong> ou exerce atividade enquadrada pelo IBAMA, a entrega é exigida por lei.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoMustDeliverSection;
