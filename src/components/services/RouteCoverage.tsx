import { getRouteCoverage } from "@/data/routes";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { RouteNetwork } from "./RouteNetwork";

export function RouteCoverage({ locale = "id" }: { locale?: Locale }) {
  const content = getRouteCoverage(locale);
  return (
    <section className="section anchor-section route-coverage" id="cakupan-rute" aria-labelledby="route-coverage-heading">
      <Container>
        <header className="route-coverage__heading">
          <div>
            <p className="section-label">{content.eyebrow}</p>
            <h2 id="route-coverage-heading">{content.title}</h2>
          </div>
          <div><p>{content.description}</p></div>
        </header>
        <RouteNetwork locale={locale} />
        <aside className="route-coverage__featured" aria-label={locale === "en" ? "Featured route" : "Rute pilihan"}>
          <div>
            <p className="route-coverage__featured-label">{locale === "en" ? "Route information" : "Informasi rute"}</p>
            <h3>{locale === "en" ? "Jakarta to Merauke freight" : "Pengiriman Jakarta–Merauke"}</h3>
            <p>{locale === "en" ? "Review the cargo details, cost factors, and confirmation process for this route." : "Lihat detail barang, faktor biaya, dan proses konfirmasi untuk rute ini."}</p>
          </div>
          <Link href={localizeHref("/layanan/jakarta-merauke", locale)}>
            {locale === "en" ? "View route information" : "Lihat informasi rute"}
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </Container>
    </section>
  );
}
