import type { Metadata } from "next";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { RouteCoverage } from "@/components/services/RouteCoverage";
import { Container } from "@/components/ui/Container";
import { services, servicesEn } from "@/data/services";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Layanan Pengiriman",
  description: "Layanan pengiriman barang PT. SCMU melalui jalur darat, udara, laut, sungai, dan multimoda.",
};

export function ServicesPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  const localizedServices = english ? servicesEn : services;
  return (
    <main>
      <PhotoPageHero
        creditLabel={english ? "Photo" : "Foto"}
        eyebrow={english ? "PT. SCMU Services" : "Layanan PT. SCMU"}
        title={english ? "Five services for different freight requirements." : "Lima layanan untuk kebutuhan pengiriman yang berbeda."}
        description={english ? "Choose based on cargo characteristics, origin, destination, and time priority. If you are unsure, send us the details for an initial discussion." : "Pilih berdasarkan karakteristik barang, asal, tujuan, dan prioritas waktu. Jika belum yakin, kirimkan detail untuk dibahas terlebih dahulu."}
        image={{
          src: "/images/documentation/operasional-03.jpg",
          position: "center 52%",
          credit: english ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU",
        }}
      />
      <section className="section section--soft">
        <Container><div className="services-grid">{localizedServices.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></Container>
      </section>
      <RouteCoverage locale={locale} />
    </main>
  );
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}
