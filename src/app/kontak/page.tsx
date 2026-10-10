import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { ScmuChatIcon, ScmuClockIcon, ScmuLocationIcon, ScmuMailIcon } from "@/components/icons/ScmuIcons";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT. SCMU untuk konsultasi dan permintaan penawaran pengiriman barang.",
};

const contactHeroService = services[0];
const googleMapsUrl = "https://maps.app.goo.gl/5N3aXytZuSUihv1i8";
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`;

const contacts = [
  { label: "Alamat", value: company.address || "Alamat resmi belum diisi", href: googleMapsUrl, Icon: ScmuLocationIcon },
  { label: "Telepon / WhatsApp", value: company.phone || "Nomor resmi belum diisi", href: company.whatsapp ? `https://wa.me/${company.whatsapp}` : undefined, Icon: ScmuChatIcon },
  { label: "Email", value: company.email || "Email resmi belum diisi", href: company.email ? `mailto:${company.email}` : undefined, Icon: ScmuMailIcon },
  { label: "Jam operasional", value: company.operationalHours || "Jam operasional belum diisi", href: undefined, Icon: ScmuClockIcon },
];

export default function ContactPage() {
  return (
    <main>
      <PhotoPageHero eyebrow="Kontak PT. SCMU" title="Diskusikan kebutuhan pengiriman Anda." image={contactHeroService.image} />

      <section className="section contact-page">
        <Container className="contact-workspace">
          <aside className="contact-panel contact-panel--details" aria-labelledby="contact-information-title">
            <header className="contact-panel__heading">
              <p className="section-label">Hubungi Kami</p>
              <h2 id="contact-information-title">Informasi kontak</h2>
              <p>Hubungi PT. SCMU atau kunjungi lokasi kantor pada jam operasional.</p>
            </header>
            <dl className="contact-list">
              {contacts.map(({ label, value, href, Icon }) => (
                <div key={label}>
                  <dt><Icon aria-hidden="true" /><span>{label}</span></dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
            <div className="contact-panel__map-heading">
              <h3>Lokasi kantor</h3>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                Buka di Google Maps <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-map">
              <iframe
                src={googleMapsEmbedUrl}
                title="Lokasi kantor PT. SCMU di Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
          <div className="contact-panel contact-page__form">
            <QuotationForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
