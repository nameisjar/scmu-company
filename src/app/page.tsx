import type { Metadata } from "next";
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

const homepageDescription = "PT. SCMU Merauke melayani jasa pengurusan transportasi, jasa pengiriman barang, dan jasa ekspedisi darat, laut, udara, sungai, serta multimoda.";

export const metadata: Metadata = {
  description: homepageDescription,
  openGraph: {
    title: "PT. SCMU | Pengiriman Barang",
    description: homepageDescription,
    type: "website",
    locale: "id_ID",
  },
};

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
