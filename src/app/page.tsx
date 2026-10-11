import {
  CompanyIntro,
  DocumentationSection,
  FaqSection,
  QuotationSection,
  ServicesSection,
  WhySection,
} from "@/components/sections/HomeSections";
import { HeroSection } from "@/components/sections/HeroSection";
import type { Locale } from "@/i18n/config";

export function HomePageContent({ locale = "id" }: { locale?: Locale }) {
  return (
    <main>
      <HeroSection locale={locale} />
      <CompanyIntro locale={locale} />
      <ServicesSection locale={locale} />
      <WhySection locale={locale} />
      <DocumentationSection locale={locale} />
      <FaqSection locale={locale} />
      <QuotationSection locale={locale} />
    </main>
  );
}

export default function HomePage() {
  return <HomePageContent />;
}
