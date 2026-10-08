"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useRef, useState } from "react";
import { services } from "@/data/services";

export function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  const slideColumns = services
    .map((_, index) => (index === activeIndex ? "minmax(460px, 6fr)" : "minmax(86px, 1fr)"))
    .join(" ");

  return (
    <div
      className="service-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Pilihan layanan pengiriman"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <p className="service-carousel__status" aria-live="polite">
        {services[activeIndex].title} sedang ditampilkan
      </p>

      <div
        className="service-carousel__slides"
        style={{ "--service-columns": slideColumns } as CSSProperties}
      >
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          const { Icon } = service;

          return (
            <article
              className={`service-slide service-slide--${isActive ? "active" : "collapsed"}`}
              key={service.slug}
              aria-label={`${service.title}${isActive ? ", layanan aktif" : ""}`}
            >
              <Image
                className="service-slide__image"
                src={service.image.src}
                alt=""
                fill
                sizes={isActive ? "(max-width: 860px) 100vw, 60vw" : "15vw"}
                style={{ objectPosition: service.image.position }}
              />
              <div className="service-slide__overlay" aria-hidden="true" />

              {isActive ? (
                <div className="service-slide__content">
                  <Icon className="service-slide__icon" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="service-slide__link" href={`/layanan/${service.slug}`}>
                    Lihat detail layanan <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <a className="service-slide__credit" href={service.image.source} target="_blank" rel="noreferrer">
                    Foto: {service.image.credit} / Unsplash
                  </a>
                </div>
              ) : (
                <button
                  className="service-slide__preview"
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Tampilkan ${service.title}`}
                >
                  <Icon aria-hidden="true" />
                  <strong>{service.shortTitle}</strong>
                </button>
              )}
            </article>
          );
        })}
      </div>

      <div className="service-carousel__controls" aria-label="Navigasi layanan">
        <button type="button" onClick={showPrevious} aria-label="Layanan sebelumnya">
          <ArrowLeft aria-hidden="true" />
        </button>
        <button type="button" onClick={showNext} aria-label="Layanan berikutnya">
          <ArrowRight aria-hidden="true" />
        </button>
      </div>

      <div className="service-carousel__tabs" role="tablist" aria-label="Pilih moda pengiriman">
        {services.map((service, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            key={service.slug}
            onClick={() => setActiveIndex(index)}
          >
            <service.Icon aria-hidden="true" />
            {service.shortTitle}
          </button>
        ))}
      </div>

    </div>
  );
}
