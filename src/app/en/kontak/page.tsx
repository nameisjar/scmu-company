import type { Metadata } from "next";
import { ContactPageContent } from "../../kontak/page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact PT. SCMU to discuss freight services and request a quotation.",
  alternates: { canonical: "/en/kontak", languages: { id: "/kontak", en: "/en/kontak" } },
};

export default function EnglishContactPage() {
  return <ContactPageContent locale="en" />;
}
