import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DocumentationGallery } from "@/components/documentation/DocumentationGallery";
import { ScmuCargoPictogram, ScmuConversationPictogram, ScmuCoordinationPictogram, ScmuRoutePictogram } from "@/components/icons/ScmuApproachPictograms";
import { services, servicesEn } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";
import { QuotationForm } from "../forms/QuotationForm";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FaqAccordion } from "./FaqAccordion";

const whyReasons = [
  { title: "Berbasis di Merauke", text: "Cakupan layanan di Papua Selatan meliputi Merauke, Boven Digoel, Mappi, dan Asmat.", Icon: ScmuCargoPictogram },
  { title: "Pilihan moda transportasi", text: "Darat, laut, udara, sungai, dan multimoda untuk menyesuaikan kebutuhan barang serta rute yang tersedia.", Icon: ScmuRoutePictogram },
  { title: "Cakupan rute antardaerah", text: "Menghubungkan Merauke dengan Jakarta, Surabaya, dan Makassar, serta melayani pengiriman dari Merauke ke Pontianak dan Medan.", Icon: ScmuCoordinationPictogram },
  { title: "Pembahasan melalui kontak resmi", text: "Konsultasikan jenis barang, asal, tujuan, dan kebutuhan pengiriman melalui WhatsApp resmi PT. SCMU.", Icon: ScmuConversationPictogram },
];

