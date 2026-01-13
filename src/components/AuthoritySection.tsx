import { ExternalLink, Shield, Award, Users } from "lucide-react";
import frtbLogoWhite from "@/assets/frtb-logo-white.png";

const AuthoritySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Watermark logo - marca d'água sutil */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img 
          src={frtbLogoWhite} 
          alt="" 
          className="w-[400px] h-auto"
          style={{ filter: 'invert(1)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Quem Somos
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              FRTB <span className="text-accent">Consultoria Ambiental</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Authority content */}
          <div className="card-elegant p-8 md:p-12 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              
              <p className="text-body text-lg text-foreground leading-relaxed text-center md:text-left">
                A FRTB Consultoria Ambiental é referência em regularização ambiental e obrigações legais 
                junto aos órgãos ambientais. Atuamos com <strong className="text-accent">responsabilidade técnica</strong>, 
                clareza e compromisso com a segurança do seu negócio.
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <span className="text-body text-sm text-muted-foreground">Segurança</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <span className="text-body text-sm text-muted-foreground">Expertise</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <span className="text-body text-sm text-muted-foreground">Confiança</span>
              </div>
            </div>
          </div>

          {/* Institutional link */}
          <div className="text-center">
            <a 
              href="https://frtbconsultoria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
            >
              Conhecer o site institucional da FRTB
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
