import type { Metadata } from "next";
import { JakartaMeraukePage } from "@/components/services/JakartaMeraukePage";

const title = "Jakarta–Merauke Freight Shipping | PT. SCMU";
const description = "Jakarta to Merauke freight information from PT. SCMU, including cargo details, service planning, cost factors, and transit estimates.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/layanan/jakarta-merauke",
    languages: { id: "/layanan/jakarta-merauke", en: "/en/layanan/jakarta-merauke" },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "/en/layanan/jakarta-merauke",
  },
};

export default function EnglishJakartaMeraukeRoutePage() {
  return <JakartaMeraukePage locale="en" />;
}
