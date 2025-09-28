import { HeroSection } from "@/components/hero-section";
import { DashboardSection } from "@/components/dashboard-section";
import { TechnicalSection } from "@/components/technical-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DashboardSection />
      <TechnicalSection />
    </div>
  );
};

export default Index;
