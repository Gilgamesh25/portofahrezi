import type { Metadata } from "next";
import { ProjectsPageClient } from "@/app/projects/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projek",
  description: "Projek yang pernah saya buat.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
