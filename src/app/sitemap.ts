import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/tentang-kami", "/layanan", "/dokumentasi", "/faq", "/kontak"];
  return paths.map((path) => ({ url: `${company.siteUrl}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 }));
}
