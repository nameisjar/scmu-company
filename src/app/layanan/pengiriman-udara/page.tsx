import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/data/services";

export const metadata: Metadata = { title: "Pengiriman Udara", description: "Layanan pengiriman barang PT. SCMU melalui jalur udara untuk rute yang tersedia." };

export default function AirServicePage() { return <ServiceDetail service={getService("pengiriman-udara")!} />; }