export function CompanyIntro({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <section className="section anchor-section intro-section" id="tentang-kami">
      <Container>
        <div className="intro-profile">
          <figure className="intro-profile__media">
            <Image
              className="intro-profile__photo"
              src="/images/documentation/lapangan-03.jpeg"
              alt={english ? "SCMU forklift handling a container in the operational yard" : "Forklift SCMU menangani kontainer di area operasional"}
              fill
              sizes="(max-width: 492px) calc(100vw - 32px), (max-width: 860px) 460px, (max-width: 1248px) 42vw, 460px"
            />
            <div className="intro-profile__experience">
              <span>15+</span>
              <strong>{english ? "Years of Experience" : "Tahun Pengalaman"}</strong>
            </div>
            <div className="intro-profile__map-area">
              <Image
                className="intro-profile__map"
                src="/images/scmu-south-papua-map.png"
                alt={english ? "Illustration of Mappi, Boven Digoel, Asmat, and Merauke" : "Ilustrasi wilayah Mappi, Boven Digoel, Asmat, dan Merauke"}
                width={1536}
                height={1024}
                sizes="(max-width: 492px) 52vw, 240px"
              />
            </div>
            <div className="intro-profile__branding">
              <div className="intro-profile__logo">
                <Image src="/logo/scmu-mark.png" alt="" width={120} height={120} />
              </div>
              <strong>PT. SARANA CIPTA MANDIRI UTAMA</strong>
              <span>PT. SCMU</span>
            </div>
          </figure>

          <div className="intro-profile__copy">
            <p className="section-label">{english ? "Company Overview" : "Profil Singkat"}</p>
            <h2>{english ? "A transport-management partner from South Papua since 2009." : "Mitra pengurusan transportasi dari Papua Selatan sejak 2009."}</h2>
            <p className="lead">
              {english ? "PT. SCMU is a transport-management company supporting distribution needs through road, air, sea, river, and multimodal services." : "PT. SCMU merupakan perusahaan Jasa Pengurusan Transportasi yang membantu kebutuhan distribusi melalui jalur darat, udara, laut, sungai, dan multimoda."}
            </p>
            <p>
              {english ? "Based in Merauke, our services cover Merauke, Mappi, Boven Digoel, Asmat, and other regions subject to route availability." : "Berbasis di Merauke, layanan kami mencakup Merauke, Mappi, Boven Digoel, Asmat, serta berbagai wilayah lain sesuai ketersediaan rute."}
            </p>

            <dl className="intro-profile__facts">
              <div><dt>{english ? "Established" : "Tahun berdiri"}</dt><dd>2009</dd></div>
              <div><dt>{english ? "South Papua focus" : "Fokus Papua Selatan"}</dt><dd>{english ? "4 regions" : "4 wilayah"}</dd></div>
              <div><dt>{english ? "Transport options" : "Pilihan transportasi"}</dt><dd>{english ? "5 services" : "5 layanan"}</dd></div>
            </dl>

            <Link className="text-link" href={localizeHref("/tentang-kami", locale)}>
              {english ? "View Company Profile" : "Lihat Profil Perusahaan"} <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServicesSection({ locale = "id" }: { locale?: Locale }) {
  const localizedServices = locale === "en" ? servicesEn : services;
  return (
    <section className="section anchor-section services-section" id="layanan">
      <Container>
        <SectionHeading title={locale === "en" ? "Freight Services" : "Layanan Pengiriman"} align="center" />
        <div className="home-services-grid">
          {localizedServices.map((service) => (
            <article className="home-service-card" key={service.slug}>
              <div className="home-service-card__image">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 860px) 50vw, 34vw"
                  style={{ objectPosition: service.image.position }}
                />
              </div>
              <div className="home-service-card__copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhySection({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  const localizedReasons = english ? [
    { title: "Based in Merauke", text: "Our South Papua service coverage includes Merauke, Boven Digoel, Mappi, and Asmat.", Icon: ScmuCargoPictogram },
    { title: "Transport mode options", text: "Road, sea, air, river, and multimodal options to suit cargo requirements and available routes.", Icon: ScmuRoutePictogram },
    { title: "Interregional route coverage", text: "Connecting Merauke with Jakarta, Surabaya, and Makassar, with outbound services from Merauke to Pontianak and Medan.", Icon: ScmuCoordinationPictogram },
    { title: "Discussion through official channels", text: "Discuss cargo type, origin, destination, and shipping requirements through PT. SCMU’s official WhatsApp contact.", Icon: ScmuConversationPictogram },
  ] : whyReasons;
  return (
    <section className="section anchor-section approach-section" id="keunggulan" aria-labelledby="why-heading">
      <Container>
        <div className="approach-editorial__header">
          <div className="approach-editorial__heading">
            <p className="section-label">{english ? "Why PT. SCMU" : "Mengapa PT. SCMU"}</p>
            <h2 id="why-heading">{english ? "A freight partner for distribution needs in South Papua." : "Mitra pengiriman untuk kebutuhan distribusi di Papua Selatan."}</h2>
          </div>
          <div className="approach-editorial__intro">
            <p>
              {english ? "PT. SCMU supports shipping needs within South Papua and between regions through available transport modes and routes. Discuss service details directly through our official contact channels." : "PT. SCMU membantu kebutuhan pengiriman di Papua Selatan dan antardaerah melalui pilihan moda serta rute yang tersedia. Detail layanan dapat dibahas langsung melalui kontak resmi perusahaan."}
            </p>
          </div>
        </div>
        <ul className="approach-editorial__principles">
          {localizedReasons.map(({ title, text, Icon }) => (
            <li key={title} className="approach-editorial__principle">
              <div className="approach-editorial__marker" aria-hidden="true">
                <Icon />
              </div>
              <div className="approach-editorial__content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="approach-editorial__footer">
          <Link className="text-link approach-editorial__route-link" href={localizeHref("/layanan#cakupan-rute", locale)}>
            {english ? "View Route Coverage" : "Lihat Cakupan Rute"} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function DocumentationSection({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <section className="section anchor-section documentation-section" id="dokumentasi">
      <Container>
        <div className="documentation-section__heading">
          <div>
            <p className="section-label">{english ? "Activity Documentation" : "Dokumentasi Kegiatan"}</p>
            <h2>{english ? "Transport and logistics activities in the field." : "Aktivitas transportasi dan logistik di lapangan."}</h2>
          </div>
          <div>
            <ButtonLink href={localizeHref("/dokumentasi", locale)} variant="outline">{english ? "View All Documentation" : "Lihat Semua Dokumentasi"}</ButtonLink>
          </div>
        </div>
        <DocumentationGallery limit={5} variant="preview" locale={locale} />
      </Container>
    </section>
  );
}

export function FaqSection({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <section className="section anchor-section section--soft" id="faq">
      <Container>
        <SectionHeading
          title={english ? "Frequently Asked Questions" : "Pertanyaan Umum"}
          description={english ? "Brief answers about our services and process before you send cargo details." : "Jawaban ringkas tentang layanan dan proses sebelum Anda mengirim detail barang."}
          align="center"
        />
        <div className="faq-grid">
          <div>
            <h3 className="faq-grid__headline">{english ? "Find the information you need." : "Temukan informasi yang Anda perlukan."}</h3>
            <p>{english ? "If your question is not answered here, contact us to discuss your shipping needs." : "Jika jawaban yang dicari belum tersedia, hubungi kami untuk membahas kebutuhan pengiriman Anda."}</p>
            <Link className="text-link" href={localizeHref("/faq", locale)}>{english ? "View all FAQs" : "Lihat semua FAQ"} <ArrowRight aria-hidden="true" /></Link>
          </div>
          <FaqAccordion limit={4} locale={locale} />
        </div>
      </Container>
    </section>
  );
}

export function QuotationSection({ locale = "id" }: { locale?: Locale }) {
  return (
    <section className="section anchor-section quote-section" id="penawaran">
      <Container>
        <SectionHeading
          title={locale === "en" ? "Request a Quotation" : "Minta Penawaran"}
          description={locale === "en" ? "Briefly describe your needs. The website will prepare a message to continue via WhatsApp." : "Tulis kebutuhan Anda secara singkat. Website akan menyiapkan pesan untuk dilanjutkan melalui WhatsApp."}
          align="center"
        />
        <div className="quote-layout"><QuotationForm /></div>
      </Container>
    </section>
  );
}
