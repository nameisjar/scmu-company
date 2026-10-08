# PRD — Website Company Profile PT. SCMU

**Versi:** 1.0  
**Status:** Ready for Development  
**Target:** Codex / VS Code  
**Platform:** Web Responsive  
**Scope:** Frontend Only  
**Brand:** PT. SCMU

---

## 1. Ringkasan Proyek

PT. SCMU adalah perusahaan jasa pengiriman barang yang menyediakan layanan transportasi melalui:

- Laut
- Udara
- Darat

Website ini berfungsi sebagai **company profile dan lead-generation website** untuk memperkenalkan PT. SCMU, menjelaskan layanan, membangun kepercayaan calon pelanggan, dan memudahkan calon pelanggan meminta penawaran melalui WhatsApp.

Website **tidak memiliki backend, database, login, dashboard, atau fitur tracking**.

Fokus utama website:

1. Menampilkan identitas PT. SCMU secara profesional.
2. Menjelaskan layanan pengiriman laut, udara, dan darat.
3. Menjelaskan proses pengiriman.
4. Menampilkan area/rute layanan berdasarkan data perusahaan.
5. Menampilkan alasan memilih PT. SCMU.
6. Menyediakan FAQ.
7. Menyediakan kontak perusahaan.
8. Mengarahkan calon pelanggan untuk meminta penawaran melalui WhatsApp.

---

# 2. Tujuan Produk

## 2.1 Tujuan Bisnis

Website harus membantu PT. SCMU:

- meningkatkan kredibilitas perusahaan;
- memperkenalkan layanan kepada calon pelanggan;
- mendapatkan inquiry baru;
- memudahkan calon pelanggan menghubungi perusahaan;
- mempermudah proses awal permintaan penawaran;
- memiliki representasi digital yang profesional.

## 2.2 Tujuan Pengguna

Pengunjung harus dapat dengan cepat memahami:

- PT. SCMU bergerak di bidang apa;
- layanan apa yang tersedia;
- pilihan moda transportasi;
- apakah kebutuhan pengiriman mereka sesuai;
- bagaimana cara menghubungi PT. SCMU;
- bagaimana meminta penawaran.

---

# 3. Target Pengguna

### Primary

- Individu yang ingin mengirim barang.
- UMKM.
- Toko/distributor.
- Perusahaan.
- Instansi.
- Pelanggan yang membutuhkan pengiriman antarkota/antarwilayah.

### Secondary

- Calon partner bisnis.
- Vendor.
- Calon klien corporate.
- Pihak yang ingin mengetahui profil perusahaan.

---

# 4. Positioning

PT. SCMU harus diposisikan sebagai perusahaan logistik yang:

> Profesional, dapat diandalkan, terhubung dengan berbagai moda transportasi, dan memberikan solusi pengiriman sesuai kebutuhan pelanggan.

Website tidak boleh terlihat seperti marketplace ekspedisi atau aplikasi tracking.

---

# 5. Scope Produk

## 5.1 Termasuk

- Homepage.
- Tentang Kami.
- Layanan.
- Detail layanan laut.
- Detail layanan udara.
- Detail layanan darat.
- Area pengiriman.
- Proses pengiriman.
- Why Choose Us.
- FAQ.
- Kontak.
- Form permintaan penawaran.
- Integrasi WhatsApp berbasis URL.
- Responsive design.
- SEO dasar.
- Accessibility dasar.
- Animasi ringan.
- Static content.

## 5.2 Tidak Termasuk

Fitur berikut secara eksplisit TIDAK dibuat:

- Tracking shipment.
- Cek nomor resi.
- AWB checker.
- Live shipment tracking.
- Shipment dashboard.
- Customer login.
- Admin login.
- Admin dashboard.
- Database.
- Backend API.
- CMS.
- Payment gateway.
- Order management.
- Notification backend.
- User registration.
- Shipment status API.
- Real-time location tracking.

**Jangan membuat UI palsu yang seolah-olah fitur tracking tersedia.**

---

# 6. Struktur Halaman

Gunakan struktur berikut:

```text
/
├── Beranda
├── Tentang Kami
├── Layanan
│   ├── Pengiriman Laut
│   ├── Pengiriman Udara
│   └── Pengiriman Darat
├── Area Pengiriman
├── FAQ
└── Kontak
```

Tidak semua halaman harus menjadi route terpisah apabila implementasi yang lebih sederhana dan konsisten lebih sesuai. Namun konten harus tetap terstruktur secara semantic dan SEO-friendly.

---

# 7. Homepage

