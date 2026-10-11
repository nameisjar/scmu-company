import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "PT. SCMU | Pengiriman Darat, Udara, Laut, Sungai, dan Multimoda",
    template: "%s | PT. SCMU",
  },
  description: company.description,
  openGraph: {
    title: "PT. SCMU | Pengiriman Barang",
    description: company.description,
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
