"use client";

import { usePathname } from "next/navigation";
import { company } from "@/data/company";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.004 0h-.006C5.38 0 0 5.382 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.611-1.479A11.925 11.925 0 0 0 12.004 24C18.623 24 24 18.618 24 12S18.623 0 12.004 0Zm6.99 16.954c-.293.827-1.453 1.513-2.377 1.713-.635.135-1.462.243-4.252-.913-3.569-1.478-5.867-5.1-6.044-5.335-.171-.177-1.443-1.921-1.443-3.725 0-1.804.917-2.683 1.284-3.058.293-.3.777-.436 1.241-.436.15 0 .285.007.407.013.367.016.551.037.793.619.293.706 1.006 2.51 1.091 2.69.086.18.172.424.052.665-.113.247-.211.357-.39.565-.18.208-.351.367-.531.59-.165.195-.351.403-.144.759.207.35.923 1.513 1.975 2.45 1.358 1.21 2.459 1.595 2.852 1.758.293.122.643.092.857-.135.271-.293.606-.779.947-1.258.242-.342.537-.385.851-.263.321.116 2.023.955 2.377 1.131.35.177.585.263.671.413.085.15.085.858-.208 1.685Z" />
    </svg>
  );
}

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
