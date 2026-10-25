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

const homepageTitle = "PT. SCMU Merauke | Jasa Pengurusan Transportasi | Jasa Pengiriman Barang | Jasa Ekspedisi";

const homepageDescription = "PT. SCMU Merauke melayani jasa pengurusan transportasi, jasa pengiriman barang, dan jasa ekspedisi darat, laut, udara, sungai, serta multimoda.";

export const metadata: Metadata = {
  title: { absolute: homepageTitle },
  description: homepageDescription,
  alternates: { canonical: "/", languages: { id: "/", en: "/en" } },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    type: "website",
    locale: "id_ID",
    url: "/",
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
