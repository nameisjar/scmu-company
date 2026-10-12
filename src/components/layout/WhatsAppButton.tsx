"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { company } from "@/data/company";
import { localeFromPathname } from "@/i18n/config";

export function WhatsAppButton() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);

  if (!company.whatsapp || pathname === "/kontak" || pathname === "/en/kontak") return null;

  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(locale === "en" ? "Hello PT. SCMU, I would like to discuss a freight shipment." : "Halo PT. SCMU, saya ingin berkonsultasi mengenai pengiriman barang.")}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={locale === "en" ? "Chat with PT. SCMU via WhatsApp" : "Chat PT. SCMU melalui WhatsApp"}
    >
      <WhatsAppIcon />
    </a>
  );
}
