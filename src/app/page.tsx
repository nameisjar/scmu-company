import {
  CompanyIntro,
  CoverageSection,
  FaqSection,
  QuotationSection,
  ServicesSection,
  WhySection,
} from "@/components/sections/HomeSections";
import { HeroSection } from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CompanyIntro />
      <ServicesSection />
      <WhySection />
      <CoverageSection />
      <FaqSection />
      <QuotationSection />
    </main>
  );
}
