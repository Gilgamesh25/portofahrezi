"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/mockData";

export function CertificationGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {certifications.map((cert, index) => (
        <motion.a
          key={cert.id}
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          whileHover={{ y: -4 }}
          className="group block rounded-2xl bg-white border border-primary/10 p-6 shadow-card hover:shadow-glass hover:border-primary/25 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={`Buka sertifikat ${cert.title} di tab baru`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                {cert.issuer} · {cert.year}
              </p>
              <h3 className="mt-2 font-bold text-primary group-hover:text-primary-light">
                {cert.title}
              </h3>
            </div>
            <span className="shrink-0 rounded-full bg-primary/5 p-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-sm text-secondary">
            Ketuk untuk lihat fotonya
          </p>
        </motion.a>
      ))}
    </div>
  );
}
