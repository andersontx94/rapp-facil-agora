import { MapPin } from "lucide-react";

const RegionalPresenceSection = () => {
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              
              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-4">
                  Atuação no Amazonas e em todo o Brasil
                </h2>
                <p className="text-body text-lg text-muted-foreground leading-relaxed">
                  A FRTB atua no Amazonas e em outras regiões do país, auxiliando empresas 
                  de diferentes portes a manterem suas obrigações ambientais em dia, 
                  evitando multas, bloqueios e problemas com o IBAMA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalPresenceSection;
