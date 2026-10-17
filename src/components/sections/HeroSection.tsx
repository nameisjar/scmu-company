"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { type CSSProperties, useEffect, useState } from "react";
import { homepageHeroSlides } from "@/data/documentation";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/ButtonLink";
import type { Locale } from "@/i18n/config";

const HERO_SLIDE_INTERVAL_MS = 6000;

export function HeroSection({ locale = "id" }: { locale?: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    let timer: number | undefined;

    const syncSlide = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      const elapsed = Date.now() - startedAt;
      setActiveIndex(Math.floor(elapsed / HERO_SLIDE_INTERVAL_MS) % homepageHeroSlides.length);
      timer = window.setTimeout(syncSlide, HERO_SLIDE_INTERVAL_MS - (elapsed % HERO_SLIDE_INTERVAL_MS) + 20);
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
              ? "PT. Sarana Cipta Mandiri Utama (PT. SCMU) provides transport management and cargo shipping services from Merauke to regions across Indonesia. Road, air, sea, river, and multimodal options support distribution according to the route, cargo type, and volume."
              : "PT. Sarana Cipta Mandiri Utama (PT. SCMU) menyediakan jasa pengurusan transportasi dan jasa pengiriman barang dari Merauke ke berbagai wilayah Indonesia. Pilihan jalur darat, udara, laut, sungai, dan multimoda disesuaikan dengan rute, jenis, serta volume barang."}
          </p>
          <div className="hero-actions">
            <ButtonLink href="#layanan">{locale === "en" ? "View Services" : "Lihat Layanan"} <ArrowRight aria-hidden="true" /></ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
