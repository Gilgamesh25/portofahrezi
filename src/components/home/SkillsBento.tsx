"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SkillGroup } from "@/types";

const categoryTheme: Record<
  SkillGroup["variant"],
  {
    card: string;
    iconWrap: string;
    icon: string;
    dot: string;
    itemBg: string;
  }
> = {
  software: {
    card: "bg-white border-primary/10 ring-1 ring-primary/5",
    iconWrap: "bg-primary text-white",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
    dot: "bg-primary",
    itemBg: "bg-surface hover:bg-surface-muted",
  },
  technology: {
    card: "bg-white border-primary/10 ring-1 ring-primary/5",
    iconWrap: "bg-primary/10 text-primary",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    dot: "bg-primary-light",
    itemBg: "bg-surface hover:bg-surface-muted",
  },
  soft: {
    card: "bg-white border-primary/10 ring-1 ring-primary/5",
    iconWrap: "bg-secondary/15 text-secondary",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    dot: "bg-secondary",
    itemBg: "bg-surface hover:bg-surface-muted",
  },
};

function SkillIcon({ path }: { path: string }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function SkillCategoryCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const theme = categoryTheme[group.variant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className={`flex flex-col rounded-2xl border p-6 md:p-7 shadow-card transition-shadow hover:shadow-glass ${theme.card}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${theme.iconWrap}`}
        >
          <SkillIcon path={theme.icon} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-primary leading-tight">
            {group.title}
          </h3>
          <p className="mt-1 text-sm text-secondary leading-snug">
            {group.description}
          </p>
        </div>
      </div>

      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
        {group.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + i * 0.04 }}
            className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-primary transition-colors ${theme.itemBg}`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
              aria-hidden
            />
            <span className="leading-snug">{item}</span>
          </motion.li>
        ))}
      </ul>

      <p className="mt-5 pt-4 border-t border-primary/5 text-xs text-secondary">
        {group.items.length} item
      </p>
    </motion.article>
  );
}

export function SkillsBento() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Yang biasa saya pakai"
          title="Keterampilan"
          description="Tidak semua dipakai setiap hari, tapi ini yang paling sering keluar pas kerja."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {skillGroups.map((group, index) => (
            <SkillCategoryCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
