import equilibriumLogo from "@/assets/partners/equilibrium-medical.jpg";
import sinetramLogo from "@/assets/partners/sinetram.png";
import amPetroleoLogo from "@/assets/partners/am-petroleo.jpg";
import brasolLogo from "@/assets/partners/brasol.png";
import colortechLogo from "@/assets/partners/colortech.png";
import kawasakiLogo from "@/assets/partners/kawasaki.png";
import speedyCleanLogo from "@/assets/partners/speedy-clean.png";
import autoserviceLogo from "@/assets/partners/autoservice.png";
import gicLogo from "@/assets/partners/gic.jpg";
import smartResidenceLogo from "@/assets/partners/smart-residence.png";
import concentradosParanaLogo from "@/assets/partners/concentrados-parana.png";
import cernLogo from "@/assets/partners/cern.png";
import enerwattLogo from "@/assets/partners/enerwatt.png";
import marquiseLogo from "@/assets/partners/marquise.jpg";
import peixariaSombraLuaLogo from "@/assets/partners/peixaria-sombra-lua.jpg";

const partners = [
  { name: "Kawasaki", logo: kawasakiLogo },
  { name: "Sinetram", logo: sinetramLogo },
  { name: "AM Petróleo", logo: amPetroleoLogo },
  { name: "Equilibrium Medical", logo: equilibriumLogo },
  { name: "Brasol", logo: brasolLogo },
  { name: "Colortech da Amazônia", logo: colortechLogo },
  { name: "Speedy & Clean Lavanderia", logo: speedyCleanLogo },
  { name: "AutoService", logo: autoserviceLogo },
  { name: "GIC - Global Impact Communications", logo: gicLogo },
  { name: "Smart Residence", logo: smartResidenceLogo },
  { name: "Concentrados Paraná", logo: concentradosParanaLogo },
  { name: "CERN Consultoria", logo: cernLogo },
  { name: "Enerwatt Engenharia", logo: enerwattLogo },
  { name: "Marquise Ambiental", logo: marquiseLogo },
  { name: "Peixaria Sombra da Lua", logo: peixariaSombraLuaLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-5 md:px-6">
        {/* Header Text */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-xl text-foreground/80 font-medium max-w-3xl mx-auto leading-relaxed px-2">
            Atendemos empresas de todos os portes, do pequeno negócio a grandes multinacionais.
          </p>
        </div>

        {/* Partners Label */}
        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-xs md:text-base font-semibold text-muted-foreground uppercase tracking-wider">
            Alguns dos nossos parceiros
          </h3>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-3" />
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* First Row - Scrolling Left */}
        <div className="flex animate-marquee mb-6 md:mb-8">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 md:mx-10"
            >
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 min-w-[140px] md:min-w-[180px] h-[80px] md:h-[100px] flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-h-12 md:max-h-16 w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="flex animate-marquee-reverse">
          {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
            <div
              key={`${partner.name}-reverse-${index}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 md:mx-10"
            >
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 min-w-[140px] md:min-w-[180px] h-[80px] md:h-[100px] flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-h-12 md:max-h-16 w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
