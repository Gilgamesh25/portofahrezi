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
        </motion.article>
      ))}
    </div>
  );
}
