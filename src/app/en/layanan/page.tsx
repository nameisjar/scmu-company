import type { Metadata } from "next";
import { ServicesPageContent } from "../../layanan/page";

export const metadata: Metadata = {
  title: "Cargo Transport Services from Merauke",
  description: "PT. SCMU provides cargo transport from Merauke by road, air, sea, river, and multimodal services, subject to cargo requirements and route availability.",
  alternates: { canonical: "/en/layanan", languages: { id: "/layanan", en: "/en/layanan" } },
};

export default function EnglishServicesPage() {
  return <ServicesPageContent locale="en" />;
}
