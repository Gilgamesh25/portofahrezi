"use client";

import { AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/store/portfolioStore";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function PortfolioGrid() {
  const { filteredProjects } = usePortfolioStore();

  return (
    <AnimatePresence mode="popLayout">
      {filteredProjects.length === 0 ? (
        <p className="col-span-full py-12 text-center text-secondary">
          Belum ada proyek di kategori ini—coba filter lain.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
