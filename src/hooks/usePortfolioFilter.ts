"use client";

import { usePortfolioStore } from "@/store/portfolioStore";
import type { ProjectCategoryFilter } from "@/types";

/**
 * Hook tipis di atas Zustand untuk filter portofolio asinkron di sisi klien.
 */
export function usePortfolioFilter() {
  const activeCategory = usePortfolioStore((s) => s.activeCategory);
  const filteredProjects = usePortfolioStore((s) => s.filteredProjects);
  const setCategory = usePortfolioStore((s) => s.setCategory);

  return {
    activeCategory,
    filteredProjects,
    setCategory: (category: ProjectCategoryFilter) => setCategory(category),
  };
}
