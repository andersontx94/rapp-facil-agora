import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import WhoMustDeliverSection from "@/components/WhoMustDeliverSection";
import DeadlinePenaltiesSection from "@/components/DeadlinePenaltiesSection";
import WhyNotSimpleSection from "@/components/WhyNotSimpleSection";
import WrongRappSection from "@/components/WrongRappSection";
import WhyFrtbSection from "@/components/WhyFrtbSection";
import DiyRiskSection from "@/components/DiyRiskSection";
import ChecklistFormSection from "@/components/ChecklistFormSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <WhoMustDeliverSection />
      <DeadlinePenaltiesSection />
      <WhyNotSimpleSection />
      <WrongRappSection />
      <WhyFrtbSection />
      <DiyRiskSection />
      <ChecklistFormSection />
      <FinalCtaSection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
};

export default Index;
