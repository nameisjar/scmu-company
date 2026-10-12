import Image from "next/image";
import { documentation, documentationEn } from "@/data/documentation";
import type { Locale } from "@/i18n/config";

type Props = {
  limit?: number;
  variant?: "preview" | "full";
  locale?: Locale;
};

export function DocumentationGallery({ limit, variant = "full", locale = "id" }: Props) {
  const source = locale === "en" ? documentationEn : documentation;
  const uniqueSource = source.filter((item, index, items) => {
    const normalizedSource = item.src.trim().toLowerCase();
    return items.findIndex((candidate) => candidate.src.trim().toLowerCase() === normalizedSource) === index;
  });
  const items = typeof limit === "number" ? uniqueSource.slice(0, limit) : uniqueSource;

  return (
    <div className={`documentation-gallery documentation-gallery--${variant}`}>
      {items.map((item, index) => (
        <a
          className="documentation-card"
          href={item.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`${locale === "en" ? "Open photo" : "Buka foto"}: ${item.label}`}
          key={item.src}
        >
          <figure>
            <div className="documentation-card__image">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={variant === "preview" ? "(max-width: 620px) 100vw, (max-width: 860px) 50vw, 50vw" : "(max-width: 620px) 100vw, (max-width: 860px) 50vw, 33vw"}
              />
            </div>
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item.label}</p>
            </figcaption>
          </figure>
        </a>
      ))}
    </div>
  );
}
