import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PhotoPageHero } from "@/components/layout/PhotoPageHero";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";

const siteUrl = company.siteUrl.replace(/\/+$/, "");

export function JakartaMeraukePage({ locale = "id" }: { locale?: Locale }) {
  const english = locale === "en";
  const path = english ? "/en/layanan/jakarta-merauke" : "/layanan/jakarta-merauke";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: english ? "Home" : "Beranda",
        item: `${siteUrl}${english ? "/en" : ""}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: english ? "Services" : "Layanan",
        item: `${siteUrl}${english ? "/en/layanan" : "/layanan"}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: english ? "Jakarta–Merauke Freight" : "Pengiriman Jakarta–Merauke",
        item: `${siteUrl}${path}`,
      },
    ],
  };

  const facts = english
    ? [
        { label: "Origin", value: "Jakarta" },
        { label: "Destination", value: "Merauke" },
        { label: "Availability", value: "Confirmed per shipment" },
      ]
    : [
        { label: "Kota asal", value: "Jakarta" },
        { label: "Kota tujuan", value: "Merauke" },
        { label: "Ketersediaan", value: "Dikonfirmasi per pengiriman" },
      ];

  const details = english
    ? [
        {
          title: "Cargo that can be discussed",
          body: "General cargo, packaged goods, project materials, and containerized cargo can be reviewed based on their dimensions, weight, handling requirements, and applicable safety requirements.",
        },
        {
          title: "Information required",
          body: "Prepare the cargo type, quantity, dimensions or weight, collection point in Jakarta, destination in Merauke, and preferred delivery timing so the team can review the suitable service option.",
        },
        {
          title: "Cost, schedule, and transit estimate",
          body: "Rates and timing are not presented as fixed figures. They depend on cargo details, transport mode, departure schedule, route availability, and handling requirements, and are confirmed after review.",
        },
      ]
    : [
        {
          title: "Barang yang dapat dibahas",
          body: "Barang umum, barang kemasan, material proyek, dan muatan kontainer dapat ditinjau berdasarkan ukuran, berat, kebutuhan penanganan, serta ketentuan keselamatan yang berlaku.",
        },
        {
          title: "Informasi yang perlu disiapkan",
          body: "Siapkan jenis dan jumlah barang, ukuran atau berat, titik pengambilan di Jakarta, tujuan di Merauke, serta prioritas waktu agar tim dapat meninjau pilihan layanan yang sesuai.",
        },
        {
          title: "Biaya, jadwal, dan estimasi",
          body: "Tarif dan waktu tidak ditampilkan sebagai angka tetap. Keduanya bergantung pada detail barang, moda, jadwal keberangkatan, ketersediaan rute, serta kebutuhan penanganan dan dikonfirmasi setelah pemeriksaan.",
        },
      ];

  const steps = english
    ? [
        { number: "01", title: "Send cargo details", body: "Share the shipment data required for an initial review." },
        { number: "02", title: "Route review", body: "The team checks the available mode, schedule, and handling requirements." },
        { number: "03", title: "Service confirmation", body: "The applicable route, cost, and estimated timing are then discussed with you." },
      ]
    : [
        { number: "01", title: "Sampaikan detail barang", body: "Kirimkan data pengiriman yang diperlukan untuk pemeriksaan awal." },
        { number: "02", title: "Pemeriksaan rute", body: "Tim memeriksa pilihan moda, jadwal, dan kebutuhan penanganan yang tersedia." },
        { number: "03", title: "Konfirmasi layanan", body: "Rute, biaya, dan perkiraan waktu yang berlaku kemudian dibahas bersama Anda." },
      ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <PhotoPageHero
        eyebrow={english ? "Jakarta–Merauke Route" : "Rute Jakarta–Merauke"}
        title={english ? "Freight shipping from Jakarta to Merauke." : "Pengiriman barang Jakarta–Merauke."}
        description={english
          ? "PT. SCMU reviews freight requirements from Jakarta to Merauke according to the cargo, suitable transport mode, departure schedule, and route availability."
          : "PT. SCMU melayani kebutuhan pengiriman dari Jakarta menuju Merauke sesuai jenis barang, moda yang sesuai, jadwal keberangkatan, dan ketersediaan rute."}
        image={{
          src: "/images/documentation/activity-05.jpg",
          position: "50% 56%",
          mobilePosition: "64% 50%",
          credit: english ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU",
        }}
      />

      <section className="section route-landing" aria-labelledby="route-overview-title">
        <Container className="route-landing__overview">
          <div className="route-landing__intro">
            <p className="section-label">{english ? "Route information" : "Informasi rute"}</p>
            <h2 id="route-overview-title">
              {english ? "A service plan built around the shipment." : "Pilihan layanan disusun dari kebutuhan barang."}
            </h2>
            <p>
              {english
                ? "For inter-island freight from Jakarta to Merauke, the transport arrangement is discussed from the actual shipment data. This keeps the selected mode, handling, and schedule relevant to the cargo rather than relying on a general estimate."
                : "Untuk pengiriman barang antarpulau dari Jakarta ke Merauke, rencana angkutan dibahas dari data pengiriman yang sebenarnya. Dengan demikian, pilihan moda, penanganan, dan jadwal tetap relevan dengan barang dan tidak bergantung pada perkiraan umum."}
            </p>
          </div>
          <dl className="route-landing__facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="section section--soft route-landing__details" aria-labelledby="route-details-title">
        <Container>
          <header className="route-landing__section-heading">
            <p className="section-label">{english ? "Before requesting a quote" : "Sebelum meminta penawaran"}</p>
            <h2 id="route-details-title">{english ? "Prepare the information that affects the service." : "Siapkan informasi yang menentukan layanan."}</h2>
          </header>
          <div className="route-landing__detail-grid">
            {details.map((detail, index) => (
              <article key={detail.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{detail.title}</h3>
                <p>{detail.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section route-landing__process" aria-labelledby="route-process-title">
        <Container>
          <header className="route-landing__section-heading">
            <p className="section-label">{english ? "Discussion process" : "Alur pembahasan"}</p>
            <h2 id="route-process-title">{english ? "Three steps before confirmation." : "Tiga tahap sebelum konfirmasi."}</h2>
          </header>
          <ol>
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
          <div className="route-landing__contact">
            <div>
              <h2>{english ? "Have your shipment details ready?" : "Detail pengiriman sudah tersedia?"}</h2>
              <p>{english ? "Contact PT. SCMU to review the Jakarta–Merauke shipment requirements." : "Hubungi PT. SCMU untuk meninjau kebutuhan pengiriman Jakarta–Merauke."}</p>
            </div>
            <ButtonLink href={localizeHref("/kontak", locale)} variant="outline">
              {english ? "Contact PT. SCMU" : "Hubungi PT. SCMU"}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
