import { AlertTriangle, FileX, RefreshCw } from "lucide-react";

const WrongRappSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Alert icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <FileX className="w-8 h-8 text-destructive" />
            </div>
          </div>

          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Quando o RAPP é feito errado, <span className="text-destructive">o prejuízo é real</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Main content */}
          <div className="bg-background border border-border rounded-xl p-8 md:p-10">
            <p className="text-body text-lg text-foreground leading-relaxed text-center mb-6">
              É comum empresas procurarem a FRTB Consultoria Ambiental após enfrentarem:
            </p>

            <div className="space-y-3 max-w-xl mx-auto mb-8">
              <div className="flex items-start gap-3 p-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-body text-foreground">Bloqueio no CTF</span>
              </div>
              <div className="flex items-start gap-3 p-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-body text-foreground">Notificações do IBAMA</span>
              </div>
              <div className="flex items-start gap-3 p-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-body text-foreground">Dificuldades para regularizar a situação por erros no RAPP</span>
              </div>
            </div>

            <p className="text-body text-lg text-muted-foreground leading-relaxed text-center mb-6">
              Em muitos casos, o problema <strong className="text-foreground">não foi a falta de entrega</strong>, 
              mas a <strong className="text-foreground">entrega feita de forma incorreta</strong>.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-start gap-4">
              <RefreshCw className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-body text-foreground">
                A FRTB Consultoria Ambiental atua na <strong>correção, regularização e reorganização</strong> desses casos, 
                evitando que o problema se agrave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrongRappSection;
