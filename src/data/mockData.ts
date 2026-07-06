import type {
  Certification,
  Education,
  Experience,
  Project,
  SideProject,
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
      "Looker Studio",
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
      "Google Stitch",
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
      "Kreatif dan Inovatif",
      "AI Prompting",
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
  },
  
  {
    id: "cert-CC",
    title: "Video Content Creator",
    issuer: "Digitalent",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1O6zfr-nwoykOK5urSJT8lkjOB--ZfYED/view?usp=sharing",
  },
  
  {
    id: "cert-kom",
    title: "Manajemen Perkantoran",
    issuer: "Kelas.Work",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1h2gINoqBmTzoFTuYdEEFvn48Fhm9cvN5/view?usp=sharing",
  },

  {
    id: "cert-supply",
    title: "Management Supply Chain untuk Perusahaan Manufaktur",
    issuer: "Kelas.Work",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1RbPTJOzH3DfqwIszcpchxZ-tlLli-i6K/view?usp=sharing",
  },

  {
    id: "cert-AI",
    title: "LLM-Based Tools and Gemini API Integration for Data Scientists",
    issuer: "HACKTIV8",
    year: 2026,
    credentialUrl:
      "https://drive.google.com/file/d/1axiv2SXndslHuTVW-hfhJVnvFRYy2USG/view?usp=sharing",
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

// ── Side projects ──────────────────────────────────────────

export const sideProjectCategories = [
  "Semua",
  "Aplikasi Web",
  "Aplikasi Mobile",
  "Data & Analitik",
  "Lainnya",
] as const;

const sp = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&fm=webp`;

export const sideProjects: SideProject[] = [
  {
    id: "sp-web1",
    title: "Company Profile Trikayarasa Jayafood",
    category: "Aplikasi Web",
    shortDescription:
      "Website Company Profile",
    thumbnail: "/images/projects/trikaya.png",
    images: ["/images/projects/trikaya.png"],
    tools: ["Laravel10", "HTML", "Blade", "Tailwind CSS"],
    challenge:
      "Website Company Profile.",
    solution:
      "Website Company Profile.",
    metrics: [
      { label: "Stack", value: "Laravel10 + Tailwind CSS" },
      { label: "Animasi", value: "Framer Motion" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2024,
    links: {
      github: "https://github.com/Gilgamesh25/New-Website-Company",
      demo: "https://www.trikayarasajayafood.com/",
    },
    featured: true,
  },
  {
    id: "sp-data1",
    title: "House Price Prediction using Linear Regression",
    category: "Data & Analitik",
    shortDescription:
      "menerapkan algoritma regresi linear untuk membangun model pembuat keputusan berdasarkan dimensi properti.",
    thumbnail: "/images/projects/House Price Prediction using Linear Regression.jpg",
    images: ["/images/projects/House Price Prediction using Linear Regression.jpg"],
    tools: ["Python", "Colab", "Pandas", "Numpy"],
    challenge:
      "House Price Prediction using Linear Regression",
    solution:
      "House Price Prediction using Linear Regression.",
    metrics: [
      { label: "Stack", value: "Python, Jyupiter Notebook" },
      { label: "Framework", value: "Pandas, Numpy" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2026,
    links: {
      github: "https://github.com/Gilgamesh25/model-prediksi-harga-dengan-Machine-Learning-Linear_Regression-.",
      demo: "https://colab.research.google.com/drive/1L7e0N9aYeQmrltd13BsveapaTBRsX1c7?usp=sharing",
    },
    featured: true,
  },
  {
    id: "sp-data2",
    title: "Analisis Pergeseran Emosi Lirik Lagu Anak-Anak Antar Generasi",
    category: "Data & Analitik",
    shortDescription:
      "proyek Analisis Data & Natural Language Processing (NLP) Ringan yang berfokus pada studi budaya dan linguistik. Proyek ini bertujuan untuk mendeteksi secara otomatis apakah ada pergeseran emosi (sentimen) pada lirik lagu yang dikonsumsi anak-anak zaman dulu (era 80/90-an) dibandingkan dengan era sekarang (era internet/media sosial).",
    thumbnail: "/images/projects/House Price Prediction using Linear Regression.jpg",
    images: ["/images/projects/House Price Prediction using Linear Regression.jpg"],
    tools: ["Python", "Colab", "Pandas", "Numpy"],
    challenge:
      "Tantangan utama proyek ini adalah adanya bias data akibat perbedaan panjang lirik antara lagu pendek era dulu dan lagu modern yang repetitif, serta batasan bahasa (bilingual) pada database API gratis Lyrics.ovh yang rawan memicu eror jika teks tidak standar.",
    solution:
      "Solusi yang diterapkan adalah membangun pipeline text preprocessing untuk menstandardisasi teks lirik, merancang kamus emosi campuran (Indonesia-Inggris), serta menggunakan metode Normalisasi Skor (Skor per 100 Kata) agar perbandingan tingkat keceriaan antar-era tetap adil, akurat, dan tidak bias secara statistik.",
    metrics: [
      { label: "Stack", value: "Python, Jyupiter Notebook" },
      { label: "Framework", value: "Pandas, Numpy" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2026,
    links: {
      github: "https://github.com/Gilgamesh25/Analisis_Pergeseran_Emosi_Lirik_Lagu_Anak_Anak_Antar_Generasi.git",
      demo: "https://colab.research.google.com/drive/1bUOw24Wq4T9iTGongEo1PS2DepMWP8C8?usp=sharing",
    },
    featured: true,
  },
  {
    id: "sp-web2",
    title: "Money Tracker Sederhana",
    category: "Aplikasi Web",
    shortDescription:
      "Aplikasi pencatat keuangan berbasis web yang dirancang secara minimalis untuk membantu pengguna memantau pemasukan dan pengeluaran harian dengan mudah dan efisien.",
    thumbnail: "/images/projects/money.png",
    images: ["/images/projects/money.png"],
    tools: ["React.Js", "JavaScript", "Vite", "TailwindCSS"],
    challenge:
      "Tantangan utama dalam mengembangkan aplikasi pencatatan keuangan sederhana adalah menjaga keseimbangan antara fungsionalitas dan kemudahan pengguna (user experience). Banyak pengguna malas mencatat keuangan jika alur penginputan data terlalu rumit atau membutuhkan banyak langkah, sementara di sisi lain, aplikasi tetap harus mampu menyajikan visualisasi data aliran kas (pemasukan dan pengeluaran) secara akurat dan mudah dipahami dalam sekali lihat.",
    solution:
      "Solusi yang diterapkan adalah dengan merancang antarmuka (UI/UX) yang minimalis dan responsif, serta memangkas proses input menjadi satu formulir ringkas yang langsung memperbarui dasbor saldo secara real-time. Selain itu, integrasi diagram lingkaran (pie chart) atau grafik sederhana ditambahkan untuk mengelompokkan pengeluaran berdasarkan kategori secara otomatis, sehingga pengguna mendapatkan wawasan finansial yang jelas tanpa perlu melalui navigasi yang kompleks.",
    metrics: [
      { label: "Stack", value: "HTML, CSS, JavaScript" },
      { label: "Framework", value: "React.Js, TailwindCSS" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2026,
    links: {
      github: "https://github.com/Gilgamesh25/money-tracker-sederhana",
    },
    featured: true,
  },
  {
    id: "sp-web3",
    title: "movie explorer",
    category: "Aplikasi Web",
    shortDescription:
      "aplikasi berbasis web modern yang dirancang untuk membantu pengguna menjelajahi dunia sinematik dengan mudah. Memanfaatkan integrasi pihak ketiga (TheMovieDB), aplikasi ini memungkinkan pengguna untuk mencari film berdasarkan judul, menelusuri daftar film yang sedang populer (trending), serta melihat informasi detail seperti sinopsis, rating, tanggal rilis, hingga poster film melalui antarmuka yang bersih dan responsif.",
    thumbnail: "/images/projects/movie.png",
    images: ["/images/projects/movie.png"],
    tools: ["React.Js", "JavaScript", "Vite", "TailwindCSS"],
    challenge:
      "Tantangan utama dalam membangun aplikasi movie explorer adalah mengelola efisiensi pemanggilan data API eksternal dan menjaga performa pemuatan gambar (poster/banner) beresolusi tinggi. Proses pencarian yang dinamis dan fitur pengguliran halaman (infinite scroll atau pagination) berpotensi memicu jumlah permintaan data (request) yang berlebihan ke server API, yang tidak hanya memperlambat respons aplikasi pada koneksi internet lambat tetapi juga berisiko melampaui batas kuota API (rate limiting).",
    solution:
      "Solusi yang diterapkan adalah mengimplementasikan teknik pencarian debounce pada kolom input guna membatasi frekuensi pemanggilan API hingga pengguna selesai mengetik, serta menggunakan sistem caching lokal untuk menyimpan data film yang sering diakses. Selain itu, performa visual dioptimalkan melalui metode lazy loading untuk gambar poster film, sehingga aset visual berukuran besar hanya akan dimuat ketika masuk ke dalam area pandang pengguna (viewport), menjadikan navigasi aplikasi tetap lancar dan hemat kuota data.",
    metrics: [
      { label: "Stack", value: "HTML, CSS, JavaScript" },
      { label: "Framework", value: "React.Js, TailwindCSS" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2026,
    links: {
      github: "https://github.com/Gilgamesh25/movie-explorer",
    },
    featured: true,
  },
  {
    id: "sp-web4",
    title: "CookWhat'sLeft",
    category: "Aplikasi Web",
    shortDescription:
      "Aplikasi pencarian resep masakan berbasis bahan yang kamu miliki. Cukup pilih bahan yang ada di kulkas, Apps akan menampilkan rekomendasi resep yang bisa kamu masak!.",
    thumbnail: "/images/projects/cook.png",
    images: ["/images/projects/cook.png"],
    tools: ["React.Js", "JavaScript", "Vite", "TailwindCSS"],
    challenge:
      "Pencarian hanya bisa dari data lokal, tidak bisa mencari resep online.",
    solution:
      "Integrasi Spoonacular API untuk mendapat ribuan resep dari internet.",
    metrics: [
      { label: "Stack", value: "HTML, CSS, JavaScript" },
      { label: "Framework", value: "React.Js, TailwindCSS" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2026,
    links: {
      github: "https://github.com/Gilgamesh25/cook-whats-left",
      demo: "https://gilgamesh25.github.io/cook-whats-left/",
    },
    featured: true,
  },
    {
    id: "sp-Ui1",
    title: "GUD App Danamon",
    category: "Lainnya",
    shortDescription:
      "GUD (Great Union of Danamon) adalah konsep Financial Super App yang dirancang untuk mengintegrasikan kebutuhan finansial pribadi dan bisnis dalam satu platform.",
    thumbnail: "/images/projects/GUD.jpg",
    images: ["/images/projects/GUD.jpg"],
    tools: ["Figma", "Google Stitch"],
    challenge:
      "Menyederhanakan aplikasi dengan banyak fitur dalam satu platform tanpa mengorbankan kemudahan penggunaan. GUD mengintegrasikan layanan perbankan, pengelolaan keuangan, pembiayaan, UMKM, dan merchant sehingga berpotensi membuat pengguna merasa kewalahan jika semua fitur ditampilkan sekaligus.",
    solution:
      "Saya mengatasi tantangan tersebut dengan menerapkan pendekatan feature prioritization dan progressive disclosure. Fitur utama seperti Financial Dashboard, Financial Insights, dan Pockets dijadikan fokus utama pada halaman awal, sedangkan fitur pendukung seperti GUD Biz, Adira, dan Merchant ditampilkan ketika dibutuhkan. Selain itu, saya menyusun information architecture dan user flow yang jelas agar navigasi tetap sederhana, intuitif, dan mudah dipahami meskipun aplikasi memiliki banyak fitur",
    metrics: [
      { label: "Stack", value: "Figma, Google Stitch," },
      { label: "Framework", value: "" },
      { label: "Status", value: "Aktif" },
    ],
    year: 2026,
    links: {
      github: "",
      demo: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2FgPdnQTpJ&urlhash=zd-t&mt=DVzNqRYMGkpyOsIm21RexhzeD-RPvXBr-wbVaiVSOtZRlPL7WdJbpgAc8EZvOfiXOtlDgJF09LECqcKBFMAE47fvRr3P&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BqxtJI1JXTZyC7r6WCSMdQg%3D%3D",
    },
    featured: true,
  },
];

export function getSideProjectById(id: string): SideProject | undefined {
  return sideProjects.find((p) => p.id === id);
}

export function getFeaturedSideProjects(): SideProject[] {
  return sideProjects.filter((p) => p.featured);
}

export function filterSideProjectsByCategory(
  category: (typeof sideProjectCategories)[number]
): SideProject[] {
  if (category === "Semua") return sideProjects;
  return sideProjects.filter((p) => p.category === category);
}
