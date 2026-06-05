import {
  certifications,
  filterProjectsByCategory,
  filterSideProjectsByCategory,
  getProjectById,
  getSideProjectById,
  projects,
  sideProjects,
} from "@/data/mockData";
import type { ProjectCategoryFilter, SideProjectCategoryFilter } from "@/types";

/**
 * Lapisan akses data terpisah — saat ini membaca mockData.
 * Ganti implementasi dengan fetch ke /api/* atau headless CMS tanpa mengubah UI.
 */
export const dataService = {
  getAllProjects: () => projects,
  getProjectById: (id: string) => getProjectById(id),
  getProjectsByCategory: (category: ProjectCategoryFilter) =>
    filterProjectsByCategory(category),
  getAllCertifications: () => certifications,
  getAllSideProjects: () => sideProjects,
  getSideProjectById: (id: string) => getSideProjectById(id),
  getSideProjectsByCategory: (category: SideProjectCategoryFilter) =>
    filterSideProjectsByCategory(category),
};
