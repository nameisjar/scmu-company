"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { type CSSProperties, useEffect, useState } from "react";
import { homepageHeroSlides } from "@/data/documentation";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";
import type { Locale } from "@/i18n/config";

export function HeroSection({ locale = "id" }: { locale?: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    let timer: number | undefined;

    const syncSlide = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      const elapsed = Date.now() - startedAt;
      setActiveIndex(Math.floor(elapsed / 3000) % homepageHeroSlides.length);
      timer = window.setTimeout(syncSlide, 3000 - (elapsed % 3000) + 20);
    };

    syncSlide();
    document.addEventListener("visibilitychange", syncSlide);
    return () => {
      document.removeEventListener("visibilitychange", syncSlide);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return (
    <section id="beranda" className="hero">
      <div className="hero__media" aria-hidden="true">
        {homepageHeroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            className={`hero__image${index === activeIndex ? " is-active" : ""}`}
            src={slide.src}
            alt=""
            fill
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
            quality={88}
            sizes="100vw"
            style={{
              "--hero-position": slide.position,
              "--hero-mobile-position": slide.mobilePosition,
            } as CSSProperties}
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
    </section>
  );
}
