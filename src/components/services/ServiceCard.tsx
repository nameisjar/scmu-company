import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="logistics-info-card" id={service.slug} aria-labelledby={`${service.slug}-heading`}>
      <div className="logistics-info-card__icon" aria-hidden="true">
        <service.Icon />
      </div>
      <h3 id={`${service.slug}-heading`}>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
