import type { Metadata } from "next";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Pertanyaan Umum",
  description: "Jawaban atas pertanyaan umum mengenai layanan dan permintaan penawaran PT. SCMU.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero context="Pertanyaan umum" title="Informasi sebelum mengirim detail barang." description="Pelajari layanan, perbedaan moda, dan data yang perlu disiapkan untuk meminta penawaran.">
        <ButtonLink href="/#penawaran">Minta Penawaran</ButtonLink>
      </PageHero>
      <section className="section section--soft"><Container className="faq-page"><FaqAccordion /></Container></section>
      <section className="section"><Container className="faq-contact"><div><h2>Pertanyaan Anda belum terjawab?</h2><p>Gunakan formulir untuk menyusun detail pengiriman dan melanjutkan percakapan melalui WhatsApp.</p></div><ButtonLink href="/#penawaran" variant="outline">Buka Formulir</ButtonLink></Container></section>
    </main>
  );
}
