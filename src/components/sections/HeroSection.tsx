"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { homepageHeroSlides } from "@/data/documentation";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";
import type { Locale } from "@/i18n/config";

export function HeroSection({ locale = "id" }: { locale?: Locale }) {
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
          <h1>{locale === "en" ? "From South Papua, Connecting Indonesia." : "Dari Papua Selatan, Menghubungkan Indonesia."}</h1>
          <p>
            {locale === "en"
              ? "PT. SCMU provides transport management and freight services by road, air, sea, river, and multimodal transport to support distribution needs in South Papua and across Indonesia."
              : "PT. SCMU menyediakan jasa pengurusan transportasi dan pengiriman barang melalui jalur darat, udara, laut, sungai, dan multimoda untuk mendukung kebutuhan distribusi pelanggan di Papua Selatan serta berbagai wilayah di Indonesia."}
          </p>
          <div className="hero-actions">
            <ButtonLink href="#layanan">{locale === "en" ? "View Services" : "Lihat Layanan"} <ArrowRight aria-hidden="true" /></ButtonLink>
          </div>
        </div>
      </Container>
      <span className="hero__credit">{locale === "en" ? "PT. SCMU Documentation" : "Dokumentasi PT. SCMU"}</span>
    </section>
  );
}
