import type { Metadata } from "next";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { LogisticsCapabilities } from "@/components/services/LogisticsCapabilities";
import { RouteCoverage } from "@/components/services/RouteCoverage";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Jasa Angkutan Barang Merauke",
  description: "PT. SCMU menyediakan jasa angkutan barang dari Merauke melalui jalur darat, udara, laut, sungai, dan multimoda sesuai kebutuhan serta rute yang tersedia.",
  alternates: { canonical: "/layanan", languages: { id: "/layanan", en: "/en/layanan" } },
};

export function ServicesPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <main>
      <PhotoPageHero
        creditLabel={english ? "Photo" : "Foto"}
        eyebrow={english ? "PT. SCMU Services" : "Layanan PT. SCMU"}
        title={english ? "Cargo transport services from Merauke." : "Jasa Angkutan Barang dari Merauke."}
        description={english ? "PT. SCMU supports cargo transport by road, air, sea, river, and multimodal services. The suitable option depends on cargo characteristics, origin, destination, and route availability." : "PT. SCMU melayani jasa angkutan barang melalui jalur darat, udara, laut, sungai, dan multimoda. Pilihan layanan disesuaikan dengan karakteristik muatan, asal, tujuan, serta ketersediaan rute."}
        image={{
          src: "/images/hero/forklift-loading.png",
          position: "50% 58%",
          mobilePosition: "70% 50%",
          credit: english ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU",
        }}
      />
      <LogisticsCapabilities locale={locale} />
      <RouteCoverage locale={locale} />
    </main>
  );
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}
