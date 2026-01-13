import { Calendar } from "lucide-react";

const DeadlineSection = () => {
  return (
    <section className="py-16 bg-card relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-accent" />
            <span className="heading-display text-2xl md:text-3xl text-foreground">
              Prazo legal do RAPP:
            </span>
          </div>
          
          <p className="heading-display text-4xl md:text-5xl lg:text-6xl text-accent mb-6">
            até 31 de março
          </p>
          
          <p className="text-body text-lg text-muted-foreground">
            Não deixe para a última hora. <strong className="text-foreground">Regularize agora.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeadlineSection;
