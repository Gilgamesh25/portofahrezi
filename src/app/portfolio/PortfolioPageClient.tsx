"use client";

import { CategoryFilter } from "@/components/portfolio/CategoryFilter";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioPageClient() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Karya"
          title="Portofolio"
          description="Pilih kategori kalau mau menyaring, nggak perlu pindah halaman."
        />
        <div className="mb-8 md:mb-10">
          <CategoryFilter />
        </div>
        <PortfolioGrid />
      </div>
    </div>
  );
}
