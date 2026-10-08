import {
  ArrowRight,
  ClipboardList,
  Headphones,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  Send,
  Settings2,
  ShipWheel,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { QuotationForm } from "../forms/QuotationForm";
import { ServiceCarousel } from "../services/ServiceCarousel";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FaqAccordion } from "./FaqAccordion";

const values = [
  { title: "Lima pilihan moda", text: "Darat, udara, laut, sungai, dan kereta dibahas dari satu informasi pengiriman.", Icon: ShipWheel },
  { title: "Berdasarkan detail barang", text: "Jenis barang, jumlah, asal, dan tujuan menjadi dasar pembahasan.", Icon: Settings2 },
  { title: "Tahapan yang jelas", text: "Informasi diperiksa sebelum moda dan rute pengiriman dikonfirmasi.", Icon: ClipboardList },
  { title: "Percakapan langsung", text: "Permintaan penawaran diteruskan ke WhatsApp setelah formulir lengkap.", Icon: Headphones },
];

const roadService = services[0];

const steps = [
  { title: "Konsultasi", text: "Sampaikan kebutuhan awal Anda.", Icon: MessageCircle },
  { title: "Detail Pengiriman", text: "Lengkapi informasi barang dan rute.", Icon: PackageCheck },
  { title: "Solusi Transportasi", text: "Moda dan solusi yang sesuai ditentukan.", Icon: Route },
  { title: "Proses Pengiriman", text: "Pengiriman dilakukan sesuai kesepakatan.", Icon: Send },
  { title: "Barang Diterima", text: "Proses selesai di tujuan.", Icon: MapPin },
];

export function CompanyIntro() {
  return (
    <section className="section intro-section" id="tentang-kami" data-scroll-section="true">
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
    <section className="section services-section" id="layanan" data-scroll-section="true">
      <Container>
        <SectionHeading title="Layanan Pengiriman" align="center" />
        <ServiceCarousel />
      </Container>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="section why-section" id="keunggulan" data-scroll-section="true">
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

export function ProcessSection() {
  return (
    <section className="section process-section" id="proses" data-scroll-section="true">
      <Container>
        <SectionHeading
          title="Proses Pengiriman"
          description="Lima tahap dari konsultasi sampai penerimaan. Urutan ini menjelaskan proses layanan secara umum dan bukan pelacakan pengiriman real-time."
          align="center"
          inverse
        />
        <ol className="process-list">
          {steps.map(({ title, text, Icon }, index) => (
            <li key={title}>
              <div className="process-list__marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function CoverageSection() {
  return (
    <section className="section coverage-section" id="area-pengiriman" data-scroll-section="true">
      <Container>
        <SectionHeading title="Area Pengiriman" align="center" />
        <div className="coverage-grid">
          <div>
            <h3 className="coverage-grid__headline">Sebutkan asal dan tujuan untuk memeriksa rute.</h3>
            <p>PT. SCMU melayani kebutuhan pengiriman ke berbagai wilayah sesuai rute dan ketersediaan layanan. Sampaikan asal dan tujuan untuk mendapatkan konfirmasi.</p>
            <ButtonLink href="/area-pengiriman" variant="outline">Lihat Informasi Area</ButtonLink>
          </div>
          <div className="coverage-map" aria-label="Ilustrasi jaringan rute; bukan representasi cakupan operasional sebenarnya">
            <p className="coverage-map__label"><MapPin aria-hidden="true" /> Cakupan dikonfirmasi per permintaan</p>
            <svg viewBox="0 0 600 300" aria-hidden="true">
              <path d="M54 215C135 215 144 73 253 83C357 92 325 244 446 220C504 208 518 131 561 96" />
              <circle cx="54" cy="215" r="8" /><circle cx="253" cy="83" r="8" /><circle cx="446" cy="220" r="8" /><circle cx="561" cy="96" r="11" />
            </svg>
            <p>Visual koneksi bersifat ilustratif, bukan daftar rute layanan.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section section--soft" id="faq" data-scroll-section="true">
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
    <section className="section quote-section" id="penawaran" data-scroll-section="true">
      <Container>
        <SectionHeading
          title="Minta Penawaran"
          description="Isi data barang dan rute. Setelah lengkap, website menyiapkan pesan untuk dikirim melalui WhatsApp."
          align="center"
        />
        <div className="quote-layout"><QuotationForm /></div>
      </Container>
    </section>
  );
}
