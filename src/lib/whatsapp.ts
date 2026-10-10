export type QuoteData = {
  name: string;
  email: string;
  message: string;
};

export function createWhatsAppMessage(data: QuoteData) {
  return `Halo PT. SCMU,

Saya ingin berkonsultasi mengenai pengiriman barang.

Nama: ${data.name}
Email: ${data.email}

Pesan:
${data.message}

Terima kasih.`;
}

export function createWhatsAppUrl(number: string, data: QuoteData) {
  return `https://wa.me/${number}?text=${encodeURIComponent(createWhatsAppMessage(data))}`;
}
