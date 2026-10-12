import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { ScmuChatIcon, ScmuClockIcon, ScmuLocationIcon, ScmuMailIcon } from "@/components/icons/ScmuIcons";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { Container } from "@/components/ui/Container";
import { company, offices } from "@/data/company";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT. SCMU untuk konsultasi dan permintaan penawaran pengiriman barang.",
};

const primaryOffice = offices.find((office) => office.primary) ?? offices[0];
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(primaryOffice.address)}&output=embed`;

export function ContactPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  const contacts = [
    { label: english ? "Phone / WhatsApp" : "Telepon / WhatsApp", value: company.phone, href: company.whatsapp ? `https://wa.me/${company.whatsapp}` : undefined, Icon: ScmuChatIcon },
    { label: "Email", value: company.email, href: company.email ? `mailto:${company.email}` : undefined, Icon: ScmuMailIcon },
    { label: english ? "Business hours" : "Jam operasional", value: english ? "Monday–Saturday, 08:00–17:00 WIT" : company.operationalHours, href: undefined, Icon: ScmuClockIcon },
  ];
  return (
    <main>
      <PhotoPageHero
        creditLabel={english ? "Photo" : "Foto"}
        eyebrow={english ? "Contact PT. SCMU" : "Kontak PT. SCMU"}
        title={english ? "Discuss your freight requirements." : "Diskusikan kebutuhan pengiriman Anda."}
        description={english ? "Briefly describe your requirements. The PT. SCMU team will help discuss a suitable service." : "Sampaikan kebutuhan Anda secara singkat. Tim PT. SCMU akan membantu membahas layanan yang sesuai."}
        image={{
          src: "/images/documentation/operasional-01.jpg",
          position: "center 52%",
          credit: english ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU",
        }}
      />

      <section className="section contact-page">
        <Container className="contact-workspace">
          <aside className="contact-panel contact-panel--details" aria-labelledby="contact-information-title">
            <header className="contact-panel__heading">
              <p className="section-label">{english ? "Contact Us" : "Hubungi Kami"}</p>
              <h2 id="contact-information-title">{english ? "Contact information" : "Informasi kontak"}</h2>
              <p>{english ? "Contact PT. SCMU or visit our office during business hours." : "Hubungi PT. SCMU atau kunjungi lokasi kantor pada jam operasional."}</p>
            </header>
            <dl className="contact-list contact-list--summary">
              {contacts.map(({ label, value, href, Icon }) => (
                <div key={label}>
                  <dt><Icon aria-hidden="true" /><span>{label}</span></dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
            <section className="office-locations" aria-labelledby="office-locations-title">
              <header className="office-locations__heading">
                <h3 id="office-locations-title">{english ? "Our offices" : "Lokasi kantor"}</h3>
                <p>{english ? "Choose an office to view its location and route." : "Pilih kantor untuk melihat lokasi dan rute."}</p>
              </header>
              <div className="office-locations__grid">
                {offices.map((office) => (
                  <article className={`office-card${office.primary ? " office-card--primary" : ""}`} key={office.id}>
                    <span className="office-card__icon" aria-hidden="true"><ScmuLocationIcon /></span>
                    <div>
                      <p className="office-card__type">{english ? office.typeEn : office.type}</p>
                      <h4>{english ? office.labelEn : office.label}</h4>
                      <address>{office.address}</address>
                      <a href={office.mapsUrl} target="_blank" rel="noreferrer">
                        {english ? "View on Google Maps" : "Lihat di Google Maps"} <ArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <div className="contact-panel__map-heading">
              <h3>{english ? "Head office map" : "Peta kantor utama"}</h3>
              <a href={primaryOffice.mapsUrl} target="_blank" rel="noreferrer">
                {english ? "Open in Google Maps" : "Buka di Google Maps"} <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-map">
              <iframe
                src={googleMapsEmbedUrl}
                title={english ? "PT. SCMU office location on Google Maps" : "Lokasi kantor PT. SCMU di Google Maps"}
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

export default function ContactPage() {
  return <ContactPageContent />;
}
