# PT Bota Makmur Perkasa – Corporate Website

Struktur dan panduan untuk situs statis multi-halaman (HTML/CSS/JS) yang merefleksikan identitas perusahaan logistik energi dalam ekosistem Pertamina melalui PT Elnusa.

## Struktur File

```
Web BMP/
├─ index.html                 # Home
├─ about.html                 # About Us (profil, izin 12 Feb 2024–12 Feb 2027)
├─ services.html              # Layanan utama pengangkutan migas
├─ projects.html              # Projects/Clients (placeholder Trust & Safety)
├─ sustainability.html        # Sustainability & Compliance
├─ news.html                  # Berita & tautan grup (Elnusa, Pertamina)
├─ contact.html               # Alamat & form email
├─ privacy.html               # Kebijakan Privasi
├─ assets/
│  ├─ css/styles.css          # Gaya bersama (Inter, warna Pertamina/Elnusa)
│  ├─ js/main.js              # Sticky nav & handler form
│  └─ img/
│     ├─ logo-bmp.svg
│     ├─ logo-pertamina.svg   # Placeholder bergaya
│     └─ logo-elnusa.svg      # Placeholder bergaya
```

## Rekomendasi Styling

- Skema warna utama:
  - Merah Pertamina: `#D8242A`
  - Biru Elnusa: `#0072BC`
  - Netral teks: `#1F2937`; latar terang `#F8FAFC`
- Tipografi: Google Fonts `Inter` (400/500/600/700)
- Komponen: header sticky, tombol `btn-primary` (merah), `btn-outline`, kartu, grid responsif

## SEO Dasar

- Setiap halaman memiliki `<title>` dan `<meta name="description">` unik.
- Contoh judul: "PT Bota Makmur Perkasa – Pengangkutan Minyak & Gas, Anak Elnusa".
- Sertakan Open Graph dasar: `og:title`, `og:description`, `og:type`, `og:locale`.

## Konten Placeholder

- About: profil singkat dan informasi izin usaha 12 Feb 2024–12 Feb 2027 (sesuai referensi).
- Services: tiga kartu layanan (minyak, gas, manajemen logistik) + value proposition.
- Projects: placeholder "Trust & Safety", "Infrastruktur & Keamanan", "Kolaborasi Ekosistem".
- Sustainability: izin, HSSE, integritas & tata kelola.
- News: daftar berita placeholder + tautan ke portal `https://www.elnusa.co.id` dan `https://www.pertamina.com`.
- Contact: alamat/kontak + form email (client-side alert, tanpa backend).

## Pengembangan & Deploy

- Sifat situs: statis, dapat di-host di GitHub Pages, Netlify, Vercel, atau server web biasa.
- Tidak memerlukan build tool. Cukup buka `Web BMP/index.html` di browser.
- Untuk formulir produksi, integrasikan layanan email/API (misal Formspree) dan tambahkan kebijakan privasi yang sesuai.

## Kustomisasi

- Ganti SVG placeholder logo di `assets/img/` dengan logo resmi jika tersedia.
- Sesuaikan alamat & kontak di `contact.html`.
- Perbarui konten berita dan proyek saat informasi tersedia.
