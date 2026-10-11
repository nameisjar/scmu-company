import type { Metadata } from "next";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Layanan Pengiriman",
  description: "Layanan pengiriman barang PT. SCMU melalui jalur darat, udara, laut, sungai, dan multimoda.",
};

export default function ServicesPage() {
  return (
    <main>
      <PhotoPageHero
        eyebrow="Layanan PT. SCMU"
        title="Lima layanan untuk kebutuhan pengiriman yang berbeda."
        description="Pilih berdasarkan karakteristik barang, asal, tujuan, dan prioritas waktu. Jika belum yakin, kirimkan detail untuk dibahas terlebih dahulu."
        image={{
          src: "/images/documentation/operasional-03.jpg",
          position: "center 52%",
          credit: "Dokumentasi PT. SCMU",
        }}
      >
        <ButtonLink href="/#penawaran">Minta Penawaran</ButtonLink>
      </PhotoPageHero>
      <section className="section section--soft">
        <Container><div className="services-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></Container>
      </section>
      <section className="section"><Container className="editorial-grid"><div><p className="section-label">Memilih moda</p><h2>Mulai dari barang, rute, dan prioritas.</h2></div><div><p className="lead">Tidak semua kebutuhan pengiriman memakai moda yang sama.</p><p>Karakteristik barang, jumlah atau berat, lokasi asal, lokasi tujuan, dan prioritas waktu membantu menentukan pilihan yang dapat dipertimbangkan.</p><ButtonLink href="/#penawaran" variant="outline">Konsultasikan Kebutuhan</ButtonLink></div></Container></section>
    </main>
  );
}
