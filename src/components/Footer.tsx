import { MessageCircle, ExternalLink, MapPin, Shield } from "lucide-react";
import frtbLogoWhite from "@/assets/frtb-logo-white.png";

const WHATSAPP_LINK = "https://wa.me/5592984065278?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20FRTB.";

const Footer = () => {
  return (
    <footer className="gradient-hero border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Company info with logo */}
            <div>
              <div className="mb-4">
                <img 
                  src={frtbLogoWhite} 
                  alt="FRTB Consultoria Ambiental" 
                  style={{ width: '120px', height: 'auto' }}
                />
              </div>
              <p className="text-body text-sm text-muted-foreground mb-4">
                Especialistas em regularização ambiental e obrigações legais junto aos órgãos ambientais.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Atendimento em todo o Brasil</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="heading-display text-lg text-foreground mb-4">Links</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.frtbconsultoria.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Institucional
                  </a>
                </li>
                <li>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="heading-display text-lg text-foreground mb-4">Fale Conosco</h4>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-body text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} FRTB Consultoria Ambiental. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-body text-sm italic">
                  "Segurança ambiental é segurança para o seu negócio."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
