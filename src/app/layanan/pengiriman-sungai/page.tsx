import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/data/services";

export const metadata: Metadata = {
  title: "Pengiriman Sungai",
  description: "Layanan pengiriman barang PT. SCMU melalui jalur sungai untuk rute yang tersedia.",
};

export default function RiverServicePage() {
  return <ServiceDetail service={getService("pengiriman-sungai")!} />;
}
