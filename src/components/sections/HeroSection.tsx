"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { homepageHeroSlides } from "@/data/documentation";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoplayStartedAt = Date.now();
    let autoplayTimer: number | undefined;

    const syncAutoplay = () => {
      if (autoplayTimer) window.clearTimeout(autoplayTimer);

      const elapsed = Date.now() - autoplayStartedAt;
      const nextIndex = Math.floor(elapsed / 3000) % homepageHeroSlides.length;
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
    <section id="beranda" className="hero">
      <div className="hero__media" aria-hidden="true">
        {homepageHeroSlides.map((slide, index) => (
          <Image
            className={`hero__image ${index === activeIndex ? "is-active" : ""}`}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            quality={88}
            sizes="100vw"
            style={{ objectPosition: slide.position }}
            key={slide.src}
          />
        ))}
      </div>
      <Container className="hero__inner">
        <div className="hero__copy">
          <h1>Dari Papua Selatan, Menghubungkan Indonesia.</h1>
          <p>
            SCMU membantu pengiriman barang ke, dari, dan antarwilayah di Papua Selatan melalui jaringan mitra transportasi yang menjangkau berbagai daerah di Indonesia.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#layanan">Lihat Layanan <ArrowRight aria-hidden="true" /></ButtonLink>
          </div>
        </div>
      </Container>
      <span className="hero__credit">Dokumentasi PT. SCMU</span>
    </section>
  );
}
