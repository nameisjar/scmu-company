export type QuoteData = {
  name: string;
  whatsapp: string;
  item: string;
  quantity: string;
  origin: string;
  destination: string;
  mode: string;
  notes: string;
};

export function createWhatsAppMessage(data: QuoteData) {
  return `Halo PT. SCMU,

Saya ingin meminta informasi/penawaran
untuk pengiriman barang.

Nama: ${data.name}
Nomor WhatsApp: ${data.whatsapp}
Jenis Barang: ${data.item}
Jumlah/Berat: ${data.quantity || "-"}
Lokasi Asal: ${data.origin}
Lokasi Tujuan: ${data.destination}
Moda Transportasi: ${data.mode}
Catatan: ${data.notes || "-"}

Terima kasih.`;
}

export function createWhatsAppUrl(number: string, data: QuoteData) {
  return `https://wa.me/${number}?text=${encodeURIComponent(createWhatsAppMessage(data))}`;
}