Homepage adalah halaman utama untuk conversion.

Urutan section:

```text
Navbar
↓
Hero
↓
Company Introduction / Trust
↓
Services
↓
Why Choose SCMU
↓
Shipping Process
↓
Coverage Area
↓
Company / Partner Information (jika data valid)
↓
Gallery (jika asset tersedia)
↓
FAQ
↓
Quotation CTA
↓
Contact
↓
Footer
↓
Floating WhatsApp
```

---

# 8. Navbar

Menu:

```text
Beranda
Tentang Kami
Layanan
Area Pengiriman
FAQ
Kontak
```

CTA utama:

```text
Minta Penawaran
```

Behavior:

- sticky pada desktop;
- mobile menggunakan hamburger menu;
- navbar tetap ringan;
- tidak menggunakan mega menu.

---

# 9. Hero Section

## Objective

Dalam 5–10 detik pengguna harus memahami:

1. siapa PT. SCMU;
2. apa layanan utamanya;
3. bagaimana cara menghubungi perusahaan.

## Content

Gunakan headline yang dapat diganti melalui content configuration.

Contoh:

> Solusi Pengiriman Barang untuk Berbagai Kebutuhan

Supporting text:

> Melayani kebutuhan pengiriman melalui transportasi laut, udara, dan darat dengan layanan yang profesional dan sesuai kebutuhan.

CTA:

```text
Minta Penawaran
Lihat Layanan
```

Gunakan foto/logistics imagery yang relevan.

Jangan menampilkan:

- tracking form;
- nomor resi;
- fake delivery status;
- fake statistics.

---

# 10. Company Introduction

Section singkat yang memperkenalkan PT. SCMU.

Konten dapat berupa:

- deskripsi perusahaan;
- bidang usaha;
- pendekatan pelayanan;
- nilai perusahaan.

Jika informasi resmi belum tersedia, gunakan placeholder content yang jelas untuk diganti.

Jangan mengarang:

- tahun berdiri;
- jumlah cabang;
- jumlah pengiriman;
- jumlah pelanggan;
- jumlah armada;
- sertifikasi;
- penghargaan.

---

# 11. Services

Tiga layanan utama:

### Pengiriman Laut

Untuk kebutuhan pengiriman barang melalui jalur laut, terutama kebutuhan distribusi dan pengiriman dengan karakteristik barang/volume yang sesuai.

### Pengiriman Udara

Untuk kebutuhan pengiriman melalui jalur udara dengan prioritas waktu dan rute yang tersedia.

### Pengiriman Darat

Untuk kebutuhan distribusi melalui jalur darat sesuai cakupan dan rute perusahaan.

Setiap service card memiliki:

- icon;
- nama;
- deskripsi singkat;
- CTA "Lihat Detail".

---

# 12. Detail Service Pages

Setiap moda memiliki struktur:

```text
Hero
↓
Overview
↓
Keunggulan
↓
Cocok Untuk
↓
Proses
↓
Informasi Tambahan
↓
CTA
```

### Pengiriman Laut

Icon: Ship

Potential content:

- distribusi antarpulau;
- barang dengan volume lebih besar;
- kebutuhan logistik tertentu.

### Pengiriman Udara

Icon: Plane

Potential content:

- pengiriman yang membutuhkan waktu lebih cepat;
- barang yang sesuai dengan ketentuan penerbangan.

### Pengiriman Darat

Icon: Truck

Potential content:

- distribusi darat;
- pengiriman antarkota/antarwilayah yang tersedia.

**Konten final harus mengikuti informasi resmi PT. SCMU.**

---

# 13. Why Choose Us

Gunakan 4–6 value propositions yang benar-benar dapat dibuktikan.

Contoh:

- Multi-Moda Transportasi.
- Konsultasi Kebutuhan Pengiriman.
- Proses Terorganisir.
- Layanan Profesional.
- Fleksibilitas Solusi Pengiriman.
- Komunikasi yang Mudah.

Jangan membuat klaim seperti:

- "100% aman";
- "paling cepat";
- "nomor 1";
- "terpercaya sejak 19xx";

kecuali ada data resmi.

---

# 14. Shipping Process

Tampilkan proses sederhana:

```text
01
Konsultasi
↓
02
Detail Pengiriman
↓
03
Penentuan Solusi Transportasi
↓
04
Proses Pengiriman
↓
05
Barang Diterima
```

Nama tahap dapat disesuaikan dengan proses operasional PT. SCMU.

Tujuannya bukan membuat sistem tracking, tetapi menjelaskan alur layanan.

