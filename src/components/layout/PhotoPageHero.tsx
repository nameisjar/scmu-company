import type { ReactNode } from "react";
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
    credit: string;
    source?: string;
    provider?: string;
  };
};

export function PhotoPageHero({ eyebrow, title, description, children, image }: PhotoPageHeroProps) {
  const credit = <>Foto: {image.credit}{image.provider ? ` / ${image.provider}` : ""}</>;

  return (
    <section className="photo-page-hero">
      <Image
        className="photo-page-hero__image"
        src={image.src}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: image.position }}
      />
      <Container className="photo-page-hero__inner">
        <p className="photo-page-hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="photo-page-hero__description">{description}</p>}
        {children && <div className="photo-page-hero__actions">{children}</div>}
      </Container>
      {image.source ? (
        <a className="photo-page-hero__credit" href={image.source} target="_blank" rel="noreferrer">{credit}</a>
      ) : (
        <span className="photo-page-hero__credit">{credit}</span>
      )}
    </section>
  );
}
