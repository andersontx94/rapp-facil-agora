import equilibriumLogo from "@/assets/partners/equilibrium-medical.jpg";
import sinetramLogo from "@/assets/partners/sinetram.png";
import amPetroleoLogo from "@/assets/partners/am-petroleo.jpg";
import brasolLogo from "@/assets/partners/brasol.png";
import colortechLogo from "@/assets/partners/colortech.png";
import kawasakiLogo from "@/assets/partners/kawasaki.png";

const partners = [
  { name: "Kawasaki", logo: kawasakiLogo },
  { name: "Sinetram", logo: sinetramLogo },
  { name: "AM Petróleo", logo: amPetroleoLogo },
  { name: "Equilibrium Medical", logo: equilibriumLogo },
  { name: "Brasol", logo: brasolLogo },
  { name: "Colortech da Amazônia", logo: colortechLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-foreground/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Atendemos empresas de todos os portes, do pequeno negócio a grandes multinacionais.
          </p>
        </div>

        {/* Partners Label */}
        <div className="text-center mb-10">
          <h3 className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wider">
            Alguns dos nossos parceiros
          </h3>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-3" />
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 w-full"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="max-h-16 md:max-h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
