import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AlertSection from "@/components/AlertSection";
import WhatIsRappSection from "@/components/WhatIsRappSection";
import SegmentsSection from "@/components/SegmentsSection";
import ProcessSection from "@/components/ProcessSection";
import UrgencySection from "@/components/UrgencySection";
import AuthoritySection from "@/components/AuthoritySection";
import DeadlineSection from "@/components/DeadlineSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <HeroSection />
      </div>
      <AlertSection />
      <WhatIsRappSection />
      <SegmentsSection />
      <ProcessSection />
      <UrgencySection />
      <AuthoritySection />
      <DeadlineSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
