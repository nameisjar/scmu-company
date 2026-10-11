import type { Metadata } from "next";
import { FaqPageContent } from "../../faq/page";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about PT. SCMU services and quotation requests.",
  alternates: { canonical: "/en/faq", languages: { id: "/faq", en: "/en/faq" } },
};

export default function EnglishFaqPage() {
  return <FaqPageContent locale="en" />;
}
