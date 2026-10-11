import { getRouteCoverage } from "@/data/routes";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";

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
          <div>
            <p>{content.description}</p>
            <div className="route-coverage__modes" aria-label={content.modesLabel}>
              <strong>{content.modesLabel}</strong>
              <ul>
                {content.modes.map((mode) => <li key={mode}>{mode}</li>)}
              </ul>
            </div>
          </div>
        </header>

        <div className="route-cards">
          {content.groups.map((group) => {
            const inbound = group.direction === "inbound";
            const twoWay = group.direction === "bidirectional";
            const cities = (
              <div className="route-card__locations">
                <p className="route-card__caption">{inbound ? content.originsLabel : twoWay ? content.regionsLabel : content.destinationsLabel}</p>
                <ul className="route-card__cities">
                  {group.cities.map((city) => <li key={city}>{city}</li>)}
                </ul>
              </div>
            );
            const hub = (
              <div className="route-card__anchor">
                <p className="route-card__caption">{inbound ? content.destinationsLabel : twoWay ? content.twoWayLabel : content.originsLabel}</p>
                <strong className="route-card__hub">Merauke</strong>
              </div>
            );
            return (
              <article className="route-card" key={group.direction} aria-labelledby={`route-group-${group.direction}`}>
                <h3 id={`route-group-${group.direction}`}>{group.title}</h3>
                <div className="route-card__connection">
                  {inbound ? cities : hub}
                  <span className="route-card__arrow" role="img" aria-label={twoWay ? content.twoWayLabel : content.toLabel}>
                    {twoWay ? "↕" : "↓"}
                  </span>
                  {inbound ? hub : cities}
                </div>
              </article>
            );
          })}
        </div>

        <p className="route-coverage__note">{content.note}</p>
      </Container>
    </section>
  );
}
