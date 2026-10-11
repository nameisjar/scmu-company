import type { Metadata } from "next";
import { HomePageContent } from "../page";

export const metadata: Metadata = {
  title: "Transport Management and Freight Services",
  description: "PT. SCMU provides road, air, sea, river, and multimodal freight services from South Papua to regions across Indonesia.",
  alternates: { canonical: "/en", languages: { id: "/", en: "/en" } },
};

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
