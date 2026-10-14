import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description: "Profil PT. SCMU, visi perusahaan, dan komitmen dalam layanan logistik, transportasi, serta pengiriman barang.",
};

export function AboutPageContent({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <main className="about-page">
      <section className="company-profile">
        <Container className="company-profile__layout">
          <figure className="company-profile__visual">
            <Image
              src="/images/company-profile-scmu-collage.png"
              alt={english ? "SCMU logistics services by aircraft, ship, forklift, and truck" : "Ilustrasi layanan logistik SCMU melalui pesawat, kapal, forklift, dan truk"}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </figure>

          <article className="company-profile__copy">
            <p className="section-label">{english ? "Company Profile" : "Profil Perusahaan"}</p>
            <h1>{company.name}</h1>
            <div className="company-profile__body">
              {english ? <>
                <p>Established in 2009, PT. Sarana Cipta Mandiri Utama (SCMU) provides logistics, transport, and freight services. As a Freight Forwarding (JPT) company, PT. SCMU supports cargo shipments by sea, air, and road, with operations in South Papua covering Merauke, Mappi, Boven Digoel, and Asmat. Each service is planned according to the cargo type, destination, and customer requirements.</p>
                <p>As distribution needs continue to grow, we help customers plan effective and efficient shipments that support smooth business operations and supply chains.</p>
                <p>Supported by a dedicated team, PT. SCMU prioritizes cargo safety, operational coordination, and clear communication to build trust and long-term partnerships.</p>
              </> : <>
                <p>Berdiri sejak tahun 2009, PT. Sarana Cipta Mandiri Utama (SCMU) bergerak di bidang jasa logistik, transportasi, dan pengiriman barang. Sebagai perusahaan yang bergerak di bidang Jasa Pengurusan Transportasi (JPT), PT. SCMU mendukung kebutuhan pengiriman barang melalui jalur laut, udara, maupun darat, dengan wilayah operasional di Papua Selatan yang mencakup Merauke, Mappi, Boven Digoel, dan Asmat. Setiap layanan direncanakan sesuai dengan jenis barang, tujuan, dan kebutuhan pelanggan.</p>
                <p>Seiring meningkatnya kebutuhan distribusi, kami membantu pelanggan merencanakan pengiriman yang efektif dan efisien untuk mendukung kelancaran kegiatan bisnis serta rantai pasok.</p>
                <p>Didukung oleh tim yang berdedikasi, PT. SCMU mengutamakan keamanan barang, koordinasi operasional, dan komunikasi yang jelas untuk membangun kepercayaan serta hubungan kerja sama jangka panjang.</p>
              </>}
            </div>
          </article>
        </Container>
      </section>

      <section className="company-vision" aria-labelledby="vision-title">
        <Container className="company-vision__layout">
          <h2 id="vision-title" className="company-vision__title">{english ? "Vision" : "Visi"}</h2>
          <p className="company-vision__statement">{english ? "To become the preferred logistics partner connecting customers' distribution needs through reliable, innovative, and sustainable freight services." : "Menjadi mitra logistik pilihan yang menghubungkan kebutuhan distribusi pelanggan melalui layanan pengiriman yang andal, inovatif, dan berkelanjutan."}</p>
        </Container>
      </section>

      <section className="section director-profile">
        <Container className="director-profile__layout">
          <figure className="director-profile__portrait">
            <Image src="/images/director-scmu.png" alt={english ? "Multazam Malik, Director of PT. SCMU" : "Multazam Malik, Direktur PT. SCMU"} fill sizes="(max-width: 860px) 100vw, 32vw" />
          </figure>

          <article className="director-profile__copy">
            <p className="section-label">{english ? "Leadership Profile" : "Profil Pimpinan"}</p>
            <div className="director-profile__identity">
              <p className="director-profile__name">Multazam Malik</p>
              <p className="director-profile__role">{english ? "Director of PT. Sarana Cipta Mandiri Utama" : "Direktur PT. Sarana Cipta Mandiri Utama"}</p>
            </div>
            <h2>{english ? "Leadership grounded in operations." : "Kepemimpinan yang memahami operasional."}</h2>
            <p>{english ? "Under the leadership of Multazam Malik, PT. SCMU prioritizes operational coordination, cargo safety, and clear communication with customers. This approach guides the company in maintaining service quality and building long-term partnerships." : "Di bawah kepemimpinan Multazam Malik, PT. SCMU mengutamakan koordinasi operasional, keamanan barang, dan komunikasi yang jelas dengan pelanggan. Pendekatan ini menjadi dasar perusahaan dalam menjaga kualitas pelayanan serta membangun kerja sama jangka panjang."}</p>
            <ButtonLink href={localizeHref("/kontak", locale)}>{english ? "Contact Us" : "Hubungi Kami"}</ButtonLink>
          </article>
        </Container>
      </section>
    </main>
  );
}

export default function AboutPage() {
  return <AboutPageContent />;
}
