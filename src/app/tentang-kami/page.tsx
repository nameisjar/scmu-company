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
              <p>Berdiri sejak tahun 2009, PT. SCMU menyediakan jasa logistik, transportasi, dan pengiriman barang melalui jalur laut, udara, maupun darat. Setiap layanan direncanakan sesuai jenis barang, tujuan, dan kebutuhan pelanggan.</p>
              <p>Seiring meningkatnya kebutuhan distribusi, kami membantu pelanggan merencanakan pengiriman yang efektif dan efisien untuk mendukung kelancaran kegiatan bisnis serta rantai pasok.</p>
              <p>Didukung oleh tim yang berdedikasi, PT. SCMU mengutamakan keamanan barang, koordinasi operasional, dan komunikasi yang jelas untuk membangun kepercayaan serta hubungan kerja sama jangka panjang.</p>
            </div>
          </article>
        </Container>
      </section>

      <section className="company-vision" aria-labelledby="vision-title">
        <Container className="company-vision__layout">
          <h2 id="vision-title" className="company-vision__title">Visi</h2>
          <p className="company-vision__statement">Menjadi mitra logistik pilihan yang menghubungkan kebutuhan distribusi pelanggan melalui layanan pengiriman yang andal, inovatif, dan berkelanjutan.</p>
        </Container>
      </section>

      <section className="section director-profile">
        <Container className="director-profile__layout">
          <figure className="director-profile__portrait">
            <Image src="/images/director-scmu.png" alt="H. Multazam Malik, S.E., Direktur PT. SCMU" fill sizes="(max-width: 860px) 100vw, 32vw" />
          </figure>

          <article className="director-profile__copy">
            <p className="section-label">Profil Pimpinan</p>
            <div className="director-profile__identity">
              <p className="director-profile__name">H. Multazam Malik, S.E.</p>
              <p className="director-profile__role">Direktur PT. Sarana Cipta Mandiri Utama</p>
            </div>
            <h2>Kepemimpinan yang memahami operasional.</h2>
            <p>Di bawah kepemimpinan H. Multazam Malik, S.E., PT. SCMU mengutamakan koordinasi operasional, keamanan barang, dan komunikasi yang jelas dengan pelanggan. Pendekatan ini menjadi dasar perusahaan dalam menjaga kualitas pelayanan serta membangun kerja sama jangka panjang.</p>
            <ButtonLink href="/kontak">Hubungi Kami</ButtonLink>
          </article>
        </Container>
      </section>
    </main>
  );
}
