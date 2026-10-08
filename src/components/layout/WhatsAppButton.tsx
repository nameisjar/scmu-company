import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppButton() {
  if (!company.whatsapp) return null;

  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Halo PT. SCMU, saya ingin berkonsultasi mengenai pengiriman barang.")}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat PT. SCMU melalui WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Chat WhatsApp</span>
    </a>
  );
}
