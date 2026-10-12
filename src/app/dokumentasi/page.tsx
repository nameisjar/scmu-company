import type { Metadata } from "next";
import { DocumentationGallery } from "@/components/documentation/DocumentationGallery";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Dokumentasi Kegiatan",
  description: "Dokumentasi kegiatan transportasi dan logistik PT. SCMU.",
};

export function DocumentationPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <main>
      <section className="section documentation-page">
        <Container>
          <h1 className="visually-hidden">{english ? "Activity Documentation" : "Dokumentasi Kegiatan"}</h1>
          <DocumentationGallery locale={locale} />
        </Container>
      </section>
    </main>
  );
}

export default function DocumentationPage() {
  return <DocumentationPageContent />;
}
