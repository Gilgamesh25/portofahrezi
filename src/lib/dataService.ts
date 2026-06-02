import {
  certifications,
  filterProjectsByCategory,
  getProjectById,
  projects,
} from "@/data/mockData";
import type { ProjectCategoryFilter } from "@/types";

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
};
