"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SideProject } from "@/types";
import { ImageGallery } from "@/components/portfolio/ImageGallery";

interface SideProjectDetailViewProps {
  project: SideProject;
}

export function SideProjectDetailView({ project }: SideProjectDetailViewProps) {
  return (
    <article>
      <div className="relative aspect-[21/9] max-h-[420px] w-full overflow-hidden rounded-2xl bg-primary/5">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="mt-8 md:mt-10">
        <Link
          href="/projects"
          className="text-sm font-medium text-secondary hover:text-primary inline-flex items-center gap-1"
        >
          ← Balik ke daftar projek
        </Link>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-secondary">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-secondary leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>

        {project.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-card hover:bg-primary-light transition-colors"
              >
                Lihat Demo
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                GitHub
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-8">
          <DetailBlock
            title="Tools"
            content={
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            }
          />
          <DetailBlock title="Masalahnya" content={project.challenge} />
          <DetailBlock title="Yang saya lakukan" content={project.solution} />
        </section>

        <aside className="rounded-2xl bg-white border border-primary/10 p-6 shadow-card h-fit">
          <h2 className="text-lg font-bold text-primary mb-4">Summary</h2>
          <ul className="space-y-4">
            {project.metrics.map((metric) => (
              <li key={metric.label} className="border-b border-primary/5 pb-4 last:border-0 last:pb-0">
                <p className="text-xs uppercase tracking-wide text-secondary">
                  {metric.label}
                </p>
                <p className="text-xl font-bold text-primary mt-1">{metric.value}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {project.images.length > 1 && (
        <section className="mt-14 md:mt-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-6"
          >
            Tangkapan layar
          </motion.h2>
          <ImageGallery images={project.images} title={project.title} />
        </section>
      )}
    </article>
  );
}

function DetailBlock({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-lg font-bold text-primary mb-3">{title}</h2>
      {typeof content === "string" ? (
        <p className="text-secondary leading-relaxed">{content}</p>
      ) : (
        content
      )}
    </motion.section>
  );
}
