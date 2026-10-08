import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Pengiriman Kereta",
  description: "Layanan pengiriman barang PT. SCMU melalui jaringan kereta dan terminal kargo yang tersedia.",
};

export default function RailServicePage() {
  return <ServiceDetail service={getService("pengiriman-kereta")!} />;
}
