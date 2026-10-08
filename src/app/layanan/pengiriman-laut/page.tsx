import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/data/services";

export const metadata: Metadata = { title: "Pengiriman Laut", description: "Layanan pengiriman barang PT. SCMU melalui jalur laut untuk rute yang tersedia." };

export default function SeaServicePage() { return <ServiceDetail service={getService("pengiriman-laut")!} />; }
