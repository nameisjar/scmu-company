import type { Metadata } from "next";
import { MapPin, Route } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Area Pengiriman",
  description: "Informasi cakupan dan konfirmasi rute pengiriman PT. SCMU.",
};

export default function CoveragePage() {
  return (
    <main>
      <PageHero context="Area pengiriman" title="Periksa ketersediaan rute sebelum mengirim." description="Cakupan layanan mengikuti rute dan ketersediaan operasional PT. SCMU. Sampaikan lokasi asal serta tujuan untuk mendapatkan konfirmasi.">
        <ButtonLink href="/#penawaran">Konfirmasi Rute</ButtonLink>
      </PageHero>
      <section className="section">
        <Container className="coverage-page-grid">
          <div className="coverage-map coverage-map--large" aria-label="Ilustrasi koneksi rute, bukan peta cakupan sebenarnya">
            <div className="coverage-map__label"><MapPin aria-hidden="true" /> Cakupan berdasarkan konfirmasi</div>
            <svg viewBox="0 0 600 300" aria-hidden="true"><path d="M54 215C135 215 144 73 253 83C357 92 325 244 446 220C504 208 518 131 561 96" /><circle cx="54" cy="215" r="8" /><circle cx="253" cy="83" r="8" /><circle cx="446" cy="220" r="8" /><circle cx="561" cy="96" r="11" /></svg>
            <p>Visual koneksi bersifat ilustratif dan tidak merepresentasikan rute operasional sebenarnya.</p>
          </div>
          <div>
            <p className="section-label">Data resmi</p>
            <h2>Daftar area belum dipublikasikan.</h2>
            <p>Untuk menjaga akurasi informasi, website tidak menampilkan daftar wilayah sebelum data resmi tersedia.</p>
            <div className="notice-card"><Route aria-hidden="true" /><div><h3>Punya rute tertentu?</h3><p>Masukkan lokasi asal dan tujuan pada formulir penawaran untuk meminta konfirmasi.</p></div></div>
          </div>
        </Container>
      </section>
      <section className="section section--cta"><Container className="cta-band"><div><h2>Beritahu kami asal dan tujuan pengiriman.</h2><p>Tim PT. SCMU akan membantu mengonfirmasi ketersediaan layanan.</p></div><ButtonLink href="/#penawaran" variant="light">Isi Detail Rute</ButtonLink></Container></section>
    </main>
  );
}