---

# 15. Coverage Area

Section harus menampilkan area/rute yang benar-benar dilayani.

Jika data belum lengkap:

JANGAN membuat daftar wilayah secara acak.

Gunakan placeholder:

```text
[DAFTAR AREA PENGIRIMAN DIISI BERDASARKAN DATA RESMI PT. SCMU]
```

Atau copy generik:

> Melayani kebutuhan pengiriman ke berbagai wilayah sesuai rute dan ketersediaan layanan PT. SCMU.

---

# 16. Gallery

Gallery bersifat optional.

Gunakan apabila tersedia:

- foto armada;
- kegiatan loading;
- gudang;
- pelabuhan;
- pengiriman;
- dokumentasi perusahaan.

Prioritaskan foto asli perusahaan.

Jika belum ada asset, jangan membuat gallery palsu.

---

# 17. Testimonials

Testimonials hanya ditampilkan jika PT. SCMU menyediakan testimonial asli.

Tidak boleh membuat testimonial fiktif.

Jika belum tersedia:

- section dapat disembunyikan;
- atau diganti dengan company value section.

---

# 18. Client / Partner Logos

Hanya tampilkan logo klien/partner jika PT. SCMU memiliki izin dan data resmi.

Jika belum ada:

```text
DO NOT RENDER FAKE CLIENT LOGOS.
```

---

# 19. FAQ

FAQ minimum:

1. Apa saja layanan PT. SCMU?
2. Apa perbedaan pengiriman laut, udara, dan darat?
3. Bagaimana cara meminta penawaran?
4. Informasi apa yang perlu disiapkan untuk meminta penawaran?
5. Area mana saja yang dilayani?
6. Bagaimana cara menghubungi PT. SCMU?

FAQ harus menggunakan accordion.

---

# 20. Quotation / Request for Quote

Ini adalah conversion feature utama.

## Form

Field:

```text
Nama
Nomor WhatsApp
Jenis Barang
Jumlah / Berat
Lokasi Asal
Lokasi Tujuan
Moda Transportasi
Catatan
```

Field wajib:

- Nama.
- Nomor WhatsApp.
- Jenis barang.
- Asal.
- Tujuan.
- Moda transportasi.

## Behavior

```text
User fills form
↓
Client-side validation
↓
Format WhatsApp message
↓
Encode URL
↓
Open WhatsApp
```

Tidak ada data yang disimpan.

---

# 21. WhatsApp Message

Template:

```text
Halo PT. SCMU,

Saya ingin meminta informasi/penawaran
untuk pengiriman barang.

Nama:
Nomor WhatsApp:
Jenis Barang:
Jumlah/Berat:
Lokasi Asal:
Lokasi Tujuan:
Moda Transportasi:
Catatan:

Terima kasih.
```

Nomor WhatsApp harus diletakkan sebagai environment/config variable, bukan hardcoded di banyak component.

Contoh:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

---

# 22. Contact Section

Tampilkan jika data resmi tersedia:

- alamat;
- nomor WhatsApp;
- telepon;
- email;
- jam operasional;
- social media.

Map embed bersifat optional.

Jangan memasukkan alamat atau kontak yang tidak diberikan oleh pemilik bisnis.

---

# 23. Footer

Footer terdiri dari:

### Company

PT. SCMU  
Deskripsi singkat.

### Navigation

- Tentang Kami
- Layanan
- Area Pengiriman
- FAQ
- Kontak

### Services

- Pengiriman Laut
- Pengiriman Udara
- Pengiriman Darat

### Contact

- WhatsApp
- Email
- Alamat

Bottom:

```text
© 2026 PT. SCMU. All Rights Reserved.
```

Tahun dapat dibuat dinamis.

---

# 24. Functional Requirements

## FR-01 Navigation

User dapat berpindah antar halaman/section.

## FR-02 Responsive

Website harus bekerja pada:

- mobile;
- tablet;
- desktop.

## FR-03 WhatsApp CTA

CTA harus membuka WhatsApp dengan pesan yang sudah terisi.

## FR-04 Quotation Form

Form melakukan validation di client-side.

## FR-05 FAQ Accordion

User dapat membuka dan menutup FAQ.

## FR-06 Mobile Navigation

Menu dapat dibuka/tutup di mobile.

## FR-07 Smooth Scroll

Internal anchor navigation menggunakan smooth scrolling jika sesuai.

## FR-08 External Links

External links membuka destination yang benar.

---

# 25. Non-Functional Requirements

## Performance

Target:

