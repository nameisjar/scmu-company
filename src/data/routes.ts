import type { Locale } from "@/i18n/config";

export type RouteCoverageGroup = {
  title: string;
  direction: "inbound" | "outbound" | "bidirectional";
  cities: readonly string[];
};

type RouteCoverageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  modesLabel: string;
  modes: string[];
  originsLabel: string;
  destinationsLabel: string;
  regionsLabel: string;
  twoWayLabel: string;
  toLabel: string;
  groups: RouteCoverageGroup[];
  note: string;
};

const routeCities = {
  inbound: ["Jakarta", "Surabaya", "Makassar"],
  outbound: ["Makassar", "Surabaya", "Jakarta", "Pontianak", "Medan"],
  regional: ["Boven Digoel", "Mappi", "Asmat"],
} as const;

const routeCoverage: Record<Locale, RouteCoverageCopy> = {
  id: {
    eyebrow: "Cakupan Layanan",
    title: "Cakupan Rute Pengiriman",
    description:
      "Melayani pengiriman menuju dan dari Merauke, serta distribusi regional di Papua Selatan.",
    modesLabel: "Moda",
    modes: ["Laut", "Sungai", "Darat", "Udara"],
    originsLabel: "Kota asal",
    destinationsLabel: "Kota tujuan",
    regionsLabel: "Wilayah yang terhubung",
    twoWayLabel: "Dua arah",
    toLabel: "Menuju",
    groups: [
      {
        title: "Menuju Merauke",
        direction: "inbound",
        cities: routeCities.inbound,
      },
      {
        title: "Dari Merauke",
        direction: "outbound",
        cities: routeCities.outbound,
      },
      {
        title: "Papua Selatan",
        direction: "bidirectional",
        cities: routeCities.regional,
      },
    ],
    note:
      "Moda, jadwal, dan rute dikonfirmasi sesuai barang, tujuan, serta kondisi operasional.",
  },
  en: {
    eyebrow: "Service Coverage",
    title: "Freight Route Coverage",
    description:
      "Serving shipments to and from Merauke, with regional distribution across South Papua.",
    modesLabel: "Modes",
    modes: ["Sea", "River", "Road", "Air"],
    originsLabel: "Origins",
    destinationsLabel: "Destinations",
    regionsLabel: "Connected regions",
    twoWayLabel: "Both directions",
    toLabel: "To",
    groups: [
      {
        title: "To Merauke",
        direction: "inbound",
        cities: routeCities.inbound,
      },
      {
        title: "From Merauke",
        direction: "outbound",
        cities: routeCities.outbound,
      },
      {
        title: "South Papua",
        direction: "bidirectional",
        cities: routeCities.regional,
      },
    ],
    note:
      "Modes, schedules, and routes are confirmed according to cargo, destination, and operating conditions.",
  },
};

export const getRouteCoverage = (locale: Locale) => routeCoverage[locale];
