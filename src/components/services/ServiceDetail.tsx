import { Check, ClipboardList, PackageCheck, Route, Send } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";
import { PageHero } from "../layout/PageHero";

const process = [
  { title: "Konsultasi", Icon: ClipboardList },
  { title: "Detail barang", Icon: PackageCheck },
  { title: "Solusi rute", Icon: Route },
  { title: "Pengiriman", Icon: Send },
];

export function ServiceDetail({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <main>
      <PageHero
        title={service.title}
        description={service.description}
        context="Layanan PT. SCMU"
      >
        <ButtonLink href="/#penawaran">Konsultasikan Pengiriman</ButtonLink>
        <ButtonLink href="/layanan" variant="outline">Lihat Semua Layanan</ButtonLink>
      </PageHero>

      <section className="section">
        <Container className="detail-overview">
          <div className="detail-overview__icon"><Icon aria-hidden="true" /></div>
          <div>
            <p className="section-label">Ringkasan layanan</p>
            <h2>Moda ditentukan setelah detail pengiriman diperiksa.</h2>
            <p>{service.overview}</p>
            <p className="data-note">Ketersediaan layanan dan rute dikonfirmasi setelah detail pengiriman diterima.</p>
          </div>
        </Container>
      </section>

      <section className="section section--soft">
        <Container className="two-column">
          <div>
            <h2>Hal yang perlu dipertimbangkan</h2>
            <ul className="check-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}><Check aria-hidden="true" />{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="detail-panel">
            <h3>Kebutuhan pengiriman berikut</h3>
            <ul>
              {service.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-heading section-heading--center">
            <p className="section-label">Proses layanan</p>
            <h2>Empat langkah sebelum dan selama pengiriman</h2>
            <p>Alur ini bersifat informatif dan bukan fitur pelacakan pengiriman.</p>
          </div>
          <div className="mini-process">
            {process.map(({ title, Icon: StepIcon }, index) => (
              <div key={title} className="mini-process__item">
                <span>0{index + 1}</span>
                <StepIcon aria-hidden="true" />
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--cta">
        <Container className="cta-band">
          <div>
            <h2>Diskusikan kebutuhan {service.shortTitle.toLowerCase()} Anda.</h2>
            <p>Sampaikan jenis barang, jumlah, asal, dan tujuan untuk memulai konsultasi.</p>
          </div>
          <ButtonLink href="/#penawaran" variant="light">Minta Penawaran</ButtonLink>
        </Container>
      </section>
    </main>
  );
}
