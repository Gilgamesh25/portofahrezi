"use client";

import { AnimatePresence } from "framer-motion";
import { useSideProjectStore } from "@/store/sideProjectStore";
import { SideProjectCard } from "@/components/side-projects/SideProjectCard";

export function SideProjectGrid() {
  const { filteredProjects } = useSideProjectStore();

  return (
    <AnimatePresence mode="popLayout">
      {filteredProjects.length === 0 ? (
        <p className="col-span-full py-12 text-center text-secondary">
          Belum ada projek di kategori ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <SideProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
