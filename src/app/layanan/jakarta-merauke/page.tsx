import type { Metadata } from "next";
import { JakartaMeraukePage } from "@/components/services/JakartaMeraukePage";

const title = "Pengiriman Barang Jakarta–Merauke | PT. SCMU";
const description = "Informasi pengiriman barang dari Jakarta ke Merauke bersama PT. SCMU, termasuk jenis barang, data yang diperlukan, serta faktor biaya dan estimasi.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/layanan/jakarta-merauke",
    languages: { id: "/layanan/jakarta-merauke", en: "/en/layanan/jakarta-merauke" },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    url: "/layanan/jakarta-merauke",
  },
};

export default function JakartaMeraukeRoutePage() {
  return <JakartaMeraukePage />;
}
