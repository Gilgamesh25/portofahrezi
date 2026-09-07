"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getFeaturedProjects } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useRef, type MouseEvent } from "react";

function ProjectCard({ project, index }: { project: ReturnType<typeof getFeaturedProjects>[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  function handleMouse(e: MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <ScrollReveal variant="fade-up" delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
        className="h-full"
      >
        <Link href={`/portfolio/${project.id}`} className="group block h-full">
          <article className="h-full rounded-xl md:rounded-2xl overflow-hidden bg-surface-card border border-primary/5 shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
            {/* Image area */}
            <div
              className={`relative aspect-[16/10] overflow-hidden ${
                project.imageFit === "contain" ? "bg-white" : ""
              }`}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className={`${
                  project.imageFit === "contain"
                    ? "object-contain p-4 md:p-6"
                    : "object-cover"
                } transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />

              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category badge */}
              <span className="absolute top-2.5 left-2.5 md:top-3 md:left-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold text-primary shadow-sm">
                {project.category}
              </span>

              {/* Year badge */}
              <span className="absolute top-2.5 right-2.5 md:top-3 md:right-3 rounded-full bg-primary/80 backdrop-blur-sm px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs font-medium text-white">
                {project.year}
              </span>

              {/* Hover overlay CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-3 md:translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-white">
                  Lihat detail
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
              <h3 className="text-sm md:text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
                {project.title}
              </h3>
              <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-secondary line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Tools */}
              <div className="mt-2.5 md:mt-3 flex flex-wrap gap-1 md:gap-1.5">
                {project.tools.slice(0, 4).map((tool) => (
                  <span
                    key={tool}
                    className="inline-block rounded-md bg-surface-muted px-1.5 py-0.5 md:px-2 text-[10px] md:text-xs font-medium text-secondary/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Read more */}
              <span className="mt-3 md:mt-4 inline-flex items-center text-xs md:text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                Baca selengkapnya
                <svg className="ml-1 w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </article>
        </Link>
      </motion.div>
    </ScrollReveal>
  );
}

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #18181B 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-content px-5 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            eyebrow="Beberapa yang saya banggakan"
            title="Proyek favorit"
            description="Tiga kerjaan yang cukup mewakili: web, dokumentasi, sama urusan acara."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <div className="mt-10 md:mt-12 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-primary/15 px-6 py-3 md:px-8 md:py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Lihat semua proyek
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
