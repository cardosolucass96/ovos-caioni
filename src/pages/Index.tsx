import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CommitmentSection } from "@/components/CommitmentSection";
import { CertificationSection } from "@/components/CertificationSection";
import { ProductLineSection } from "@/components/ProductLineSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnerFormSection } from "@/components/PartnerFormSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-lato">
      <HeroSection />
      <WhyChooseSection />
      <CommitmentSection />
      <CertificationSection />
      <ProductLineSection />
      <TestimonialsSection />
      <PartnerFormSection />
      <Footer />
    </div>
  );
};

export default Index;
