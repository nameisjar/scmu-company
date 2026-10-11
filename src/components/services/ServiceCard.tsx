import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <article className="service-card" id={service.slug}>
      <div className="service-card__top">
        <Icon className="service-card__icon" aria-hidden="true" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
