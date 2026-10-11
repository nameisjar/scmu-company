import {
  ScmuAirIcon,
  ScmuMultimodalIcon,
  ScmuRiverIcon,
  ScmuRoadIcon,
  ScmuSeaIcon,
} from "@/components/icons/ScmuIcons";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "pengiriman-darat",
    title: "Pengiriman Darat",
    shortTitle: "Darat",
    Icon: ScmuRoadIcon,
    description:
      "Distribusi melalui jalur darat untuk pengiriman antarkota atau antarwilayah sesuai cakupan layanan.",
    overview:
      "Layanan darat mendukung distribusi antarkota dan antarwilayah. Jenis kendaraan dan rute dibahas dari barang, asal, tujuan, serta ketersediaan layanan.",
    quickFacts: {
      suitableFor: "Distribusi antarkota dan antarwilayah",
      initialInformation: "Jenis barang, volume, asal, dan tujuan",
      availability: "Sesuai akses jalan dan armada yang tersedia",
    },
    benefits: [
      "Mendukung distribusi antarkota atau antarwilayah",
      "Pilihan angkutan mempertimbangkan karakteristik barang",
      "Koordinasi kebutuhan dilakukan sebelum pengiriman",
    ],
    suitableFor: [
      "Distribusi barang melalui jalur darat",
      "Kebutuhan antarkota pada cakupan yang tersedia",
      "Pengiriman dengan kebutuhan angkutan yang berbeda",
    ],
    image: {
      src: "/images/service-road.jpg",
      alt: "Truk kargo merah melintas di jalan raya",
      credit: "Tom Jackson",
      source: "https://unsplash.com/photos/H2UzCyX32p4",
      position: "center 64%",
    },
  },
  {
    slug: "pengiriman-udara",
    title: "Pengiriman Udara",
    shortTitle: "Udara",
    Icon: ScmuAirIcon,
    description:
      "Pengiriman melalui jalur udara untuk barang dengan prioritas waktu pada rute penerbangan yang tersedia.",
    overview:
      "Layanan udara ditujukan untuk pengiriman yang membutuhkan penanganan waktu lebih singkat, mengikuti ketersediaan rute dan ketentuan penerbangan.",
    quickFacts: {
      suitableFor: "Pengiriman dengan prioritas waktu",
      initialInformation: "Jenis barang, berat, dimensi, dan tujuan",
      availability: "Mengikuti rute dan jadwal penerbangan",
    },
    benefits: [
      "Pilihan untuk kebutuhan dengan prioritas waktu",
      "Rute disesuaikan dengan ketersediaan penerbangan",
      "Informasi barang diperiksa sebelum moda dikonfirmasi",
    ],
    suitableFor: [
      "Pengiriman dengan prioritas waktu",
      "Barang yang memenuhi ketentuan penerbangan",
      "Kebutuhan antarkota pada rute yang tersedia",
    ],
    image: {
      src: "/images/service-air.jpg",
      alt: "Pesawat kargo sedang melakukan bongkar muat di bandara",
      credit: "Peaky_82",
      source: "https://unsplash.com/photos/85gDb_IHdAQ",
      position: "center 56%",
    },
  },
  {
    slug: "pengiriman-laut",
    title: "Pengiriman Laut",
    shortTitle: "Laut",
    Icon: ScmuSeaIcon,
    description:
      "Pengiriman melalui jalur laut untuk distribusi antarpulau serta barang dengan karakteristik atau volume yang sesuai.",
    overview:
      "Layanan ini ditujukan untuk distribusi antarpulau. Ketersediaan ditentukan setelah jenis barang, volume, asal, tujuan, dan rute diperiksa.",
    quickFacts: {
      suitableFor: "Distribusi antarpulau dan volume lebih besar",
      initialInformation: "Kemasan, volume, asal, dan tujuan",
      availability: "Mengikuti jadwal kapal dan pelabuhan",
    },
    benefits: [
      "Pilihan untuk kebutuhan distribusi antarpulau",
      "Sesuai untuk karakteristik barang dan volume tertentu",
      "Moda dan rute dibahas dari data pengiriman",
    ],
    suitableFor: [
      "Barang dengan volume lebih besar",
      "Distribusi antarpulau",
      "Kebutuhan logistik yang sesuai ketentuan angkutan laut",
    ],
    image: {
      src: "/images/service-sea.jpg",
      alt: "Kapal kontainer sedang bersandar di terminal pelabuhan",
      credit: "Daniel Miksha",
      source: "https://unsplash.com/photos/4ZornyPnGlA",
      position: "center",
    },
  },
  {
    slug: "pengiriman-sungai",
    title: "Pengiriman Sungai",
    shortTitle: "Sungai",
    Icon: ScmuRiverIcon,
    description:
      "Angkutan melalui jalur sungai untuk barang dan wilayah yang terhubung dengan rute perairan yang tersedia.",
    overview:
      "Layanan sungai dipertimbangkan untuk wilayah yang memiliki akses perairan. Ketersediaan kapal, titik muat, titik bongkar, dan kondisi rute perlu dikonfirmasi terlebih dahulu.",
    quickFacts: {
      suitableFor: "Wilayah yang terhubung jalur perairan",
      initialInformation: "Muatan, titik muat, dan titik bongkar",
      availability: "Sesuai kapal, rute, dan kondisi perairan",
    },
    benefits: [
      "Pilihan untuk wilayah yang terhubung jalur sungai",
      "Dapat dipertimbangkan untuk karakteristik muatan tertentu",
      "Rute dan sarana dikonfirmasi sebelum pengiriman",
    ],
    suitableFor: [
      "Distribusi pada koridor sungai yang tersedia",
      "Muatan yang sesuai dengan sarana angkutan perairan",
      "Kebutuhan antartitik dengan akses dermaga atau pelabuhan sungai",
    ],
    image: {
      src: "/images/service-river.jpg",
      alt: "Kapal tongkang membawa muatan menyusuri sungai",
      credit: "Bernd Dittrich",
      source: "https://unsplash.com/photos/o9vMLTC7jXM",
      position: "64% 52%",
    },
  },
  {
    slug: "pengiriman-multimoda",
    title: "Pengiriman Multimoda",
    shortTitle: "Multimoda",
    Icon: ScmuMultimodalIcon,
    description:
      "Pengiriman yang menggabungkan dua atau lebih moda untuk menyesuaikan rute, akses wilayah, dan kebutuhan barang.",
    overview:
      "Layanan multimoda menghubungkan moda darat, laut, udara, sungai, atau moda lanjutan lain pada koridor yang tersedia. Susunan perjalanan dibahas setelah barang, asal, tujuan, dan titik perpindahan diperiksa.",
    quickFacts: {
      suitableFor: "Rute yang membutuhkan lebih dari satu moda",
      initialInformation: "Barang, asal, tujuan, dan prioritas",
      availability: "Sesuai koneksi rute dan moda lanjutan",
    },
    benefits: [
      "Menghubungkan wilayah dengan akses transportasi yang berbeda",
      "Susunan moda disesuaikan dengan rute dan karakteristik barang",
      "Titik perpindahan dan moda lanjutan dikonfirmasi sebelum pengiriman",
    ],
    suitableFor: [
      "Distribusi yang membutuhkan kombinasi darat dan perairan",
      "Tujuan yang memerlukan perpindahan antarmoda",
      "Pengiriman dengan rute lanjutan di luar satu jaringan transportasi",
    ],
    image: {
      src: "/images/service-rail.jpg",
      alt: "Kereta barang sebagai salah satu moda dalam jaringan pengiriman multimoda",
      credit: "Roger Starnes Sr",
      source: "https://unsplash.com/photos/XXVattcDrWA",
      position: "center 58%",
    },
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
