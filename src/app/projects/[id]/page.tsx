import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSideProjectById, sideProjects } from "@/data/mockData";
import { SideProjectDetailView } from "@/components/side-projects/SideProjectDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return sideProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getSideProjectById(id);
  if (!project) return { title: "Projek tidak ketemu" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function SideProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getSideProjectById(id);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    dateCreated: `${project.year}`,
    keywords: project.tools.join(", "),
  };

  return (
    <div className="py-10 md:py-14 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SideProjectDetailView project={project} />
      </div>
    </div>
  );
}
