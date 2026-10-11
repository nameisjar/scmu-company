import type { Metadata } from "next";
import { AboutPageContent } from "../../tentang-kami/page";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "PT. SCMU company profile, vision, leadership, and commitment to transport management and freight services.",
  alternates: { canonical: "/en/tentang-kami", languages: { id: "/tentang-kami", en: "/en/tentang-kami" } },
};

export default function EnglishAboutPage() {
  return <AboutPageContent locale="en" />;
}
