import type { FaqItem } from "@/types";
import { offices } from "@/data/company";

export const faqs: FaqItem[] = [
  {
    question: "Apa saja layanan PT. SCMU?",
    answer:
      "PT. SCMU melayani pengiriman barang melalui empat moda utama, yaitu darat, udara, laut, dan sungai, serta layanan multimoda untuk kebutuhan yang memerlukan kombinasi beberapa moda transportasi. Pilihan layanan dibahas dari karakteristik barang, jumlah, asal, tujuan, dan ketersediaan rute.",
  },
  {
    question: "Wilayah mana saja yang termasuk area pengiriman PT. SCMU?",
    answer:
      "PT. SCMU melayani pengiriman menuju Merauke dari Jakarta, Surabaya, dan Makassar; pengiriman dari Merauke menuju Makassar, Surabaya, Jakarta, Pontianak, dan Medan; serta distribusi regional antara Merauke, Boven Digoel, Mappi, dan Asmat. Ketersediaan moda, jadwal, dan rute dikonfirmasi berdasarkan jenis barang, tujuan, serta kondisi layanan operasional.",
  },
  {
    question: "Apa perbedaan lima layanan pengiriman yang tersedia?",
    answer:
      "Setiap layanan memiliki penggunaan berbeda. Darat digunakan pada cakupan jalan yang tersedia, udara untuk prioritas waktu, laut untuk distribusi antarpulau, sungai untuk koridor perairan, dan multimoda untuk rute yang membutuhkan kombinasi dua atau lebih moda transportasi.",
  },
  {
    question: "Bagaimana cara meminta penawaran?",
    answer:
      "Isi formulir pesan pada website. Setelah data lengkap, website akan menyusun pesan dan mengarahkan Anda ke WhatsApp resmi PT. SCMU.",
  },
  {
    question: "Informasi apa yang perlu disiapkan?",
    answer:
      "Siapkan nama dan detail pengiriman mengenai jenis barang, jumlah, lokasi asal, lokasi tujuan, serta prioritas pengiriman.",
  },
  {
    question: "Barang apa saja yang dapat dikirim?",
    answer:
      "Barang umum, barang kemasan, material proyek, muatan kontainer, dan kebutuhan pengiriman lainnya dapat dibahas terlebih dahulu. Penerimaan barang ditentukan setelah tim PT. SCMU meninjau jenis, ukuran, berat, cara penanganan, rute, serta ketentuan keselamatan yang berlaku.",
  },
  {
    question: "Bagaimana biaya dan estimasi waktu pengiriman ditentukan?",
    answer:
      "Biaya dan estimasi dipengaruhi oleh jenis barang, berat atau volume, asal, tujuan, moda, jadwal, serta kebutuhan penanganan. Informasi akhir dikonfirmasi setelah detail pengiriman dan ketersediaan rute diperiksa.",
  },
  {
    question: "Di mana alamat kantor PT. SCMU?",
    answer: offices.map((office) => `${office.type} (${office.city}): ${office.address}.`).join(" "),
  },
  {
    question: "Bagaimana cara menghubungi PT. SCMU?",
    answer:
      "Gunakan formulir pesan, tombol WhatsApp, email scmumerauke@gmail.com, atau nomor +62 812-4827-2727 pada jam operasional.",
  },
];

export const faqsEn: FaqItem[] = [
  {
    question: "What services does PT. SCMU provide?",
    answer: "PT. SCMU provides freight services through four primary modes—road, air, sea, and river—as well as multimodal services for shipments requiring a combination of transport modes. The suitable option is discussed based on cargo characteristics, quantity, origin, destination, and route availability.",
  },
  {
    question: "Which areas are covered by PT. SCMU?",
    answer: "PT. SCMU serves routes to Merauke from Jakarta, Surabaya, and Makassar; routes from Merauke to Makassar, Surabaya, Jakarta, Pontianak, and Medan; and regional distribution between Merauke, Boven Digoel, Mappi, and Asmat. Transport mode, schedule, and route availability are confirmed based on the cargo type, destination, and current operating conditions.",
  },
  {
    question: "What is the difference between the five freight services?",
    answer: "Each service serves a different purpose: road freight follows available road networks, air freight prioritizes time, sea freight supports inter-island distribution, river freight serves inland-waterway corridors, and multimodal freight combines two or more transport modes.",
  },
  {
    question: "How do I request a quotation?",
    answer: "Complete the message form on the website. Once the details are complete, the website will prepare a message and direct you to PT. SCMU's official WhatsApp account.",
  },
  {
    question: "What information should I prepare?",
    answer: "Prepare your name and shipment details covering the cargo type, quantity, origin, destination, and delivery priority.",
  },
  {
    question: "What types of cargo can be shipped?",
    answer: "General cargo, packaged goods, project materials, containerized cargo, and other shipment requirements can be discussed with the team. Acceptance is confirmed after PT. SCMU reviews the cargo type, dimensions, weight, handling requirements, route, and applicable safety requirements.",
  },
  {
    question: "How are shipping costs and transit estimates determined?",
    answer: "Cost and timing depend on the cargo type, weight or volume, origin, destination, transport mode, schedule, and handling requirements. Final information is confirmed after the shipment details and route availability have been reviewed.",
  },
  {
    question: "Where are PT. SCMU's offices located?",
    answer: offices.map((office) => `${office.typeEn} (${office.city}): ${office.address}.`).join(" "),
  },
  {
    question: "How can I contact PT. SCMU?",
    answer: "Use the message form, WhatsApp button, email scmumerauke@gmail.com, or call +62 812-4827-2727 during business hours.",
  },
];
