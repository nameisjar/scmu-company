"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  useEffect(() => {
    const autoplayStartedAt = Date.now();
    let autoplayTimer: number | undefined;

    const syncAutoplay = () => {
      if (autoplayTimer) window.clearTimeout(autoplayTimer);

      const elapsed = Date.now() - autoplayStartedAt;
      const nextIndex = Math.floor(elapsed / 3000) % services.length;
      setActiveIndex(nextIndex);

      const untilNextSlide = 3000 - (elapsed % 3000);
      autoplayTimer = window.setTimeout(syncAutoplay, untilNextSlide + 20);
    };

    const syncAfterVisibilityChange = () => syncAutoplay();

    syncAutoplay();
    document.addEventListener("visibilitychange", syncAfterVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", syncAfterVisibilityChange);
      if (autoplayTimer) window.clearTimeout(autoplayTimer);
    };
  }, []);

  return (
    <section
      id="beranda"
      className="hero"
      data-scroll-section="true"
    >
      <div className="hero__media" aria-hidden="true">
        {services.map((service, index) => (
          <Image
            className={`hero__image ${index === activeIndex ? "is-active" : ""}`}
            src={service.image.src}
            alt=""
            fill
            priority={index === 0}
            quality={88}
            sizes="100vw"
            style={{ objectPosition: service.image.position }}
            key={service.slug}
          />
        ))}
      </div>
      <Container className="hero__inner">
        <div className="hero__copy">
          <h1>Pengiriman Barang melalui Lima Moda Transportasi</h1>
          <p>
            Kirimkan jenis barang, jumlah, asal, dan tujuan. PT. SCMU membantu menentukan moda yang tersedia untuk kebutuhan tersebut.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#layanan">Lihat Layanan <ArrowRight aria-hidden="true" /></ButtonLink>
          </div>
        </div>
      </Container>
      <a className="hero__credit" href={activeService.image.source} target="_blank" rel="noreferrer">
        Foto: {activeService.image.credit} / Unsplash
      </a>
    </section>
  );
}
