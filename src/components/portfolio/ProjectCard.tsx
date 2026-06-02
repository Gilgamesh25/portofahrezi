"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const fit = project.imageFit ?? "cover";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/portfolio/${project.id}`} className="group block h-full">
        <div className="h-full rounded-2xl overflow-hidden bg-white border border-primary/5 shadow-card hover:shadow-glass transition-shadow">
          <div
            className={`relative aspect-[16/10] overflow-hidden ${
              fit === "contain" ? "bg-white" : ""
            }`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className={`${fit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
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
            {project.contentCatalog && (
              <p className="mt-3 text-xs font-semibold text-primary">
                Ada katalog konten →
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
