import { siteProfile } from "@/data/mockData";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    jobTitle: siteProfile.title,
    email: siteProfile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressCountry: "ID",
    },
    url: "https://fahrezi-portfolio.vercel.app",
    sameAs: [siteProfile.linkedin, siteProfile.instagram],
    knowsAbout: [
      "Pengembangan web",
      "Konten digital",
      "Visualisasi data",
      "Dokumentasi acara",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Muhammadiyah Sidoarjo",
    },
  };
}
