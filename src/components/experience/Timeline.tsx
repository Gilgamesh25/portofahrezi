"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/mockData";

export function Timeline() {
  const sorted = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div className="relative">
      <div
        className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-primary/15"
        aria-hidden
      />
      <ul className="space-y-10">
        {sorted.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-12 md:pl-16"
          >
            <span
              className="absolute left-2 md:left-4 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <div className="rounded-2xl bg-white border border-primary/10 p-6 shadow-card hover:shadow-glass transition-shadow">
              <p className="text-sm font-semibold text-secondary">{item.period}</p>
              <h3 className="mt-1 text-xl font-bold text-primary">{item.organization}</h3>
              <p className="mt-1 text-base font-medium text-primary/80">{item.role}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h.label} className="flex flex-col sm:flex-row sm:gap-2 text-sm">
                    <span className="font-semibold text-primary shrink-0">{h.label}:</span>
                    <span className="text-secondary">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
