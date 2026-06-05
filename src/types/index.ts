export type ProjectCategory =
  | "Pengembangan Web"
  | "Konten & Dokumentasi"
  | "Strategi & Analisis Acara";

export type ProjectCategoryFilter = ProjectCategory | "Semua";

export interface ProjectMetrics {
  label: string;
  value: string;
}

/** Tautan eksternal ke katalog konten (mis. Google Sheets) */
export interface ProjectContentCatalog {
  label: string;
  url: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  role: string;
  tools: string[];
  challenge: string;
  solution: string;
  metrics: ProjectMetrics[];
  featured?: boolean;
  year: number;
  contentCatalog?: ProjectContentCatalog;
  /** Pakai contain untuk logo atau gambar yang perlu tampil utuh */
  imageFit?: "cover" | "contain";
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  highlights: { label: string; value: string }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
  diplomaUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number;
  credentialUrl: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
  variant: "software" | "technology" | "soft";
}

export type SideProjectCategory =
  | "Aplikasi Web"
  | "Aplikasi Mobile"
  | "Data & Analitik"
  | "Lainnya";

export type SideProjectCategoryFilter = SideProjectCategory | "Semua";

export interface SideProject {
  id: string;
  title: string;
  category: SideProjectCategory;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  tools: string[];
  challenge: string;
  solution: string;
  metrics: ProjectMetrics[];
  year: number;
  links?: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface SiteProfile {
  name: string;
  title: string;
  elevatorPitch: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  instagram: string;
  cvUrl: string;
  cvDownloadName: string;
  location: string;
  metaDescription: string;
  profilePhoto?: string;
}
