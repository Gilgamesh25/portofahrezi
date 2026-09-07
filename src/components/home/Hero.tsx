"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteProfile } from "@/data/mockData";
import { MagneticButton } from "@/components/ui/MagneticButton";

const PROFILE_WIDTH = 1023;
const PROFILE_HEIGHT = 1537;

const textReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const photoReveal = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function Hero() {
  const profilePhoto = siteProfile.profilePhoto;
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-gradient-to-br from-surface via-white to-surface-muted min-h-[80vh] md:min-h-[85vh] flex items-center"
    >
      {/* Decorative background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-24 -right-24 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl"
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `radial-gradient(circle, #18181B 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-content px-5 sm:px-6 md:py-20 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text content */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10 max-w-2xl lg:flex-1 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="flex items-center justify-center lg:justify-start gap-2 mb-5 md:mb-6"
            >
              <span className="inline-block h-px w-8 md:w-10 bg-accent" />
              <span className="text-xs md:text-sm font-medium text-accent tracking-wide uppercase">
                Sidoarjo, Indonesia
              </span>
              <span className="inline-block h-px w-8 md:w-10 bg-accent" />
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight"
            >
              {siteProfile.name.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-secondary/80"
            >
              {siteProfile.title}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {siteProfile.elevatorPitch}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <MagneticButton>
                <motion.a
                  href={siteProfile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex justify-center items-center gap-2 rounded-xl bg-accent px-6 py-3.5 md:px-7 md:py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Unduh CV
                </motion.a>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 rounded-xl border-2 border-primary/15 px-6 py-3.5 md:px-7 md:py-4 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Yuk, ngobrol
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="mt-6 md:mt-8 flex items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={siteProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-surface-muted hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={siteProfile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-surface-muted hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`mailto:${siteProfile.email}`}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-surface-muted hover:bg-accent/10 transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Photo with parallax */}
          {profilePhoto && (
            <motion.div
              style={{ y: photoY, scale: photoScale }}
              initial="hidden"
              animate="visible"
              variants={photoReveal}
              className="relative lg:flex-1 flex justify-center"
            >
              <div className="relative">
                {/* Glow behind photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-2xl scale-110 opacity-60" />
                <Image
                  src={profilePhoto}
                  alt={`Foto ${siteProfile.name}`}
                  width={PROFILE_WIDTH}
                  height={PROFILE_HEIGHT}
                  priority
                  sizes="(max-width: 1023px) 320px, 520px"
                  className="relative h-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[480px] xl:max-w-[520px] object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] md:text-xs font-medium text-secondary/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 md:w-5 md:h-8 border-2 border-secondary/15 rounded-full flex justify-center pt-1.5"
        >
          <motion.div className="w-0.5 h-1.5 md:w-1 md:h-2 bg-secondary/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
