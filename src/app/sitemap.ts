import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
const paths = ["", "/tentang-kami", "/layanan", "/layanan/pengiriman-darat", "/layanan/pengiriman-udara", "/layanan/pengiriman-laut", "/layanan/pengiriman-sungai", "/layanan/pengiriman-kereta", "/dokumentasi", "/area-pengiriman", "/faq", "/kontak"];
  return paths.map((path) => ({ url: `${company.siteUrl}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 }));
}
