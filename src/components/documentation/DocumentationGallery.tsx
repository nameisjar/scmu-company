"use client";

import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { type TouchEvent, useEffect, useRef, useState } from "react";
import { documentation, documentationEn } from "@/data/documentation";
import type { Locale } from "@/i18n/config";

type Props = {
  limit?: number;
  variant?: "preview" | "full";
  locale?: Locale;
};

export function DocumentationGallery({ limit, variant = "full", locale = "id" }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const touchStartX = useRef<number | null>(null);
  const source = locale === "en" ? documentationEn : documentation;
  const uniqueSource = source.filter((item, index, items) => {
    const normalizedSource = item.src.trim().toLowerCase();
    return items.findIndex((candidate) => candidate.src.trim().toLowerCase() === normalizedSource) === index;
  });
  const items = typeof limit === "number" ? uniqueSource.slice(0, limit) : uniqueSource;
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const closeLightbox = () => {
    if (activeIndex === null) return;

    const trigger = triggerRefs.current[activeIndex];
    setActiveIndex(null);
    window.requestAnimationFrame(() => trigger?.focus());
  };

  const showPrevious = () => {
    setActiveIndex((current) => current === null ? null : (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => current === null ? null : (current + 1) % items.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowLeft" && !(event.target instanceof HTMLVideoElement)) {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight" && !(event.target instanceof HTMLVideoElement)) {
        event.preventDefault();
        showNext();
      } else if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLElement>("[data-documentation-lightbox] button:not([disabled]), [data-documentation-lightbox] video[controls]"));
        const firstControl = controls[0];
        const lastControl = controls.at(-1);

        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault();
          lastControl?.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault();
          firstControl?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, items.length]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
    <>
      <div className={`documentation-gallery documentation-gallery--${variant}`}>
        {items.map((item, index) => (
          <a
            className="documentation-card"
            href={item.src}
            aria-label={`${item.kind === "video" ? (locale === "en" ? "Open video" : "Buka video") : (locale === "en" ? "Open photo" : "Buka foto")}: ${item.label}`}
            onClick={(event) => {
              event.preventDefault();
              setActiveIndex(index);
            }}
            ref={(element) => { triggerRefs.current[index] = element; }}
            key={item.src}
          >
            <figure>
              <div className="documentation-card__image">
                {(item.kind !== "video" || item.poster) && <Image
                  src={item.poster ?? item.src}
                  alt={item.alt}
                  fill
                  sizes={variant === "preview" ? "(max-width: 620px) 100vw, (max-width: 860px) 50vw, 50vw" : "(max-width: 620px) 100vw, (max-width: 860px) 50vw, 33vw"}
                />}
                {item.kind === "video" && (
                  <div className="documentation-card__video-preview" aria-hidden="true">
                    <Play />
                    <span>Video</span>
                  </div>
                )}
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.label}</p>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>

      {activeItem && activeIndex !== null && (
        <div
          className="documentation-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="documentation-lightbox-caption"
          data-documentation-lightbox
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="documentation-lightbox__topbar">
            <span>{activeIndex + 1} / {items.length}</span>
            <button
              type="button"
              aria-label={locale === "en" ? "Close documentation viewer" : "Tutup penampil dokumentasi"}
              onClick={closeLightbox}
              ref={closeButtonRef}
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <button
            className="documentation-lightbox__control documentation-lightbox__control--previous"
            type="button"
            aria-label={locale === "en" ? "Previous documentation" : "Dokumentasi sebelumnya"}
            onClick={showPrevious}
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <figure
            className="documentation-lightbox__figure"
            onTouchStart={activeItem.kind === "video" ? undefined : handleTouchStart}
            onTouchEnd={activeItem.kind === "video" ? undefined : handleTouchEnd}
          >
            <div className="documentation-lightbox__image">
              {activeItem.kind === "video" ? (
                <video key={activeItem.src} controls playsInline preload="metadata" poster={activeItem.poster} aria-label={activeItem.alt}>
                  <source src={activeItem.src} type="video/mp4" />
                  <a href={activeItem.src}>{locale === "en" ? "Download video" : "Unduh video"}</a>
                </video>
              ) : <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                priority
              />}
            </div>
            <figcaption id="documentation-lightbox-caption">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <p>{activeItem.label}</p>
            </figcaption>
          </figure>

          <button
            className="documentation-lightbox__control documentation-lightbox__control--next"
            type="button"
            aria-label={locale === "en" ? "Next documentation" : "Dokumentasi berikutnya"}
            onClick={showNext}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
