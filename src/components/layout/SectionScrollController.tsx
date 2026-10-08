"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SectionScrollController() {
  const pathname = usePathname();
  const isSnappingRef = useRef(false);

  useEffect(() => {
    let animationFrame: number | undefined;
    let previousScrollBehavior = "";

    const animateScroll = (targetScroll: number) => {
      const startScroll = window.scrollY;
      const distance = targetScroll - startScroll;
      const duration = Math.min(900, Math.max(720, Math.abs(distance) * 0.55));
      const startedAt = performance.now();

      previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";

      const easeInOutCubic = (progress: number) =>
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startedAt) / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startScroll + distance * easedProgress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
          return;
        }

        window.scrollTo(0, targetScroll);
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        animationFrame = undefined;
        isSnappingRef.current = false;
      };

      animationFrame = window.requestAnimationFrame(step);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= 12) return;

      const eventTarget = event.target as Element | null;
      if (eventTarget?.closest("[data-section-scroll-native]")) {
        return;
      }

      if (isSnappingRef.current) {
        event.preventDefault();
        return;
      }

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section, footer.footer"),
      );
      if (sections.length === 0) return;

      const stickyHeader = document.querySelector<HTMLElement>(".site-header");
      const headerOffset = stickyHeader?.offsetHeight ?? 72;
      const sectionTops = sections.map((section, index) =>
        index === 0
          ? 0
          : section.getBoundingClientRect().top + window.scrollY - headerOffset,
      );
      const currentScroll = window.scrollY;
      let currentIndex = 0;

      sectionTops.forEach((sectionTop, index) => {
        if (currentScroll >= sectionTop - 32) currentIndex = index;
      });

      const targetIndex = event.deltaY > 0
        ? currentIndex + 1
        : currentIndex - 1;

      if (targetIndex < 0) {
        if (currentScroll <= 2) return;
      } else if (targetIndex >= sections.length) {
        return;
      }

      event.preventDefault();
      isSnappingRef.current = true;
      animateScroll(targetIndex < 0 ? 0 : sectionTops[targetIndex]);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      isSnappingRef.current = false;
    };
  }, [pathname]);

  return null;
}
