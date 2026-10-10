"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { company } from "@/data/company";

export function WhatsAppButton() {
  const pathname = usePathname();

  if (!company.whatsapp || pathname === "/kontak") return null;

  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Halo PT. SCMU, saya ingin berkonsultasi mengenai pengiriman barang.")}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat PT. SCMU melalui WhatsApp"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}
