import {
  CompanyIntro,
  CoverageSection,
  DocumentationSection,
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
      <DocumentationSection />
      <CoverageSection />
      <FaqSection />
      <QuotationSection />
    </main>
  );
}
