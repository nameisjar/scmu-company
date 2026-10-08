import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <article className="service-card">
      <div className="service-card__top">
        <Icon className="service-card__icon" aria-hidden="true" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href={`/layanan/${service.slug}`}>
        Lihat {service.title} <ArrowUpRight aria-hidden="true" />
      </Link>
    </article>
  );
}
