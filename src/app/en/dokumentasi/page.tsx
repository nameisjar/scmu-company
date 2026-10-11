import type { Metadata } from "next";
import { DocumentationPageContent } from "../../dokumentasi/page";

export const metadata: Metadata = {
  title: "Activity Documentation",
  description: "Documentation of PT. SCMU transport and logistics activities.",
  alternates: { canonical: "/en/dokumentasi", languages: { id: "/dokumentasi", en: "/en/dokumentasi" } },
};

export default function EnglishDocumentationPage() {
  return <DocumentationPageContent locale="en" />;
}
