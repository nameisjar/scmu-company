import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/data/services";

export const metadata: Metadata = { title: "Pengiriman Darat", description: "Layanan pengiriman barang PT. SCMU melalui jalur darat sesuai cakupan operasional." };

export default function LandServicePage() { return <ServiceDetail service={getService("pengiriman-darat")!} />; }
