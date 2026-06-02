"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beberapa yang saya banggakan"
          title="Proyek favorit"
          description="Tiga kerjaan yang cukup mewakili: web, dokumentasi, sama urusan acara."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <Link href={`/portfolio/${project.id}`} className="group block h-full">
                <article className="h-full rounded-2xl overflow-hidden bg-surface border border-primary/5 shadow-card transition-shadow group-hover:shadow-glass">
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
                          ? "object-contain p-4"
                          : "object-cover"
                      } transition-transform duration-500 group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                      Baca selengkapnya
                      <svg
                        className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Lihat semua proyek
          </Link>
        </div>
      </div>
    </section>
  );
}
