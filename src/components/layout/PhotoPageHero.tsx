import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

type PhotoPageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  image: {
    src: string;
    position?: string;
    mobilePosition?: string;
    credit: string;
    source?: string;
    provider?: string;
  };
  creditLabel?: string;
};

export function PhotoPageHero({ eyebrow, title, description, children, image }: PhotoPageHeroProps) {
  return (
    <section className="photo-page-hero">
      <Image
        className="photo-page-hero__image"
        src={image.src}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          "--page-hero-position": image.position ?? "center",
          "--page-hero-mobile-position": image.mobilePosition ?? image.position ?? "center",
        } as CSSProperties}
      />
      <Container className="photo-page-hero__inner">
        <p className="photo-page-hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="photo-page-hero__description">{description}</p>}
        {children && <div className="photo-page-hero__actions">{children}</div>}
      </Container>
    </section>
  );
}
