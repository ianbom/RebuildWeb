# TemuWeb

Indonesian software-house and digital product studio concept site. Built with Next.js App Router, TypeScript, Tailwind CSS, and locally composed CSS product artwork.

## Run

`npm install` then `npm run dev`. For production: `npm run build` and `npm run start`. With the server running, use `npm run smoke`. Also available: `npm run typecheck`, `npm run lint`.

## Pemeriksaan halaman portofolio

Dengan server berjalan dan `browser-harness` tersedia, jalankan:

```powershell
$env:SITE_URL = "http://localhost:3000"
Get-Content scripts/browser-projects.py -Raw | browser-harness
```

Chrome perlu memberi izin remote debugging. Tes memeriksa halaman daftar dan enam konsep pada tujuh ukuran layar, reduced motion, menu mobile, fokus keyboard, serta alur beranda ke daftar dan detail. Sesuaikan `SITE_URL` jika memakai port lain.

## Artikel

Daftar artikel tersedia di `/artikel`, detail di `/artikel/[slug]`. Kelola judul, ringkasan, kategori, tanggal ISO, penulis, tema ilustrasi, serta bagian konten di `src/app/artikel/data.ts`. Waktu baca dihitung dari jumlah kata (200 kata/menit). Harga dalam artikel biaya mengikuti data paket di `src/data/site.ts`. Artikel baru otomatis masuk daftar, static params, dan sitemap. Konten berupa teks terstruktur, bukan HTML mentah.

Pemeriksaan browser: set `SITE_URL` ke server yang berjalan, lalu jalankan `Get-Content scripts/browser-articles.py -Raw | browser-harness`. Tes memeriksa daftar/detail pada 390, 768, dan 1440px, navigasi artikel, menu mobile, fokus keyboard, serta reduced motion. Screenshot disimpan di folder sementara `temuweb-article-qa`.

## Layanan & Harga

`/layanan` menampilkan tujuh kartu kategori visual, paket bertingkat, panel harga awal, perbandingan fitur, dan CTA konsultasi. Kategori menjadi carousel horizontal pada layar kecil; pilihan URL dan Back/Forward tetap sinkron. Kelola seluruh penawaran baru di `src/data/services.ts`; harga, perbandingan, serta pesan WhatsApp memakai sumber data yang sama. Paket ringkas beranda tetap terpisah di `src/data/site.ts`.

Pilihan kategori dapat dibagikan, misalnya `/layanan?kategori=ecommerce`. Filter dan pricing tersinkron tanpa reload; Back/Forward memulihkan pilihan. Kategori tidak valid menampilkan semua layanan dan paket Landing Page. Domain/hosting tidak termasuk penawaran baru kecuali tertulis dalam proposal; nomor WhatsApp masih demo dan perlu diganti sebelum menerima lead.

`npm run smoke` mencakup halaman layanan. Tes khusus: `node scripts/services-smoke.mjs`. Dengan `SITE_URL` mengarah ke server berjalan, jalankan `Get-Content scripts/browser-services-design.py -Raw | browser-harness` untuk pemeriksaan lima ukuran layar, kategori, carousel, pricing, URL/history, perbandingan, keyboard, dan reduced motion. Screenshot tersimpan di folder sementara `temuweb-services-design-qa`.

## Kontak

`/kontak` menampilkan alamat, peta area Surabaya (bukan titik kantor), dan form nama/pesan. Kontak memakai `src/data/site.ts`. Form hanya menyiapkan template lalu mengalihkan ke WhatsApp; pengguna tetap harus menekan Kirim di WhatsApp. Nomor saat ini masih demo, bukan kanal penerimaan pesan. Tidak ada penyimpanan data atau backend form.

Pemeriksaan browser: set `SITE_URL`, lalu jalankan `Get-Content scripts/browser-contact.py -Raw | browser-harness`. Tes memeriksa lima ukuran layar, validasi, keyboard, navigasi mobile, dan isi URL WhatsApp tanpa membuka WhatsApp. Screenshot tersimpan di folder sementara `temuweb-contact-qa`.

## Visual system

The visual system pairs editorial typography and spacious layouts with TemuWeb blue, a restrained orange signature, and neutral surfaces. Manrope provides one consistent grotesk family. Motion is restrained and respects reduced-motion preferences.

## Before launch

Replace fictional client/project names and unverified trust claims with approved references. Set real social profile links and contact details in `src/data/site.ts`. Review the draft Privacy Policy and Terms. Confirm ownership of `temuweb.id`, used as the canonical origin.
