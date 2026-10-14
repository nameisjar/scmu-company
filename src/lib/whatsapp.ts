export type QuoteData = {
  name: string;
  message: string;
};

export function createWhatsAppMessage(data: QuoteData, locale: "id" | "en" = "id") {
  if (locale === "en") return `Hello PT. SCMU,

I would like to discuss a freight shipment.

Name: ${data.name}

Shipment details:
${data.message}

Thank you.`;

  return `Halo PT. SCMU,

Saya ingin berkonsultasi mengenai pengiriman barang.

Nama: ${data.name}

Detail pengiriman:
${data.message}

Terima kasih.`;
}

export function createWhatsAppUrl(number: string, data: QuoteData, locale: "id" | "en" = "id") {
  return `https://wa.me/${number}?text=${encodeURIComponent(createWhatsAppMessage(data, locale))}`;
}
