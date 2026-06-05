import { create } from "zustand";
import { filterSideProjectsByCategory } from "@/data/mockData";
import type { SideProject, SideProjectCategoryFilter } from "@/types";

interface SideProjectState {
  activeCategory: SideProjectCategoryFilter;
  filteredProjects: SideProject[];
  setCategory: (category: SideProjectCategoryFilter) => void;
}

export const useSideProjectStore = create<SideProjectState>((set) => ({
  activeCategory: "Semua",
  filteredProjects: filterSideProjectsByCategory("Semua"),
  setCategory: (category) =>
    set({
      activeCategory: category,
      filteredProjects: filterSideProjectsByCategory(category),
    }),
}));
