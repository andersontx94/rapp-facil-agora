import { 
  Factory, 
  Fuel, 
  Wrench, 
  Truck, 
  TreeDeciduous, 
  Printer, 
  Building2, 
  Snowflake,
  Hammer,
  FlameKindling,
  Briefcase
} from "lucide-react";

const segments = [
  { icon: Factory, name: "Indústrias" },
  { icon: Fuel, name: "Postos de combustível" },
  { icon: Wrench, name: "Oficinas mecânicas" },
  { icon: Truck, name: "Transportadoras" },
  { icon: TreeDeciduous, name: "Madeireiras" },
  { icon: Printer, name: "Gráficas" },
  { icon: Building2, name: "Construtoras" },
  { icon: Snowflake, name: "Frigoríficos" },
  { icon: Hammer, name: "Serralherias" },
  { icon: FlameKindling, name: "Cerâmicas" },
  { icon: Briefcase, name: "Empresas de serviços com impacto ambiental" }
];

const SegmentsSection = () => {
  return (
    <section className="py-24 bg-card relative">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Quem é Obrigado
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Atividades que normalmente precisam do <span className="text-accent">RAPP</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Segments grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {segments.map((segment, index) => (
              <div 
                key={index}
                className="bg-muted/30 border border-border rounded-lg p-5 flex items-center gap-3 hover:border-accent/50 hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <segment.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-body text-sm font-medium text-foreground">
                  {segment.name}
                </span>
              </div>
            ))}
          </div>

          {/* Reinforcement text */}
          <div className="bg-background border border-accent/30 rounded-xl p-8 text-center">
            <p className="text-body text-lg text-foreground">
              Se sua empresa se encaixa em algum desses segmentos,{" "}
              <strong className="text-accent">é muito provável que o RAPP seja obrigatório</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
