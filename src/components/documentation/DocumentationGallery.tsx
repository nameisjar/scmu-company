import Image from "next/image";
import { documentation } from "@/data/documentation";

type Props = {
  limit?: number;
  variant?: "preview" | "full";
};

export function DocumentationGallery({ limit, variant = "full" }: Props) {
  const items = typeof limit === "number" ? documentation.slice(0, limit) : documentation;

  return (
    <div className={`documentation-gallery documentation-gallery--${variant}`}>
      {items.map((item, index) => (
        <a
          className="documentation-card"
          href={item.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Buka foto: ${item.label}`}
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
