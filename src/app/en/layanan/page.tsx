import type { Metadata } from "next";
import { ServicesPageContent } from "../../layanan/page";

export const metadata: Metadata = {
  title: "Freight Services",
  description: "PT. SCMU road, air, sea, river, and multimodal freight services.",
  alternates: { canonical: "/en/layanan", languages: { id: "/layanan", en: "/en/layanan" } },
};

export default function EnglishServicesPage() {
  return <ServicesPageContent locale="en" />;
}
