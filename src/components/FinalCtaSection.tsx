import { MessageCircle, ArrowRight, Shield, Award, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5592984065278";

const FinalCtaSection = () => {
  return (
    <section className="py-16 md:py-28 bg-primary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-5 md:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight mb-6 md:mb-8 px-2">
            Com a <span className="text-amber-400">FRTB Consultoria Ambiental</span>,
            <br className="hidden sm:block" />
            você fica em conformidade com o IBAMA
            <br className="hidden sm:block" />
            e longe de <span className="text-amber-400">riscos, multas e bloqueios</span>.
          </h2>

          {/* Supporting Text */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-10 space-y-3 md:space-y-4 px-2">
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              O RAPP é uma <strong className="text-white">obrigação legal séria</strong> e não deve ser tratado como algo simples. 
              Um erro pode gerar <strong className="text-amber-400">penalidades, multas e bloqueio do CTF</strong>.
            </p>
            <p className="text-base md:text-xl text-white font-medium">
              Fale agora com um especialista e evite problemas com o IBAMA.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="px-4 mb-10 md:mb-12">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-primary font-bold text-base md:text-xl px-6 md:px-12 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0" />
              <span className="text-sm md:text-xl">Falar com especialista da FRTB no WhatsApp</span>
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
            </a>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              </div>
              <span className="text-white font-medium text-sm md:text-lg">
                Atendimento direto com especialista
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              </div>
              <span className="text-white font-medium text-sm md:text-lg">
                Responsabilidade técnica
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              </div>
              <span className="text-white font-medium text-sm md:text-lg">
                Atuação em todo o Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
