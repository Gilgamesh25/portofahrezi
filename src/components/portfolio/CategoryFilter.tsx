"use client";

import { motion } from "framer-motion";
import { projectCategories } from "@/data/mockData";
import { usePortfolioStore } from "@/store/portfolioStore";
import type { ProjectCategoryFilter } from "@/types";

export function CategoryFilter() {
  const { activeCategory, setCategory } = usePortfolioStore();

  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="tablist"
      aria-label="Filter kategori portofolio"
    >
      {projectCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setCategory(category as ProjectCategoryFilter)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive ? "text-white" : "text-secondary hover:text-primary bg-white border border-primary/10"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
