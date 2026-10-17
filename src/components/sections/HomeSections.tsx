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
  { title: "Berbasis di Merauke", text: "Jasa distribusi barang di Papua Selatan mencakup Merauke, Boven Digoel, Mappi, dan Asmat sesuai akses wilayah yang tersedia.", Icon: ScmuCargoPictogram },
  { title: "Pilihan moda transportasi", text: "Pilihan darat, udara, sungai, dan jasa pengiriman laut disesuaikan dengan karakteristik barang serta akses wilayah tujuan.", Icon: ScmuRoutePictogram },
  { title: "Cakupan rute antardaerah", text: "Pengiriman barang antarpulau menghubungkan Merauke dengan Jakarta, Surabaya, dan Makassar. Pengiriman dari Merauke juga tersedia menuju Pontianak dan Medan sesuai rute yang dilayani.", Icon: ScmuCoordinationPictogram },
  { title: "Pembahasan melalui kontak resmi", text: "Konsultasikan kebutuhan jasa angkutan barang melalui WhatsApp resmi. Untuk jasa angkutan kontainer atau jasa pengiriman barang proyek, siapkan jenis muatan, berat, ukuran, serta alamat asal dan tujuan.", Icon: ScmuConversationPictogram },
];

// Homepage copy stays separate so service details on other pages are unchanged.
const homeServiceDescriptions: Record<string, { id: string; en: string }> = {
  "pengiriman-darat": {
    id: "Jasa pengiriman darat mendukung jasa angkutan barang antarkota dan antarwilayah sesuai cakupan layanan serta akses jalan yang tersedia.",
    en: "Road cargo transport for intercity and regional distribution within the service coverage and available road access.",
  },
  "pengiriman-udara": {
    id: "Jasa pengiriman udara untuk barang dengan prioritas waktu pada rute penerbangan yang tersedia. Jenis barang, berat, dan dimensi perlu diinformasikan sebelum layanan dikonfirmasi.",
    en: "Shipping on available air routes for time-priority cargo. Cargo type, weight, and dimensions are reviewed before confirming the service.",
  },
  "pengiriman-laut": {
    id: "Jasa pengiriman laut untuk pengiriman barang antarpulau. Pilihan layanan mempertimbangkan volume, kemasan, pelabuhan asal dan tujuan, serta jadwal kapal yang tersedia.",
    en: "Sea freight for inter-island cargo distribution. Options depend on volume, packaging, origin and destination ports, and available vessel schedules.",
  },
  "pengiriman-sungai": {
    id: "Jasa pengiriman sungai untuk wilayah yang terhubung jalur perairan. Titik muat, titik bongkar, karakteristik muatan, dan kondisi perairan dibahas sebelum pengiriman.",
    en: "Cargo transport for areas connected by rivers. Loading and unloading points, cargo characteristics, and waterway conditions are discussed before shipment.",
  },
  "pengiriman-multimoda": {
    id: "Jasa pengiriman multimoda menggabungkan dua atau lebih moda transportasi. Susunan perjalanan disesuaikan dengan rute, titik perpindahan, akses wilayah, dan kebutuhan barang.",
    en: "Multimodal freight combines two or more transport modes. The journey is planned around the route, transfer points, regional access, and cargo requirements.",
  },
};

