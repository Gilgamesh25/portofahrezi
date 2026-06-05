"use client";

import { SideProjectCategoryFilter } from "@/components/side-projects/SideProjectCategoryFilter";
import { SideProjectGrid } from "@/components/side-projects/SideProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsPageClient() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projek Sampingan"
          title="Projek"
          description="Beberapa projek yang pernah saya buat seperti, web, data, dan lainnya."
        />
        <div className="mb-8 md:mb-10">
          <SideProjectCategoryFilter />
        </div>
        <SideProjectGrid />
      </div>
    </div>
  );
}
