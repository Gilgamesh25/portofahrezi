"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import type { SkillGroup } from "@/types";

const categoryTheme: Record<
  SkillGroup["variant"],
  {
    card: string;
    iconWrap: string;
    icon: string;
    dot: string;
    itemBg: string;
    gradient: string;
  }
> = {
  software: {
    card: "bg-white border-primary/8 ring-1 ring-primary/5",
    iconWrap: "bg-accent text-white",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
    dot: "bg-accent",
    itemBg: "bg-surface hover:bg-accent/5 hover:text-accent",
    gradient: "from-accent/8 to-transparent",
  },
  technology: {
    card: "bg-white border-primary/8 ring-1 ring-primary/5",
    iconWrap: "bg-accent/10 text-accent",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    dot: "bg-accent-light",
    itemBg: "bg-surface hover:bg-accent/5 hover:text-accent",
    gradient: "from-accent/8 to-transparent",
  },
  soft: {
    card: "bg-white border-primary/8 ring-1 ring-primary/5",
    iconWrap: "bg-primary/10 text-primary",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    dot: "bg-secondary",
    itemBg: "bg-surface hover:bg-primary/5 hover:text-primary",
    gradient: "from-primary/5 to-transparent",
  },
};

function SkillIcon({ path }: { path: string }) {
  return (
    <svg
      className="h-5 w-5 md:h-6 md:w-6"
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
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col rounded-xl md:rounded-2xl border p-5 md:p-6 lg:p-7 shadow-card transition-all duration-300 hover:shadow-card-hover overflow-hidden ${theme.card}`}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="relative flex items-start gap-3 md:gap-4">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`flex h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-lg md:rounded-xl ${theme.iconWrap} shadow-sm`}
        >
          <SkillIcon path={theme.icon} />
        </motion.div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base md:text-lg font-bold text-primary leading-tight">
            {group.title}
          </h3>
          <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-secondary leading-snug">
            {group.description}
          </p>
        </div>
      </div>

      <ul className="relative mt-4 md:mt-5 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2 flex-1">
        {group.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.03, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-center gap-2 md:gap-2.5 rounded-lg px-3 py-2 text-xs md:text-sm font-medium text-secondary transition-all duration-200 ${theme.itemBg} cursor-default`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
              aria-hidden
            />
            <span className="leading-snug">{item}</span>
          </motion.li>
        ))}
      </ul>

      <div className="relative mt-4 md:mt-5 pt-3 md:pt-4 border-t border-primary/5 text-[10px] md:text-xs text-secondary/50">
        {group.items.length} item
      </div>
    </motion.article>
  );
}

export function SkillsBento() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.03), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-5 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            eyebrow="Yang biasa saya pakai"
            title="Keterampilan"
            description="Tidak semua dipakai setiap hari, tapi ini yang paling sering keluar pas kerja."
            align="center"
          />
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
          staggerDelay={0.08}
        >
          {skillGroups.map((group, index) => (
            <StaggerItem key={group.id}>
              <SkillCategoryCard group={group} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
