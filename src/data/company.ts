export const company = {
  name: "PT. Sarana Cipta Mandiri Utama",
  tagline: "Dari Papua Selatan, Menghubungkan Indonesia.",
  description:
    "PT. SCMU melayani pengiriman barang melalui jalur darat, udara, laut, sungai, dan multimoda. Pilihan layanan dibahas berdasarkan jenis barang, jumlah, asal, tujuan, dan ketersediaan rute.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "6281248272727",
  phone: "+62 812-4827-2727",
  email: "scmumerauke@gmail.com",
  address: "Jl. TMP (Taman Makam Pahlawan) Polder. 45 A, Maro, Kec. Merauke, Kabupaten Merauke, Papua 99613",
  operationalHours: "Senin–Sabtu, 08.00–17.00 WIT",
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
      { label: "Mengapa PT. SCMU", href: "/#keunggulan" },
    ],
  },
  {
    label: "Layanan",
    href: "/layanan",
  },
  { label: "Dokumentasi", href: "/dokumentasi" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];

export const navigationEn: NavigationItem[] = [
  { label: "Home", href: "/en" },
  {
    label: "About Us",
    href: "/en/tentang-kami",
    children: [
      { label: "Company Profile", href: "/en/tentang-kami" },
      { label: "Why PT. SCMU", href: "/en#keunggulan" },
    ],
  },
  { label: "Services", href: "/en/layanan" },
  { label: "Documentation", href: "/en/dokumentasi" },
  { label: "FAQ", href: "/en/faq" },
  { label: "Contact", href: "/en/kontak" },
];

export const companyEn = {
  ...company,
  tagline: "From South Papua, Connecting Indonesia.",
  description:
    "PT. SCMU provides road, air, sea, river, and multimodal freight services. Service options are discussed based on cargo type, quantity, origin, destination, and route availability.",
  operationalHours: "Monday–Saturday, 08:00–17:00 WIT",
};
