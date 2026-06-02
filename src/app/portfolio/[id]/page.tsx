import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/mockData";
import { ProjectDetailView } from "@/components/portfolio/ProjectDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Proyek tidak ketemu" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <div className="py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <ProjectDetailView project={project} />
      </div>
    </div>
  );
}
