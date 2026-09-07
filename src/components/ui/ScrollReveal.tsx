"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, useAnimation, type Variant } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation variant: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur" */
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Distance for slide variants (px) */
  distance?: number;
  /** Only animate once */
  once?: boolean;
  className?: string;
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.55,
  distance,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const controls = useAnimation();

  const v = variants[variant];
  const hidden = { ...v.hidden };
  const visible = { ...v.visible };

  // Override distance for slide variants
  if (distance !== undefined) {
    if ("y" in hidden && "y" in visible) {
      hidden.y = variant.includes("down") ? -distance : distance;
      visible.y = 0;
    }
    if ("x" in hidden && "x" in visible) {
      hidden.x = variant.includes("right") ? -distance : distance;
      visible.x = 0;
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden, visible }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container — wraps multiple ScrollReveal children
 * and staggers their entrance automatically.
 */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.06,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
