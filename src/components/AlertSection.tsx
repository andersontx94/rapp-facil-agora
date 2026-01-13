import { AlertTriangle, MessageCircle } from "lucide-react";

const WHATSAPP_VERIFY_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20verificar%20se%20minha%20empresa%20é%20obrigada%20a%20entregar%20o%20RAPP.";

const AlertSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Alert icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </div>

          <h2 className="heading-display text-3xl md:text-4xl text-center text-foreground mb-8">
            Muitas empresas só descobrem a obrigação{" "}
            <span className="text-accent">quando já é tarde</span>
          </h2>

          <div className="space-y-6 text-body text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            <p>
              A maioria das empresas enquadradas em atividades potencialmente poluidoras:
            </p>
            
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Não sabem que são obrigadas a entregar o RAPP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Descobrem apenas quando são notificadas pelo IBAMA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Ou perdem o prazo e entram em situação de irregularidade</span>
              </li>
            </ul>
          </div>

          {/* Impact phrase */}
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-10 max-w-2xl mx-auto">
            <p className="heading-display text-xl md:text-2xl text-center text-foreground">
              "O IBAMA <span className="text-destructive">não avisa</span> antes de multar."
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <a 
              href={WHATSAPP_VERIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-link text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Quero verificar se minha empresa é obrigada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertSection;
