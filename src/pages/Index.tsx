import HeroSection from "@/components/HeroSection";
import WhoMustDeliverSection from "@/components/WhoMustDeliverSection";
import DeadlinePenaltiesSection from "@/components/DeadlinePenaltiesSection";
import WhyNotSimpleSection from "@/components/WhyNotSimpleSection";
import WrongRappSection from "@/components/WrongRappSection";
import WhyFrtbSection from "@/components/WhyFrtbSection";
import DiyRiskSection from "@/components/DiyRiskSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhoMustDeliverSection />
      <DeadlinePenaltiesSection />
      <WhyNotSimpleSection />
      <WrongRappSection />
      <WhyFrtbSection />
      <DiyRiskSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
