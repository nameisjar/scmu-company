# Website Company Profile PT. SCMU

Website company profile frontend-only berbasis Next.js App Router, TypeScript, dan React. Implementasi mengikuti `PRD-PT-SCMU.md` dan `DESIGN-PT-SCMU.md`.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Konfigurasi resmi

Salin `.env.example` menjadi `.env.local`, lalu isi:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=62xxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://domain-resmi.example
```

Nomor WhatsApp memakai kode negara tanpa `+`, spasi, atau tanda hubung. Tanpa nomor ini, form tetap tervalidasi tetapi tidak akan membuka WhatsApp agar website tidak mengarahkan pengguna ke nomor yang tidak resmi.

Lengkapi data email, alamat, telepon, dan jam operasional pada `src/data/company.ts`. Logo resmi website tersimpan di `public/logo/scmu-logo.png` dan digunakan oleh `src/components/layout/Brand.tsx`.

## Pemeriksaan

```bash
npm run typecheck
npm run build
```

## Route

- `/`
- `/tentang-kami`
- `/layanan`
- `/layanan/pengiriman-laut`
- `/layanan/pengiriman-udara`
- `/layanan/pengiriman-darat`
- `/layanan/pengiriman-sungai`
- `/layanan/pengiriman-kereta`
- `/area-pengiriman`
- `/faq`
- `/kontak`

Website tidak memiliki backend, database, login, dashboard, atau fitur tracking.

## Kredit aset

Foto hero dan contoh layanan sementara dari Unsplash:

- Darat: [Tom Jackson](https://unsplash.com/photos/H2UzCyX32p4)
- Udara: [Peaky_82](https://unsplash.com/photos/85gDb_IHdAQ)
- Laut: [Daniel Miksha](https://unsplash.com/photos/4ZornyPnGlA)
- Sungai: [Bernd Dittrich](https://unsplash.com/photos/o9vMLTC7jXM)
- Kereta: [Roger Starnes Sr](https://unsplash.com/photos/XXVattcDrWA)

Seluruh foto contoh digunakan berdasarkan Unsplash License dan sebaiknya diganti dengan dokumentasi resmi PT. SCMU ketika tersedia.
