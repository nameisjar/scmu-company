import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT. SCMU untuk konsultasi dan permintaan penawaran pengiriman barang.",
};

const contacts = [
  { label: "WhatsApp", value: company.whatsapp || "Nomor resmi belum diisi", Icon: MessageCircle },
  { label: "Email", value: company.email || "Email resmi belum diisi", Icon: Mail },
  { label: "Alamat", value: company.address || "Alamat resmi belum diisi", Icon: MapPin },
  { label: "Jam operasional", value: company.operationalHours || "Jam operasional belum diisi", Icon: Clock3 },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero context="Kontak PT. SCMU" title="Kirimkan detail barang, asal, dan tujuan." description="Gunakan formulir penawaran untuk menyiapkan informasi pengiriman sebelum melanjutkan ke WhatsApp.">
        <ButtonLink href="/#penawaran">Isi Formulir Penawaran</ButtonLink>
      </PageHero>
      <section className="section">
        <Container>
          <div className="section-heading"><h2>Informasi kontak PT. SCMU.</h2><p>Detail berikut akan diperbarui setelah informasi resmi perusahaan tersedia.</p></div>
          <dl className="contact-list">
            {contacts.map(({ label, value, Icon }) => <div key={label}><dt><Icon aria-hidden="true" />{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <div className="data-banner"><strong>Catatan pengelola</strong><p>Isi data resmi pada <code>src/data/company.ts</code> dan variabel <code>NEXT_PUBLIC_WHATSAPP_NUMBER</code>.</p></div>
        </Container>
      </section>
    </main>
  );
}
