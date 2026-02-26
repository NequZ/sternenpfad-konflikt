import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FactionsSection from "@/components/FactionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import JoinStepsSection from "@/components/JoinStepsSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <AboutSection />
      <FactionsSection />
      <FeaturesSection />
      <WhyJoinSection />
      <JoinStepsSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
