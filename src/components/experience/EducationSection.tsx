"use client";

import { motion } from "framer-motion";
import { education } from "@/data/mockData";

export function EducationSection() {
  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <motion.article
          key={edu.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white border border-primary/10 p-6 shadow-card"
        >
          <p className="text-sm font-semibold text-secondary">{edu.period}</p>
          <h3 className="mt-1 text-xl font-bold text-primary">{edu.institution}</h3>
          <p className="font-medium text-primary/80">{edu.degree}</p>
          {edu.gpa && (
            <p className="mt-2 text-sm">
              <span className="font-semibold text-primary">IPK:</span>{" "}
              <span className="text-secondary">{edu.gpa}</span>
            </p>
          )}
          {edu.description && (
            <p className="mt-3 text-secondary text-sm leading-relaxed">{edu.description}</p>
          )}
          {edu.diplomaUrl && (
            <a
              href={edu.diplomaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Lihat ijazah ${edu.institution} di tab baru`}
            >
              Lihat Ijazah
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7m0 0v7m0-7L10 14M5 5v14h14"
                />
              </svg>
            </a>
          )}
        </motion.article>
      ))}
    </div>
  );
}
