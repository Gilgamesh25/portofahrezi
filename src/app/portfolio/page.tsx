import type { Metadata } from "next";
import { PortfolioPageClient } from "@/app/portfolio/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Kumpulan proyek web, dokumentasi, dan kerjaan terkait acara.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
