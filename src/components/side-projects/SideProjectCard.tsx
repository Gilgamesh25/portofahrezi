"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SideProject } from "@/types";

interface SideProjectCardProps {
  project: SideProject;
  index?: number;
}

export function SideProjectCard({ project, index = 0 }: SideProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/projects/${project.id}`} className="group block h-full">
        <div className="h-full rounded-2xl overflow-hidden bg-white border border-primary/5 shadow-card hover:shadow-glass transition-shadow">
          <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
              {project.category}
            </span>
            <h3 className="mt-1 font-bold text-primary group-hover:text-primary-light">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-secondary line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/5 text-secondary"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="text-[11px] font-medium text-secondary">
                  +{project.tools.length - 3}
                </span>
              )}
            </div>
            {project.links && (
              <div className="mt-3 flex gap-3 text-xs font-semibold text-primary">
                {project.links.demo && <span>Demo ↗</span>}
                {project.links.github && <span>GitHub ↗</span>}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
