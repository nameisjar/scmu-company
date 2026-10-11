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
      src: "/images/documentation/operasional-05.jpg",
      alt: "Tiga truk bermuatan material berada di area kontainer",
      credit: "Dokumentasi PT. SCMU",
      position: "center 52%",
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
      src: "/images/documentation/operasional-13.jpg",
      alt: "Forklift memindahkan peti kayu berukuran besar di area operasional",
      credit: "Dokumentasi PT. SCMU",
      position: "center 55%",
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
      src: "/images/documentation/operasional-08.jpg",
      alt: "Kapal bersandar di pelabuhan dekat area kontainer",
      credit: "Dokumentasi PT. SCMU",
      position: "center 43%",
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
      src: "/images/documentation/operasional-10.jpg",
      alt: "Muatan tangki berukuran besar berada di atas trailer dekat perairan",
      credit: "Dokumentasi PT. SCMU",
      position: "center 48%",
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
      src: "/images/documentation/operasional-01.jpg",
      alt: "Forklift membantu proses pemuatan di antara truk dan deretan kontainer",
      credit: "Dokumentasi PT. SCMU",
      position: "center 52%",
    },
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

const serviceTranslations = [
  {
    title: "Road Freight",
    shortTitle: "Road",
    description: "Road distribution for intercity and regional deliveries within the available service coverage.",
    overview: "Road freight supports intercity and regional distribution. Vehicle type and route are discussed based on the cargo, origin, destination, and service availability.",
    suitableFor: "Intercity and regional distribution",
    initialInformation: "Cargo type, volume, origin, and destination",
    availability: "Subject to road access and fleet availability",
  },
  {
    title: "Air Freight",
    shortTitle: "Air",
    description: "Air freight for time-sensitive cargo on available flight routes.",
    overview: "Air freight is intended for shipments requiring shorter handling times, subject to route availability and aviation requirements.",
    suitableFor: "Time-sensitive shipments",
    initialInformation: "Cargo type, weight, dimensions, and destination",
    availability: "Subject to flight routes and schedules",
  },
  {
    title: "Sea Freight",
    shortTitle: "Sea",
    description: "Sea freight for inter-island distribution and cargo with suitable characteristics or volume.",
    overview: "This service supports inter-island distribution. Availability is determined after the cargo type, volume, origin, destination, and route have been reviewed.",
    suitableFor: "Inter-island distribution and larger volumes",
    initialInformation: "Packaging, volume, origin, and destination",
    availability: "Subject to vessel and port schedules",
  },
  {
    title: "River Freight",
    shortTitle: "River",
    description: "River transport for cargo and areas connected by available inland-waterway routes.",
    overview: "River freight is considered for areas with waterway access. Vessel availability, loading and unloading points, and route conditions must be confirmed first.",
    suitableFor: "Areas connected by inland waterways",
    initialInformation: "Cargo, loading point, and unloading point",
    availability: "Subject to vessel, route, and water conditions",
  },
  {
    title: "Multimodal Freight",
    shortTitle: "Multimodal",
    description: "Freight combining two or more transport modes to suit the route, regional access, and cargo requirements.",
    overview: "Multimodal freight connects road, sea, air, river, or other onward modes on available corridors. The journey is planned after the cargo, origin, destination, and transfer points have been reviewed.",
    suitableFor: "Routes requiring more than one transport mode",
    initialInformation: "Cargo, origin, destination, and priority",
    availability: "Subject to route connections and onward modes",
  },
] as const;

export const servicesEn: Service[] = services.map((service, index) => {
  const translation = serviceTranslations[index];
  return {
    ...service,
    title: translation.title,
    shortTitle: translation.shortTitle,
    description: translation.description,
    overview: translation.overview,
    quickFacts: {
      suitableFor: translation.suitableFor,
      initialInformation: translation.initialInformation,
      availability: translation.availability,
    },
    image: {
      ...service.image,
      credit: "PT. SCMU Documentation",
    },
  };
});
