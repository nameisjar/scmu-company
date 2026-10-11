import type { Metadata } from "next";
import type { ReactNode } from "react";
import { companyEn } from "@/data/company";

export const metadata: Metadata = {
  description: companyEn.description,
  openGraph: {
    title: "PT. SCMU | Freight Services",
    description: companyEn.description,
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return children;
}
