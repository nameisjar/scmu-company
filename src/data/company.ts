export const company = {
  name: "PT. SCMU",
  tagline: "Pengiriman Barang melalui Lima Moda Transportasi",
  description:
    "PT. SCMU melayani pengiriman barang melalui jalur darat, udara, laut, sungai, dan kereta. Pemilihan moda dibahas berdasarkan jenis barang, jumlah, asal, tujuan, dan ketersediaan rute.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "",
  phone: "",
  email: "",
  address: "",
  operationalHours: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export const navigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    children: [
      { label: "Profil Perusahaan", href: "/tentang-kami" },
      { label: "Mengapa Memilih PT. SCMU", href: "/#keunggulan" },
      { label: "Proses Pengiriman", href: "/#proses" },
    ],
  },
  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Semua Layanan", href: "/layanan" },
      { label: "Pengiriman Darat", href: "/layanan/pengiriman-darat" },
      { label: "Pengiriman Udara", href: "/layanan/pengiriman-udara" },
      { label: "Pengiriman Laut", href: "/layanan/pengiriman-laut" },
      { label: "Pengiriman Sungai", href: "/layanan/pengiriman-sungai" },
      { label: "Pengiriman Kereta", href: "/layanan/pengiriman-kereta" },
    ],
  },
  {
    label: "Informasi",
    href: "/area-pengiriman",
    children: [
      { label: "Area Pengiriman", href: "/area-pengiriman" },
      { label: "Pertanyaan Umum", href: "/faq" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
];
