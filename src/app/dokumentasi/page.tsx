import type { Metadata } from "next";
import { DocumentationGallery } from "@/components/documentation/DocumentationGallery";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Dokumentasi Kegiatan",
  description: "Dokumentasi kegiatan transportasi dan logistik PT. SCMU.",
};

export default function DocumentationPage() {
  return (
    <main data-section-scroll-native>
      <section className="section documentation-page">
        <Container>
          <h1 className="visually-hidden">Dokumentasi Kegiatan</h1>
          <DocumentationGallery />
          <p className="documentation-note">
            Keterangan foto menjelaskan aktivitas yang tampak pada gambar dan tidak menyatakan waktu, lokasi, rute, atau identitas pelanggan tertentu.
          </p>
        </Container>
      </section>
    </main>
  );
}
