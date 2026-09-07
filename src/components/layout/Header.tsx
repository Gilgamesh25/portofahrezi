"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteProfile } from "@/data/mockData";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/projects", label: "Projek" },
  { href: "/about", label: "Pengalaman" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "glass-header shadow-glass py-2 md:py-2.5"
            : "bg-transparent py-3 md:py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative group shrink-0">
            <span className="font-extrabold text-lg md:text-xl lg:text-2xl text-primary tracking-tight">
              FA
            </span>
            <span className="text-accent font-normal">.</span>
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Navigasi utama">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-accent"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent/8 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* CV button */}
            <motion.a
              href={siteProfile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold text-white shadow-md shadow-accent/20 hover:bg-accent-dark transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Unduh CV
            </motion.a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden relative w-9 h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center text-primary hover:bg-surface-muted transition-colors"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <div className="w-4 h-3.5 lg:w-5 lg:h-4 flex flex-col justify-between">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="block h-0.5 w-full bg-primary rounded-full origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-full bg-primary rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="block h-0.5 w-full bg-primary rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[52px] md:top-[57px] left-2 right-2 md:left-4 md:right-4 z-50 rounded-xl md:rounded-2xl bg-white/95 backdrop-blur-xl border border-primary/5 shadow-2xl overflow-hidden md:hidden"
              aria-label="Navigasi mobile"
            >
              <div className="py-1.5 md:py-2">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 md:px-5 py-3 md:py-3.5 text-sm font-medium transition-colors ${
                          active
                            ? "text-accent bg-accent/5"
                            : "text-secondary hover:text-primary hover:bg-surface-muted"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.04, duration: 0.25 }}
                  className="px-4 md:px-5 pt-2 pb-2.5"
                >
                  <a
                    href={siteProfile.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full justify-center items-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Unduh CV
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
