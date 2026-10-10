import type { Metadata } from "next";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Pertanyaan Umum",
  description: "Jawaban atas pertanyaan umum mengenai layanan dan permintaan penawaran PT. SCMU.",
};

const faqHeroService = services[2];

export default function FaqPage() {
  return (
    <main>
      <PhotoPageHero eyebrow="Pertanyaan Umum" title="Informasi sebelum mengirim detail barang." image={faqHeroService.image} />
      <section className="section section--soft"><Container className="faq-page"><FaqAccordion /></Container></section>
      <section className="section"><Container className="faq-contact"><div><h2>Pertanyaan Anda belum terjawab?</h2><p>Gunakan formulir untuk menyusun detail pengiriman dan melanjutkan percakapan melalui WhatsApp.</p></div><ButtonLink href="/#penawaran" variant="outline">Buka Formulir</ButtonLink></Container></section>
    </main>
  );
}
