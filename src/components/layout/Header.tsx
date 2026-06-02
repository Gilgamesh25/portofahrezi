"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteProfile } from "@/data/mockData";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/about", label: "Pengalaman" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 glass-header ${
        scrolled ? "shadow-glass" : ""
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-primary text-lg sm:text-xl shrink-0">
          FA<span className="text-secondary font-normal">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-white"
                    : "text-secondary hover:text-primary hover:bg-surface-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.a
            href={siteProfile.cvUrl}
            download={siteProfile.cvDownloadName}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-primary-light transition-colors"
          >
            Unduh CV
          </motion.a>

          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-primary hover:bg-surface-muted"
            aria-expanded={menuOpen}
            aria-label="Buka menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-primary/10 px-4 pb-4"
          aria-label="Navigasi mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium border-b border-primary/5 last:border-0 ${
                pathname === link.href ? "text-primary" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteProfile.cvUrl}
            download={siteProfile.cvDownloadName}
            className="mt-3 flex w-full justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white"
          >
            Unduh CV
          </a>
        </motion.nav>
      )}
    </header>
  );
}
