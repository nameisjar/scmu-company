import Image from "next/image";
import { Container } from "@/components/ui/Container";

type PhotoPageHeroProps = {
  eyebrow: string;
  title: string;
  image: {
    src: string;
    position?: string;
    credit: string;
    source: string;
  };
};

export function PhotoPageHero({ eyebrow, title, image }: PhotoPageHeroProps) {
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
        <p>{eyebrow}</p>
        <h1>{title}</h1>
      </Container>
      <a className="photo-page-hero__credit" href={image.source} target="_blank" rel="noreferrer">
        Foto: {image.credit} / Unsplash
      </a>
    </section>
  );
}
