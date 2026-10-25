import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/tentang-kami", "/layanan", "/layanan/jakarta-merauke", "/dokumentasi", "/faq", "/kontak"];
  return paths.flatMap((path) => {
    const englishPath = `/en${path}`;
    return [
      {
        url: `${company.siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: path ? "monthly" as const : "weekly" as const,
        priority: path ? 0.7 : 1,
        alternates: { languages: { id: `${company.siteUrl}${path}`, en: `${company.siteUrl}${englishPath}` } },
      },
      {
        url: `${company.siteUrl}${englishPath}`,
        lastModified: new Date(),
        changeFrequency: path ? "monthly" as const : "weekly" as const,
        priority: path ? 0.7 : 1,
        alternates: { languages: { id: `${company.siteUrl}${path}`, en: `${company.siteUrl}${englishPath}` } },
      },
    ];
  });
}
