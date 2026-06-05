"use client";

import { motion } from "framer-motion";
import { sideProjectCategories } from "@/data/mockData";
import { useSideProjectStore } from "@/store/sideProjectStore";
import type { SideProjectCategoryFilter } from "@/types";

export function SideProjectCategoryFilter() {
  const { activeCategory, setCategory } = useSideProjectStore();

  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="tablist"
      aria-label="Filter kategori projek"
    >
      {sideProjectCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setCategory(category as SideProjectCategoryFilter)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive ? "text-white" : "text-secondary hover:text-primary bg-white border border-primary/10"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="sp-category-pill"
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
