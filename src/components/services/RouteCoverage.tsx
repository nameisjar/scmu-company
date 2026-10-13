import { getRouteCoverage } from "@/data/routes";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
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
      </Container>
    </section>
  );
}
