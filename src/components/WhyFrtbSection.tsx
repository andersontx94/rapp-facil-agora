import { Shield, Target, FileCheck, Scale } from "lucide-react";
import frtbLogoWhite from "@/assets/frtb-logo-white.png";

const WhyFrtbSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Por que a <span className="text-accent">FRTB Consultoria Ambiental</span> é a escolha certa para cuidar do seu RAPP
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10 relative overflow-hidden">
            {/* Subtle logo watermark */}
            <div className="absolute right-4 top-4 opacity-[0.03] pointer-events-none">
              <img 
                src={frtbLogoWhite} 
                alt="" 
                className="w-32 h-auto"
                style={{ filter: 'invert(1)' }}
              />
            </div>

            <div className="relative z-10">
              <p className="text-body text-lg text-foreground leading-relaxed mb-6">
                A FRTB Consultoria Ambiental atua diretamente com <strong>regularização ambiental</strong> e 
                <strong> obrigações legais junto ao IBAMA</strong>. Conhecemos na prática os erros mais comuns, 
                os riscos envolvidos e a forma correta de conduzir o processo.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-muted/30 border border-border rounded-lg">
                  <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-body text-sm text-foreground">Trabalho técnico e criterioso</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/30 border border-border rounded-lg">
                  <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-body text-sm text-foreground">Foco na segurança da sua empresa</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/30 border border-border rounded-lg">
                  <FileCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-body text-sm text-foreground">Experiência prática com demandas do IBAMA</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/30 border border-border rounded-lg">
                  <Scale className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-body text-sm text-foreground">Conformidade com a legislação vigente</span>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
                <p className="heading-display text-lg text-foreground">
                  Não improvisamos. Não tratamos como burocracia. 
                  <br />
                  <span className="text-accent">Tratamos como obrigação legal.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFrtbSection;
