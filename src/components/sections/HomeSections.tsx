import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DocumentationGallery } from "@/components/documentation/DocumentationGallery";
import { ScmuCargoIcon, ScmuConsultIcon, ScmuDispatchIcon, ScmuRouteIcon } from "@/components/icons/ScmuIcons";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { QuotationForm } from "../forms/QuotationForm";
import { ServiceCarousel } from "../services/ServiceCarousel";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FaqAccordion } from "./FaqAccordion";

const values = [
  { title: "Lima pilihan moda", text: "Darat, udara, laut, sungai, dan kereta dibahas dari satu informasi pengiriman.", Icon: ScmuRouteIcon },
  { title: "Berdasarkan detail barang", text: "Jenis barang, jumlah, asal, dan tujuan menjadi dasar pembahasan.", Icon: ScmuCargoIcon },
  { title: "Tahapan yang jelas", text: "Informasi diperiksa sebelum moda dan rute pengiriman dikonfirmasi.", Icon: ScmuDispatchIcon },
  { title: "Percakapan langsung", text: "Permintaan penawaran diteruskan ke WhatsApp setelah formulir lengkap.", Icon: ScmuConsultIcon },
];

const roadService = services[0];

export function CompanyIntro() {
  return (
    <section className="section anchor-section intro-section" id="tentang-kami">
      <Container>
        <SectionHeading title="Tentang PT. SCMU" align="center" />
        <div className="intro-grid">
          <div>
            <h3 className="intro-grid__headline">Lima moda dalam satu pembahasan pengiriman.</h3>
          </div>
          <div>
            <p className="lead">{company.description}</p>
            <p>Setiap kebutuhan dimulai dari pemahaman terhadap jenis barang, jumlah, lokasi asal, lokasi tujuan, dan prioritas pengiriman.</p>
            <Link className="text-link" href="/tentang-kami">Kenali PT. SCMU <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section anchor-section services-section" id="layanan">
      <Container>
        <SectionHeading title="Layanan Pengiriman" align="center" />
        <ServiceCarousel />
      </Container>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="section anchor-section why-section" id="keunggulan">
      <Container className="why-editorial">
        <figure className="why-editorial__media">
          <div className="why-editorial__image">
            <Image
              src={roadService.image.src}
              alt={roadService.image.alt}
              fill
              sizes="(max-width: 860px) 100vw, 42vw"
              style={{ objectPosition: roadService.image.position }}
            />
            <a href={roadService.image.source} target="_blank" rel="noreferrer">
              Foto: {roadService.image.credit} / Unsplash
            </a>
          </div>
          <figcaption className="why-editorial__stat">
            <strong>5</strong>
            <span>Moda<br />Pengiriman</span>
          </figcaption>
        </figure>

        <div className="why-editorial__copy">
          <p className="section-label">Mengapa PT. SCMU</p>
          <h2>Pembahasan pengiriman dimulai dari data yang jelas.</h2>
          <p className="lead">
            Informasi barang, jumlah, asal, tujuan, dan prioritas digunakan sebagai dasar sebelum moda serta rute pengiriman dibahas.
          </p>
          <div className="why-editorial__points">
            {values.map(({ title, text, Icon }) => (
              <article key={title} className="why-editorial__point">
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link why-editorial__link" href="/tentang-kami">
            Kenali PT. SCMU <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function DocumentationSection() {
  return (
    <section className="section anchor-section documentation-section" id="dokumentasi">
      <Container>
        <div className="documentation-section__heading">
          <div>
            <p className="section-label">Dokumentasi Kegiatan</p>
            <h2>Aktivitas transportasi dan logistik di lapangan.</h2>
          </div>
          <div>
            <ButtonLink href="/dokumentasi" variant="outline">Lihat Semua Dokumentasi</ButtonLink>
          </div>
        </div>
        <DocumentationGallery limit={5} variant="preview" />
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section anchor-section section--soft" id="faq">
      <Container>
        <SectionHeading
          title="Pertanyaan Umum"
          description="Jawaban ringkas tentang layanan dan proses sebelum Anda mengirim detail barang."
          align="center"
        />
        <div className="faq-grid">
          <div>
            <h3 className="faq-grid__headline">Temukan informasi yang Anda perlukan.</h3>
            <p>Jika jawaban yang dicari belum tersedia, hubungi kami untuk membahas kebutuhan pengiriman Anda.</p>
            <Link className="text-link" href="/faq">Lihat semua FAQ <ArrowRight aria-hidden="true" /></Link>
          </div>
          <FaqAccordion limit={4} />
        </div>
      </Container>
    </section>
  );
}

export function QuotationSection() {
  return (
    <section className="section anchor-section quote-section" id="penawaran">
      <Container>
        <SectionHeading
          title="Minta Penawaran"
          description="Tulis kebutuhan Anda secara singkat. Website akan menyiapkan pesan untuk dilanjutkan melalui WhatsApp."
          align="center"
        />
        <div className="quote-layout"><QuotationForm /></div>
      </Container>
    </section>
  );
}
