import type { Metadata } from "next";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Pertanyaan Umum",
  description: "Jawaban atas pertanyaan umum mengenai layanan dan permintaan penawaran PT. SCMU.",
};

export function FaqPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <main>
      <PhotoPageHero
        creditLabel={english ? "Photo" : "Foto"}
        eyebrow={english ? "Frequently Asked Questions" : "Pertanyaan Umum"}
        title={english ? "Information before you send cargo details." : "Informasi sebelum mengirim detail barang."}
        image={{
          src: "/images/documentation/operasional-07.jpg",
          position: "center 54%",
          credit: english ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU",
        }}
      />
      <section className="section section--soft"><Container className="faq-page"><FaqAccordion locale={locale} /></Container></section>
      <section className="section"><Container className="faq-contact"><div><h2>{english ? "Still have a question?" : "Pertanyaan Anda belum terjawab?"}</h2><p>{english ? "Use the form to organize your shipment details and continue the conversation via WhatsApp." : "Gunakan formulir untuk menyusun detail pengiriman dan melanjutkan percakapan melalui WhatsApp."}</p></div><ButtonLink href={localizeHref("/#penawaran", locale)} variant="outline">{english ? "Open Form" : "Buka Formulir"}</ButtonLink></Container></section>
    </main>
  );
}

export default function FaqPage() {
  return <FaqPageContent />;
}
