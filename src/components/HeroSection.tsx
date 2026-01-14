import { MessageCircle, AlertTriangle } from "lucide-react";
import frtbLogoWhite from "@/assets/frtb-logo-white.png";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Preciso%20resolver%20meu%20RAPP%20com%20a%20FRTB%20Consultoria%20Ambiental.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex flex-col">
      {/* Logo no topo */}
      <div style={{ paddingTop: '24px', paddingLeft: '32px' }}>
        <img 
          src={frtbLogoWhite} 
          alt="FRTB Consultoria Ambiental" 
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-8 animate-pulse-subtle">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Prazo encerra em 31 de março</span>
          </div>

          {/* Main headline - Pergunta direta */}
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Sua empresa já entregou o{" "}
            <span className="text-accent">RAPP</span> ao IBAMA este ano?
          </h1>

          {/* Subheadline - Consciência */}
          <p className="text-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            O RAPP é uma <strong className="text-foreground">obrigação legal anual</strong>. 
            Empresas que não entregarem dentro do prazo ou que preencherem de forma incorreta 
            podem ser <strong className="text-foreground">multadas</strong> e ter o 
            <strong className="text-foreground"> CTF bloqueado</strong> pelo IBAMA.
          </p>

          {/* Complemento - Solução */}
          <p className="text-body text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A FRTB Consultoria Ambiental cuida de todo o processo com responsabilidade técnica, 
            evitando erros, retrabalho e riscos para sua empresa.
          </p>

          {/* CTA Button */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base md:text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com especialista da FRTB
          </a>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">Responsabilidade técnica</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Experiência prática com IBAMA</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              <span className="text-sm">Atuação em todo Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
