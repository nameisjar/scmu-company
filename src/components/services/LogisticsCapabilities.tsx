"use client";

import { useEffect, useId, useRef, type CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { services, servicesEn } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { ServiceCard } from "./ServiceCard";

export function LogisticsCapabilities({ locale }: { locale: Locale }) {
  const localizedServices = locale === "en" ? servicesEn : services;
  const headingId = useId();
  const grid = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = grid.current;
    if (!list || typeof window.IntersectionObserver !== "function") return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const cards = Array.from(list.querySelectorAll<HTMLElement>("[data-service-card]"));
    const observer = new window.IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = entry.target as HTMLElement;
        delete card.dataset.pending;
        card.dataset.revealed = "true";
        observer.unobserve(card);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    // Content is visible by default, including before hydration or without JS.
    for (const card of cards) {
      card.dataset.pending = "true";
      observer.observe(card);
    }

    const clearAnimation = () => {
      observer.disconnect();
      for (const card of cards) {
        delete card.dataset.pending;
        delete card.dataset.revealed;
      }
    };
    const onPreferenceChange = () => {
      if (motionPreference.matches) clearAnimation();
    };
    motionPreference.addEventListener("change", onPreferenceChange);
    return () => {
      clearAnimation();
      motionPreference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <section className="section logistics-services" aria-labelledby={headingId}>
      <Container>
        <h2 className="logistics-services__heading" id={headingId}>
          {locale === "en" ? "Freight Services" : "Layanan Pengiriman"}
        </h2>
        <ul className="logistics-services__grid" ref={grid} role="list">
          {localizedServices.map((service, index) => (
            <li
              key={service.slug}
              data-service-card
              style={{ "--service-reveal-delay": `${index * 70}ms` } as CSSProperties}
            >
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
