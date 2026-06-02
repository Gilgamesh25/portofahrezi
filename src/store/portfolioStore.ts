import { create } from "zustand";
import { filterProjectsByCategory } from "@/data/mockData";
import type { Project, ProjectCategoryFilter } from "@/types";

interface PortfolioState {
  activeCategory: ProjectCategoryFilter;
  filteredProjects: Project[];
  setCategory: (category: ProjectCategoryFilter) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeCategory: "Semua",
  filteredProjects: filterProjectsByCategory("Semua"),
  setCategory: (category) =>
    set({
      activeCategory: category,
      filteredProjects: filterProjectsByCategory(category),
    }),
}));
