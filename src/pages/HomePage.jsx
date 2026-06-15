import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ServiceAreasSection from "../components/home/ServiceAreasSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import RetailerCTA from "../components/ui/RetailerCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServiceAreasSection />
      <WhyChooseUs />
      <RetailerCTA />
    </>
  );
}
