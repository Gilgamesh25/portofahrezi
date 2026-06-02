# Portofolio Fahrezi Auliasyafa

Situs web portofolio pribadi interaktif berbasis **Next.js 16 (App Router)**, **Tailwind CSS**, dan **Framer Motion** dengan arsitektur terpisah (data layer, API routes, UI components).

## Lokasi

`C:\laragon\www\fahrezi-portfolio`

## Menjalankan

```bash
cd C:\laragon\www\fahrezi-portfolio
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk Laragon + Apache, jalankan `npm run build` lalu `npm run start` pada port 3000, atau konfigurasikan reverse proxy ke proses Node.

## Struktur

- `src/app` — Halaman App Router (Beranda, Portofolio, About, Kontak)
- `src/components` — UI terpisah per domain
- `src/data/mockData.ts` — Sumber data tiruan (siap diganti CMS/Supabase)
- `src/store` — Zustand untuk filter portofolio asinkron
- `src/app/api` — REST endpoints (`/api/projects`, `/api/certifications`, `/api/contact`)

## CV

CV aktif: `public/cv/CV_FAHREZI AULIASYAFA (1).pdf` (diatur di `src/data/mockData.ts`).

## Integrasi Formulir

Logika mock ada di `src/lib/contactService.ts`. Untuk produksi, hubungkan ke [Web3Forms](https://web3forms.com) atau EmailJS di endpoint `/api/contact`.
