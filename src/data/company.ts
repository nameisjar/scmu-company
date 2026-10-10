export const company = {
  name: "PT. Sarana Cipta Mandiri Utama",
  tagline: "Dari Papua Selatan, Menghubungkan Indonesia.",
  description:
    "PT. SCMU melayani pengiriman barang melalui jalur darat, udara, laut, sungai, dan kereta. Pemilihan moda dibahas berdasarkan jenis barang, jumlah, asal, tujuan, dan ketersediaan rute.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "6281248272727",
  phone: "+62 812-4827-2727",
  email: "scmumerauke@gmail.com",
  address: "Jl. TMP (Taman Makam Pahlawan) Polder. 45 A, Maro, Kec. Merauke, Kabupaten Merauke, Papua 99613",
  operationalHours: "08.00–17.00 WIT",
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
  { label: "Dokumentasi", href: "/dokumentasi" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];
