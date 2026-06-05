import type {
  Certification,
  Education,
  Experience,
  Project,
  SiteProfile,
  SkillGroup,
} from "@/types";

export const siteProfile: SiteProfile = {
  name: "Fahrezi Auliasyafa",
  title: "IT & konten kreatif",
  elevatorPitch:
    "Lulusan Informatika UMSIDA (IPK 3,89). Sehari hari saya ngoding web sederhana, bikin materi visual, dan ikut dokumentasi acara. Kalau butuh orang yang bisa paham kebutuhan tim sekaligus beresin tampilan dan teknisnya, saya biasanya di situ.",
  email: "fahreziaulia19@gmail.com",
  whatsapp: "+6285748947956",
  linkedin: "https://www.linkedin.com/in/fahrezi-auliasyafa",
  instagram: "https://www.instagram.com/aulxsya_",
  cvUrl: encodeURI("/cv/CV_FAHREZI AULIASYAFA (1).pdf"),
  cvDownloadName: "CV_Fahrezi_Auliasyafa.pdf",
  location: "Sidoarjo, Indonesia",
  metaDescription:
    "Portofolio Fahrezi Auliasyafa, web, dokumentasi acara, dan konten kreatif. Based in Surabaya.",
  profilePhoto: "/images/profil.png",
};

export const skillGroups: SkillGroup[] = [
  {
    id: "software",
    title: "Perangkat Lunak",
    description: "Untuk desain, video ringkas, dan dokumen kantoran",
    variant: "software",
    items: [
      "Microsoft Office",
      "Canva",
      "Figma",
      "CapCut",
      "Adobe Photoshop",
      "Google Sheets",
    ],
  },
  {
    id: "technology",
    title: "Teknologi",
    description: "Yang saya pakai buat web dan olah data",
    variant: "technology",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Python",
      "Looker Studio",
    ],
  },
  {
    id: "soft",
    title: "Soft Skill",
    description: "Yang kepakai pas kerja bareng orang banyak",
    variant: "soft",
    items: [
      "Komunikasi Presentasi",
      "Manajemen Proyek",
      "Kolaborasi Tim",
      "Analisis Kebutuhan",
      "Dokumentasi Sistematis",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "blsdm-komdigi",
    organization: "BLSDM Komdigi Surabaya",
    role: "Staf Media & Dokumentasi / Pelatihan",
    period: "Nov 2025 – Mei 2026",
    startDate: "2025-11-01",
    endDate: "2026-05-31",
    highlights: [
      { label: "Publikasi", value: "20+ materi siap tayang" },
      { label: "Pelatihan", value: "15+ program, 400+ peserta (survey rata-rata 4,5/5)" },
      { label: "Dokumentasi", value: "40+ acara yabg didokumentasikan & diedit" },
    ],
  },
  {
    id: "klg",
    organization: "Kampung Lali Gadget",
    role: "Tim Media & Literasi Digital",
    period: "Okt 2024 – Okt 2025",
    startDate: "2024-10-01",
    endDate: "2025-10-31",
    highlights: [
      { label: "Dokumentasi", value: "20+ kegiatan literasi digital" },
      { label: "Konten", value: "50+ gambar & video untuk medsos" },
    ],
  },
  {
    id: "umsida-klg",
    organization: "UMSIDA × Kampung Lali Gadget",
    role: "Pengembang Web & Dokumentasi Proyek",
    period: "Sep 2023 – Jan 2024",
    startDate: "2023-09-01",
    endDate: "2024-01-31",
    highlights: [
      {
        label: "Proyek",
        value: "Website kurikulum literasi digital (kolaborasi kampus & KLG)",
      },
    ],
  },
  {
    id: "bpsdmp",
    organization: "BPSDMP Kominfo Surabaya",
    role: "Pengembang & Admin Web",
    period: "Jul 2023 – Okt 2023",
    startDate: "2023-07-01",
    endDate: "2023-10-31",
    highlights: [
      { label: "Teknologi", value: "HTML, BootstrapCSS, JavaScript, PHP" },
      { label: "Kerjaan", value: "Bikin halaman & urus isi portal pelatihan" },
    ],
  },
];

