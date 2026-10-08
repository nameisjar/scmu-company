import { Plane, Ship, TrainFront, Truck, Waves } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "pengiriman-darat",
    title: "Pengiriman Darat",
    shortTitle: "Darat",
    Icon: Truck,
    description:
      "Distribusi melalui jalur darat untuk pengiriman antarkota atau antarwilayah sesuai cakupan layanan.",
    overview:
      "Layanan darat mendukung distribusi antarkota dan antarwilayah. Jenis kendaraan dan rute dibahas dari barang, asal, tujuan, serta ketersediaan layanan.",
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
    Icon: Plane,
    description:
      "Pengiriman melalui jalur udara untuk barang dengan prioritas waktu pada rute penerbangan yang tersedia.",
    overview:
      "Layanan udara ditujukan untuk pengiriman yang membutuhkan penanganan waktu lebih singkat, mengikuti ketersediaan rute dan ketentuan penerbangan.",
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
    Icon: Ship,
    description:
      "Pengiriman melalui jalur laut untuk distribusi antarpulau serta barang dengan karakteristik atau volume yang sesuai.",
    overview:
      "Layanan ini ditujukan untuk distribusi antarpulau. Ketersediaan ditentukan setelah jenis barang, volume, asal, tujuan, dan rute diperiksa.",
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
    Icon: Waves,
    description:
      "Angkutan melalui jalur sungai untuk barang dan wilayah yang terhubung dengan rute perairan yang tersedia.",
    overview:
      "Layanan sungai dipertimbangkan untuk wilayah yang memiliki akses perairan. Ketersediaan kapal, titik muat, titik bongkar, dan kondisi rute perlu dikonfirmasi terlebih dahulu.",
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
    slug: "pengiriman-kereta",
    title: "Pengiriman Kereta",
    shortTitle: "Kereta",
    Icon: TrainFront,
    description:
      "Angkutan barang melalui jaringan kereta untuk koridor dan terminal yang mendukung layanan kargo.",
    overview:
      "Layanan kereta dipertimbangkan pada koridor yang memiliki jaringan dan terminal kargo. Jadwal, kapasitas, titik asal, dan titik tujuan perlu diperiksa sebelum moda dikonfirmasi.",
    benefits: [
      "Pilihan untuk koridor yang terhubung jaringan rel",
      "Mendukung perpindahan muatan antarterminal tertentu",
      "Jadwal dan kapasitas dibahas dari kebutuhan pengiriman",
    ],
    suitableFor: [
      "Barang yang memenuhi ketentuan angkutan kereta",
      "Distribusi pada koridor rel yang tersedia",
      "Pengiriman yang dapat terhubung dengan moda lanjutan",
    ],
    image: {
      src: "/images/service-rail.jpg",
      alt: "Kereta barang membawa rangkaian kontainer",
      credit: "Roger Starnes Sr",
      source: "https://unsplash.com/photos/XXVattcDrWA",
      position: "center 58%",
    },
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