export function CompanyIntro({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <section className="section anchor-section intro-section" id="tentang-kami">
      <Container>
        <div className="intro-profile">
          <figure className="intro-profile__media">
            <div className="intro-profile__logo">
              <Image
                src="/logo/scmu-mark.png"
                alt=""
                width={500}
                height={500}
                sizes="(max-width: 472px) 56vw, 247px"
              />
            </div>
            <figcaption className="intro-profile__branding">
              <strong>PT. SARANA CIPTA MANDIRI UTAMA</strong>
              <span>PT. SCMU</span>
            </figcaption>
          </figure>

          <div className="intro-profile__copy">
            <p className="section-label">{english ? "Company Overview" : "Profil Singkat"}</p>
            <h2>{english ? "Transport-management services from Merauke." : "Jasa Pengurusan Transportasi dari Merauke."}</h2>
            <p className="lead">
              {english ? "Based in Merauke, South Papua, PT. SCMU supports transport management and logistics needs. As a freight-forwarding company, we plan cargo shipping and distribution according to cargo characteristics and customer requirements." : "Berbasis di Merauke, Papua Selatan, PT. SCMU mendukung kebutuhan jasa pengurusan transportasi dan jasa logistik. Sebagai perusahaan freight forwarding, kami merencanakan jasa pengiriman barang dan jasa distribusi barang sesuai karakteristik muatan serta kebutuhan pelanggan."}
            </p>
            <p>
              {english ? "As a freight-forwarding partner, we help plan distribution in Merauke, Mappi, Boven Digoel, Asmat, and other regions of Indonesia, subject to route availability." : "Sebagai mitra jasa ekspedisi, kami membantu merencanakan distribusi di Merauke, Mappi, Boven Digoel, Asmat, serta wilayah lain di Indonesia sesuai ketersediaan rute."}
            </p>

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
        <SectionHeading title={locale === "en" ? "Cargo Shipping and Freight Forwarding" : "Jasa Pengiriman Barang dan Jasa Ekspedisi"} align="center" />
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
                <h3>{locale === "id" ? `Jasa ${service.title}` : service.title}</h3>
                <p>{homeServiceDescriptions[service.slug]?.[locale] ?? service.description}</p>
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
    { title: "Based in Merauke", text: "Cargo distribution in South Papua covers Merauke, Boven Digoel, Mappi, and Asmat, subject to available regional access.", Icon: ScmuCargoPictogram },
    { title: "Transport mode options", text: "Road, air, river, and sea freight options suit cargo characteristics and access to the destination.", Icon: ScmuRoutePictogram },
    { title: "Interregional route coverage", text: "Inter-island distribution connects Merauke with Jakarta, Surabaya, and Makassar. Outbound shipments from Merauke also serve Pontianak and Medan on available routes.", Icon: ScmuCoordinationPictogram },
    { title: "Discussion through official channels", text: "Discuss cargo transport needs through our official WhatsApp contact. For container transport or project shipments, prepare cargo type, weight, dimensions, and origin and destination addresses.", Icon: ScmuConversationPictogram },
  ] : whyReasons;
  return (
    <section className="section anchor-section approach-section" id="keunggulan" aria-labelledby="why-heading">
      <Container>
        <div className="approach-editorial__header">
          <div className="approach-editorial__heading">
            <p className="section-label">{english ? "Why PT. SCMU" : "Mengapa PT. SCMU"}</p>
            <h2 id="why-heading">{english ? "Your distribution partner in South Papua." : "Mitra distribusi Anda di Papua Selatan."}</h2>
          </div>
          <div className="approach-editorial__intro">
            <p>
              {english ? "As a freight-forwarding company, PT. SCMU supports logistics needs within South Papua and between regions. Where a route requires transfers between modes, multimodal freight is planned around the available connections. Contact our team to discuss your shipment and service availability." : "Sebagai perusahaan freight forwarding, PT. SCMU mendukung kebutuhan jasa logistik di Papua Selatan dan antardaerah. Untuk rute yang memerlukan perpindahan moda, jasa pengiriman multimoda direncanakan mengikuti koneksi yang tersedia. Hubungi tim kami untuk membahas kebutuhan pengiriman dan memperoleh informasi layanan."}
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
            <p>{english ? "View container transport and project-cargo handling activities in PT. SCMU's operational documentation." : "Lihat aktivitas jasa angkutan kontainer dan penanganan muatan untuk jasa pengiriman barang proyek dalam dokumentasi operasional PT. SCMU."}</p>
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
          align="center"
        />
        <div className="quote-layout"><QuotationForm /></div>
      </Container>
    </section>
  );
}