- cepat pada jaringan mobile;
- gambar dioptimalkan;
- lazy loading untuk gambar non-critical;
- tidak menggunakan dependency yang tidak diperlukan.

## Accessibility

- semantic HTML;
- alt text;
- keyboard navigation;
- focus state;
- contrast yang memadai;
- aria-label untuk icon-only button.

## SEO

Setiap halaman harus memiliki:

- title;
- description;
- semantic headings;
- Open Graph metadata;
- canonical URL apabila domain final sudah tersedia.

---

# 26. Technology

Recommended:

```text
Next.js
TypeScript
Tailwind CSS
Lucide React
Framer Motion
```

Gunakan App Router.

---

# 27. Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── tentang-kami/
│   │   └── page.tsx
│   ├── layanan/
│   │   ├── page.tsx
│   │   ├── pengiriman-laut/
│   │   │   └── page.tsx
│   │   ├── pengiriman-udara/
│   │   │   └── page.tsx
│   │   └── pengiriman-darat/
│   │       └── page.tsx
│   ├── area-pengiriman/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   └── kontak/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── services/
│   ├── forms/
│   └── ui/
│
├── data/
│   ├── company.ts
│   ├── services.ts
│   ├── faq.ts
│   └── locations.ts
│
├── lib/
│   └── whatsapp.ts
│
└── types/
    └── index.ts

public/
├── images/
├── icons/
└── logo/
```

---

# 28. Content Architecture

Data perusahaan jangan disebar di banyak component.

Gunakan central configuration.

Contoh:

```ts
export const company = {
  name: "PT. SCMU",
  tagline: "",
  description: "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: "",
  email: "",
  address: "",
};
```

Services:

```ts
export const services = [
  {
    slug: "pengiriman-laut",
    title: "Pengiriman Laut",
    icon: "Ship",
    description: "",
  },
  {
    slug: "pengiriman-udara",
    title: "Pengiriman Udara",
    icon: "Plane",
    description: "",
  },
  {
    slug: "pengiriman-darat",
    title: "Pengiriman Darat",
    icon: "Truck",
    description: "",
  },
];
```

---

# 29. Acceptance Criteria

Website dianggap selesai apabila:

- [ ] Logo PT. SCMU digunakan dengan benar.
- [ ] Warna brand konsisten.
- [ ] Homepage selesai.
- [ ] Tentang Kami selesai.
- [ ] Layanan laut selesai.
- [ ] Layanan udara selesai.
- [ ] Layanan darat selesai.
- [ ] Area pengiriman selesai.
- [ ] FAQ selesai.
- [ ] Kontak selesai.
- [ ] Form quotation bekerja.
- [ ] WhatsApp CTA bekerja.
- [ ] Responsive.
- [ ] Mobile navigation bekerja.
- [ ] Tidak ada tracking UI.
- [ ] Tidak ada fake data bisnis.
- [ ] Tidak ada database.
- [ ] Tidak ada backend.
- [ ] Tidak ada login.
- [ ] Tidak ada admin dashboard.
- [ ] SEO dasar tersedia.
- [ ] Accessibility dasar tersedia.
- [ ] Build production berhasil.

---

# 30. Definition of Done

Project dinyatakan selesai apabila:

1. `npm run build` berhasil.
2. Tidak ada TypeScript error.
3. Tidak ada broken route.
4. Tidak ada broken image.
5. Semua CTA bekerja.
6. WhatsApp quotation bekerja.
7. Mobile layout tidak overflow.
8. Tidak ada horizontal scrolling yang tidak disengaja.
9. Semua placeholder data ditandai dengan jelas.
10. Tidak ada data perusahaan yang dibuat-buat.
11. Design System pada `DESIGN.md` dipatuhi.
12. Tidak ada fitur tracking.

---

# 31. Instruksi Khusus untuk Codex

Codex harus memperlakukan dokumen ini sebagai source of truth.

Prioritas:

```text
1. Brand identity
2. Design system
3. Business requirements
4. Accessibility
5. Performance
6. Code elegance
```

Jika informasi bisnis belum tersedia:

**JANGAN MENEBak.**

Gunakan placeholder yang mudah diganti.

Jika diminta menambahkan fitur baru, periksa terlebih dahulu apakah fitur tersebut bertentangan dengan scope frontend-only.

Khusus tracking:

> PT. SCMU BELUM MEMILIKI FITUR TRACKING.

Jangan membuat tracking page, tracking form, nomor resi checker, shipment status, atau UI yang menyiratkan tracking tersedia.

