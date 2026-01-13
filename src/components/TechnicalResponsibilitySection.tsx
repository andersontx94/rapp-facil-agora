import { Scale, Shield, FileCheck } from "lucide-react";

const TechnicalResponsibilitySection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons row */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Scale className="w-6 h-6 text-accent" />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Title */}
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
            Responsabilidade técnica e <span className="text-accent">segurança jurídica</span>
          </h2>
          
          {/* Content */}
          <p className="text-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Todos os serviços são realizados com responsabilidade técnica, seguindo 
            rigorosamente a legislação ambiental vigente, garantindo que sua empresa 
            esteja protegida e em conformidade com as exigências do IBAMA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalResponsibilitySection;