export const education: Education[] = [
  {
    id: "umsida-s1",
    institution: "Universitas Muhammadiyah Sidoarjo (UMSIDA)",
    degree: "Sarjana Informatika (S1)",
    period: "2021 – 2025",
    gpa: "3,89",
    description:
      "Belajar bikin aplikasi/web, visualisasi data, plus terbiasa presentasi dan kerja kelompok.",
    diplomaUrl: "https://drive.google.com/file/d/1nEsHRnf5Z9LRHPS53RKGzpUOOX3LPvFK/view?usp=drive_link",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-okm",
    title: "Operasi Komputer Madya",
    issuer: "Digitalent",
    year: 2024,
    credentialUrl:
      "https://drive.google.com/file/d/1SvMhwcEYEO4axpeYYkIOBRTM12kZLBh9/view?usp=drive_link",
  },
  {
    id: "cert-jgd",
    title: "Junior Graphic Designer",
    issuer: "Digitalent",
    year: 2024,
    credentialUrl:
      "https://drive.google.com/file/d/1cIGR6hh2rQXktqgTRiYdmDHOsTtpVqOx/view?usp=drive_link",
  },
  {
    id: "cert-jna",
    title: "Junior Network Administrator",
    issuer: "BNSP",
    year: 2025,
    credentialUrl:
      "https://drive.google.com/file/d/1n_qpgwqUtFy3-9ynnFpkDcNpigWh9LQI/view?usp=drive_link",
  },
  {
    id: "cert-toefl",
    title: "TOEFL ITP Score: 630",
    issuer: "Global Operation Indonesia",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1lG-VT7W4-UOuEbyOQSens7I9hUHIl7P6/view?usp=drive_link",
  },
  {
    id: "cert-spbe",
    title: "Sertifikasi SPBE Kominfo",
    issuer: "Digitalent",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1W1goYFCah2Y0pgR8B8Wlcqw1eyDPd3eu/view?usp=sharing",
  },
  {
    id: "cert-revou",
    title: "Data Analytics",
    issuer: "RevoU",
    year: 2025,
    credentialUrl:
      "https://drive.google.com/file/d/1P3ZgOqGBsmOr6KhljzNAhS6vUMkJdWBg/view?usp=drive_link",
  },
  {
    id: "cert-pm",
    title: "Project Management",
    issuer: "Dibimbing.id",
    year: 2025,
    credentialUrl:
      "https://drive.google.com/file/d/1xeMisnnz6oFPmRAZHIEtVyG32r0dfC9I/view?usp=drive_link",
  },
  {
    id: "cert-ads",
    title: "Associate Data Scientist",
    issuer: "Digitalent",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1FdSKNb-SCZPBS3d0Dia0ejvpllfl5ALC/view?usp=drive_link",
  },
  {
    id: "cert-digma",
    title: "Digital Affiliate Marketing",
    issuer: "BBPVP SERANG",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1DpcKWRETmq2a2PTZSuZQNyqM1volXmkI/view?usp=sharing",
  },
  {
    id: "cert-Pemdi",
    title: "Pemasaran Digital Dengan Kecerdasan Buatan untuk Wirausaha",
    issuer: "Digitalent",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1OJkQEasnoR8ePf-pqaswOcJVNuRGa9MP/view?usp=sharing",
  },
  {
    id: "cert-IBM",
    title: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1n5K_Rci09gM3wpLpfCnNfAvBY_MM5r3J/view?usp=sharing",
  },
  {
    id: "cert-bpvp",
    title: "Komunikasi Profesional Untuk Lolos Interview Kerja",
    issuer: "BPVP Bandung Barat",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/19CGxw7aNAGJRqL5Mlj4wg5aR4alfH6Bf/view?usp=sharing",
  }
  
  {
    id: "cert-CC",
    title: "Video Content Creator",
    issuer: "Digitalent",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1O6zfr-nwoykOK5urSJT8lkjOB--ZfYED/view?usp=sharing",
  },
];

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&fm=webp`;

/** Logo resmi Komdigi (versi penuh, 2024) — sumber: komdigi.go.id / Wikimedia Commons */
const komdigiLogo = "/images/komdigi-logo.svg";

/** Logo lama Kominfo (keong) — sumber: Wikimedia Commons */
const kominfoLogoLama = "/images/kominfo-logo-lama.svg";

/** Foto kegiatan Kampung Lali Gadget — dokumentasi & Instagram @kampunglaligadget */
const klgPhotos = {
  viva: "/images/projects/klg-viva.jpg",
  goodnews: "/images/projects/klg-goodnews.jpg",
  kompasiana: "/images/projects/klg-kompasiana.jpg",
  igPost: "/images/projects/klg-ig-1.jpg",
} as const;

export const projects: Project[] = [
  {
    id: "kurikulum-digital-umsida",
    title: "Portal Digitalisasi Kurikulum Literasi",
    category: "Pengembangan Web",
    shortDescription:
      "Website buat menampung modul kurikulum literasi digital, proyek gabungan UMSIDA dan Kampung Lali Gadget.",
    thumbnail: klgPhotos.viva,
    images: [klgPhotos.viva, klgPhotos.goodnews, klgPhotos.kompasiana],
    role: "Pengembang Web & Dokumentasi Proyek",
    tools: ["HTML", "CSS", "JavaScript", "Figma", "Git"],
    challenge:
      "Materinya masih berupa file dan dokumen terpisah—peserta susah cari modul yang tepat.",
    solution:
      "Saya bantu susun struktur halaman, tampilan mobile friendly, dan alur masuk ke tiap modul biar gampang dilacak.",
    metrics: [
      { label: "Modul", value: "12+ unit" },
      { label: "Lama proyek", value: "± 5 bulan" },
      { label: "Bersama", value: "UMSIDA × KLG" },
    ],
    featured: true,
    year: 2024,
  },
  {
    id: "portal-bpsdmp",
    title: "Portal Web BPSDMP Kominfo Surabaya",
    category: "Pengembangan Web",
    shortDescription:
      "Magang ngurus portal info pelatihan Kominfo—coding pakai HTML, CSS, JS, sama PHP.",
    thumbnail: kominfoLogoLama,
    images: [kominfoLogoLama],
    imageFit: "contain",
    role: "Pengembang & Admin Web",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    challenge:
      "Konten pelatihan sering ganti, tapi websitenya harus tetap jalan dan gampang diupdate tim.",
    solution:
      "Panel admin sederhana, tampilan halaman yang seragam, plus cek isian form biar data masuknya rapi.",
    metrics: [
      { label: "Magang", value: "4 bulan" },
      { label: "Halaman", value: "5+ halaman" },
      { label: "Pakai", value: "HTML, CSS, JS, PHP" },
    ],
    featured: true,
    year: 2023,
  },
  {
    id: "blsdm-dokumentasi",
    title: "Dokumentasi & Publikasi BLSDM Komdigi",
    category: "Konten & Dokumentasi",
    shortDescription:
      "Bikin materi publikasi dan motret/edit dokumentasi untuk puluhan acara pelatihan di BLSDM Komdigi Surabaya.",
    thumbnail: komdigiLogo,
    images: [komdigiLogo],
    imageFit: "contain",
    role: "Staf Media & Dokumentasi",
    tools: ["Canva", "CapCut", "Adobe Photoshop", "Figma"],
    challenge:
      "Acaranya padat—kalau tidak ada pola yang sama, hasil foto dan desain bisa berantakan.",
    solution:
      "Template Canva, catatan alur dokumentasi, dan ritme editing biar materi cepat naik ke kanal yang diminta.",
    metrics: [
      { label: "Acara yang didokumentasikan", value: "40+" },
      { label: "Materi publikasi", value: "20+" },
      { label: "Survey peserta", value: "4,5/5" },
    ],
    contentCatalog: {
      label: "Buka katalog dokumentasi & publikasi",
      url: "https://docs.google.com/spreadsheets/d/1JRcgp82befBa77UJLVO7M9AigPv9mrVEhM3vEGGnOds/edit?usp=sharing",
      description:
        "Daftar lengkap materi publikasi dan dokumentasi acara BLSDM Komdigi Surabaya mulai dari judul, tanggal, dan tautan konten. Dibuka di Google Sheets (tab baru).",
    },
    featured: true,
    year: 2026,
  },
  {
    id: "klg-literasi",
    title: "Konten Literasi Digital Kampung Lali Gadget",
    category: "Konten & Dokumentasi",
    shortDescription:
      "Konten medsos dan dokumentasi kegiatan literasi digital bareng tim Kampung Lali Gadget.",
    thumbnail: klgPhotos.igPost,
    images: [klgPhotos.igPost, klgPhotos.viva, klgPhotos.goodnews],
    role: "Tim Media & Literasi Digital",
    tools: ["Canva", "CapCut", "Photoshop", "Instagram"],
    challenge:
      "Pesertanya beragam umur dan materi harus jelas tapi tidak membosankan di feed.",
    solution:
      "Gaya visual yang konsisten, jadwal posting per tema, plus video pendek yang enak ditonton di HP.",
    metrics: [
      { label: "Kegiatan", value: "20+" },
      { label: "Konten visual", value: "50+" },
      { label: "Lama di tim", value: "± 1 tahun" },
    ],
    year: 2025,
  },
  {
    id: "pelatihan-blsdm",
    title: "Manajemen Program Pelatihan BLSDM",
    category: "Strategi & Analisis Acara",
    shortDescription:
      "Bantu urus jadwal pelatihan, rekap peserta, dan cek hasil survey supaya program berikutnya lebih pas.",
    thumbnail: komdigiLogo,
    images: [komdigiLogo],
    imageFit: "contain",
    role: "Koordinator Pelatihan & Evaluasi",
    tools: ["Microsoft Excel", "Google Forms", "Canva", "PowerPoint"],
    challenge:
      "Pesertanya banyak—tanpa rekap yang rapi, sulit tahu bagian mana yang perlu diperbaiki.",
    solution:
      "Form evaluasi yang sama tiap batch, spreadsheet rekap, dan laporan singkat buat atasan tiap selesai program.",
    metrics: [
      { label: "Program", value: "15+" },
      { label: "Peserta", value: "400+" },
      { label: "Rata-rata survey", value: "4,5/5" },
    ],
    year: 2026,
  },
  {
    id: "event-klg-analytics",
    title: "Strategi Acara & Analitik Literasi KLG",
    category: "Strategi & Analisis Acara",
    shortDescription:
      "Rencanakan acara literasi, pantau respons di medsos, lalu catat apa yang perlu diulang atau diubah.",
    thumbnail: klgPhotos.igPost,
    images: [klgPhotos.igPost, klgPhotos.kompasiana, klgPhotos.viva],
    role: "Analis & Strategis Acara",
    tools: ["Excel", "Google Sheets", "Canva", "Meta Insights"],
    challenge:
      "Konten sudah tayang, tapi tim perlu tahu acaranya benar-benar nancep atau cuma ramai sebentar.",
    solution:
      "Checklist kecil tiap acara, format laporan bulanan, dan catatan perbaikan dari feedback peserta.",
    metrics: [
      { label: "Acara dicek", value: "20+" },
      { label: "Laporan", value: "Rutin tiap bulan" },
      { label: "Tempat", value: "Online & offline" },
    ],
    year: 2025,
  },
];

export const projectCategories = [
  "Semua",
  "Pengembangan Web",
  "Konten & Dokumentasi",
  "Strategi & Analisis Acara",
] as const;

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}

export function filterProjectsByCategory(
  category: (typeof projectCategories)[number]
): Project[] {
  if (category === "Semua") return projects;
  return projects.filter((p) => p.category === category);
}
