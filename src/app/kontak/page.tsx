import type { Metadata } from "next";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { Container } from "@/components/ui/Container";
import { company, offices } from "@/data/company";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT. SCMU untuk konsultasi dan permintaan penawaran pengiriman barang.",
  alternates: { canonical: "/kontak", languages: { id: "/kontak", en: "/en/kontak" } },
};

const primaryOffice = offices.find((office) => office.primary) ?? offices[0];
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(primaryOffice.address)}&output=embed`;

export function ContactPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  const contacts = [
    { label: english ? "Phone / WhatsApp" : "Telepon / WhatsApp", value: company.phone, href: company.whatsapp ? `https://wa.me/${company.whatsapp}` : undefined },
    { label: "Email", value: company.email, href: company.email ? `mailto:${company.email}` : undefined },
    { label: english ? "Business hours" : "Jam operasional", value: english ? "Monday–Saturday, 08:00–17:00 WIT" : company.operationalHours, href: undefined },
  ];
  return (
    <main>
      <PhotoPageHero
        creditLabel={english ? "Photo" : "Foto"}
        eyebrow={english ? "Contact PT. SCMU" : "Kontak PT. SCMU"}
        title={english ? "Discuss your freight requirements." : "Diskusikan kebutuhan pengiriman Anda."}
        image={{
          src: "/images/hero/container-handling.png",
          position: "50% 50%",
          mobilePosition: "72% 50%",
          credit: english ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU",
        }}
      />

      <section className="section contact-page">
        <Container className="contact-layout">
          <section className="contact-summary" aria-labelledby="contact-information-title">
            <header className="contact-panel__heading">
              <h2 id="contact-information-title">{english ? "Contact information" : "Informasi kontak"}</h2>
            </header>
            <dl className="contact-list contact-list--summary">
              {contacts.map(({ label, value, href }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="contact-workspace">
            <div className="contact-panel contact-page__form">
              <QuotationForm />
            </div>

            <aside className="contact-panel contact-panel--offices" aria-labelledby="office-locations-title">
              <div className="office-locations">
                <header className="office-locations__heading">
                  <h3 id="office-locations-title">{english ? "Our offices" : "Lokasi kantor"}</h3>
                </header>
                <div className="office-locations__grid">
                  {offices.map((office) => (
                    <article className="office-card" key={office.id}>
                      <p className="office-card__type">{english ? office.typeEn : office.type}</p>
                      <h4>{english ? office.labelEn : office.label}</h4>
                      <address>{office.address}</address>
                      <p className="office-card__phone">
                        <span>{english ? "Phone / WhatsApp" : "Telepon / WhatsApp"}</span>{" "}
                        <a
                          href={`https://wa.me/${office.phone.replace(/\D/g, "").replace(/^0/, "62")}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {office.phone}
                        </a>
                      </p>
                      <a className="office-card__map-link" href={office.mapsUrl} target="_blank" rel="noreferrer">
                        {english ? "View on Google Maps" : "Lihat di Google Maps"}
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <section className="contact-map-panel" aria-labelledby="primary-office-map-title">
            <div className="contact-panel__map-heading">
              <div>
                <h3 id="primary-office-map-title">{english ? "Head office map" : "Peta kantor utama"}</h3>
              </div>
              <a href={primaryOffice.mapsUrl} target="_blank" rel="noreferrer">
                {english ? "Open in Google Maps" : "Buka di Google Maps"}
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
          </section>
        </Container>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return <ContactPageContent />;
}
