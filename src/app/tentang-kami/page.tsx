import type { Metadata } from "next";
import { ClipboardCheck, MessageSquareText, Route, Waypoints } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal PT. SCMU dan layanan pengiriman melalui jalur darat, udara, laut, sungai, dan kereta.",
};

const values = [
  { title: "Memahami kebutuhan", text: "Detail barang dan tujuan menjadi dasar setiap pembahasan solusi.", Icon: MessageSquareText },
  { title: "Menghubungkan pilihan", text: "Lima moda dipertimbangkan sesuai barang, rute, dan konteks pengiriman.", Icon: Waypoints },
  { title: "Menata proses", text: "Informasi disusun agar koordinasi pengiriman lebih terarah.", Icon: ClipboardCheck },
  { title: "Menjaga komunikasi", text: "Konsultasi membantu menyamakan informasi sebelum proses dimulai.", Icon: Route },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero context="Tentang PT. SCMU" title="Pengiriman dibahas dari barang dan rutenya." description={company.description}>
        <ButtonLink href="/#penawaran">Mulai Konsultasi</ButtonLink>
      </PageHero>
      <section className="section">
        <Container className="editorial-grid">
          <div><p className="section-label">Profil perusahaan</p><h2>Lima pilihan moda pengiriman.</h2></div>
          <div>
            <p className="lead">PT. SCMU bergerak dalam layanan pengiriman barang melalui jalur darat, udara, laut, sungai, dan kereta.</p>
            <p>Kami menempatkan kebutuhan pengiriman sebagai titik awal: jenis barang, jumlah, asal, tujuan, serta prioritas menjadi informasi penting sebelum solusi dibahas.</p>
            <p className="data-note">Deskripsi legal, sejarah, dan informasi korporasi lainnya akan dilengkapi berdasarkan data resmi PT. SCMU.</p>
          </div>
        </Container>
      </section>
      <section className="section section--soft">
        <Container>
          <div className="section-heading"><h2>Informasi diperiksa sebelum pilihan ditentukan.</h2></div>
          <div className="values-grid">
            {values.map(({ title, text, Icon }) => (
              <article className="value-item" key={title}>
                <Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section section--cta"><Container className="cta-band"><div><h2>Kirim detail barang dan rute Anda.</h2><p>PT. SCMU akan menggunakan informasi tersebut untuk memulai pembahasan pengiriman.</p></div><ButtonLink href="/#penawaran" variant="light">Minta Penawaran</ButtonLink></Container></section>
    </main>
  );
}
