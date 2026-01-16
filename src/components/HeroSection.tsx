import { MessageCircle, AlertTriangle, Shield, Clock, MapPin } from "lucide-react";
import frtbLogoWhite from "@/assets/frtb-logo-white.png";
import ibamaBg from "@/assets/ibama-bg.webp";

const WHATSAPP_LINK = "https://wa.me/5592984065278?text=Olá!%20Preciso%20resolver%20meu%20RAPP%20com%20a%20FRTB%20Consultoria%20Ambiental.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image - optimized for mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${ibamaBg})`,
          backgroundPosition: 'center 30%'
        }}
      />
      
      {/* Dark overlay - 80% opacity for maximum readability */}
      <div className="absolute inset-0 bg-[#0a1628]/85 md:bg-[#0a1628]/80" />
      
      {/* Logo no topo */}
      <header className="relative z-10 pt-6 md:pt-8 px-5 md:px-8">
        <img 
          src={frtbLogoWhite} 
          alt="FRTB Consultoria Ambiental" 
          className="w-28 md:w-40 h-auto"
        />
      </header>

      {/* Main content */}
      <div className="container mx-auto px-5 md:px-8 py-10 md:py-20 relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-red-600/20 border border-red-500/40 mb-8 md:mb-10">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-red-400 tracking-wide">
              Prazo encerra em 31 de março
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight px-2">
            Sua empresa já entregou o{" "}
            <span className="text-amber-400">RAPP</span> ao{" "}
            <span className="text-amber-400">IBAMA</span> este ano?
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed font-normal px-2">
            O <strong className="text-white font-semibold">RAPP</strong> é uma{" "}
            <strong className="text-white font-semibold">obrigação legal anual</strong>. 
            Empresas que não entregam dentro do prazo ou que preenchem de forma incorreta 
            podem ser <strong className="text-white font-semibold">multadas</strong> e ter o{" "}
            <strong className="text-white font-semibold">CTF bloqueado</strong> pelo IBAMA.
          </p>

          {/* Supporting text */}
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-2">
            A <strong className="text-white font-medium">FRTB Consultoria Ambiental</strong> cuida de todo o processo 
            com responsabilidade técnica, evitando erros, retrabalho e riscos legais para a sua empresa.
          </p>

          {/* CTA Button */}
          <div className="px-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
              <span>Falar com especialista da FRTB</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust blocks */}
      <div className="relative z-10 border-t border-white/10 bg-[#0a1628]/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Block 1 */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-white font-semibold text-base block">Responsabilidade Técnica</span>
                <span className="text-gray-400 text-sm">Profissionais habilitados</span>
              </div>
            </div>
            
            {/* Block 2 */}
            <div className="flex items-center gap-4 justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-white font-semibold text-base block">Experiência com IBAMA</span>
                <span className="text-gray-400 text-sm">Anos de prática comprovada</span>
              </div>
            </div>
            
            {/* Block 3 */}
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-white font-semibold text-base block">Atuação em todo Brasil</span>
                <span className="text-gray-400 text-sm">Atendimento nacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
