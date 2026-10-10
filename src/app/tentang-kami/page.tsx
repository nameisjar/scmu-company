import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description: "Profil PT. SCMU, visi perusahaan, dan komitmen dalam layanan logistik, transportasi, serta pengiriman barang.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="company-profile">
        <Container className="company-profile__layout">
          <figure className="company-profile__visual">
            <Image
              src="/images/company-profile-scmu-transparent.png"
              alt="Ilustrasi layanan logistik SCMU melalui pesawat, kapal, forklift, dan truk"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </figure>

          <article className="company-profile__copy">
            <p className="section-label">Profil Perusahaan</p>
            <h1>{company.name}</h1>
            <div className="company-profile__body">
              <p>Berdiri sejak tahun 2009, PT. SCMU merupakan perusahaan yang bergerak di bidang jasa logistik, transportasi, dan pengiriman barang melalui jalur laut, udara, maupun darat. Kami hadir untuk membantu memenuhi kebutuhan distribusi barang dengan layanan yang terencana dan sesuai dengan kebutuhan pelanggan.</p>
              <p>Seiring dengan perkembangan dunia usaha dan meningkatnya kebutuhan distribusi barang, PT. SCMU berkomitmen untuk memberikan solusi logistik yang efektif dan efisien guna mendukung kelancaran kegiatan bisnis serta rantai pasok pelanggan.</p>
              <p>Dengan mengutamakan kualitas pelayanan, keamanan barang, dan komunikasi yang baik, kami berupaya membangun kepercayaan serta hubungan kerja sama jangka panjang dengan setiap pelanggan.</p>
              <p>Didukung oleh tim yang berdedikasi dan koordinasi operasional yang baik, PT. SCMU terus berupaya memberikan layanan pengiriman yang profesional, andal, dan berorientasi pada kepuasan pelanggan.</p>
            </div>
          </article>
        </Container>
      </section>

      <section className="company-vision" aria-labelledby="vision-title">
        <Container className="company-vision__layout">
          <div className="company-vision__label">
            <p>Visi Perusahaan</p>
          </div>
          <blockquote id="vision-title">Menjadi mitra logistik pilihan yang menghubungkan kebutuhan distribusi pelanggan melalui layanan pengiriman yang andal, inovatif, dan berkelanjutan.</blockquote>
        </Container>
      </section>

      <section className="section director-profile">
        <Container className="director-profile__layout">
          <figure className="director-profile__portrait">
            <Image src="/images/director-scmu.png" alt="Direktur PT. SCMU" fill sizes="(max-width: 860px) 100vw, 34vw" />
            <figcaption>Direktur PT. SCMU</figcaption>
          </figure>

          <article className="director-profile__copy">
            <p className="section-label">Direktur PT. SCMU</p>
            <div className="director-profile__identity">
              <p className="director-profile__name">H. Multazam Malik, S.E.</p>
              <p className="director-profile__role">Direktur PT. Sarana Cipta Mandiri Utama</p>
            </div>
            <h2>Kepemimpinan yang dekat dengan operasional.</h2>
            <p className="lead">Arah perusahaan dibangun melalui koordinasi yang baik, perhatian terhadap keamanan barang, dan komunikasi yang jelas dengan pelanggan.</p>
            <p>Direktur PT. SCMU memimpin upaya perusahaan dalam menjaga kualitas pelayanan, koordinasi operasional, serta hubungan kerja sama jangka panjang dengan setiap pelanggan.</p>
            <ButtonLink href="/kontak">Hubungi PT. SCMU</ButtonLink>
          </article>
        </Container>
      </section>
    </main>
  );
}
