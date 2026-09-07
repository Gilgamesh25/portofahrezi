import Link from "next/link";
import { siteProfile } from "@/data/mockData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-primary/5 bg-surface-muted/50 safe-bottom">
      <div className="mx-auto max-w-content px-5 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-extrabold text-base md:text-lg text-primary tracking-tight">
              FA<span className="text-accent font-normal">.</span>
            </p>
            <p className="text-xs md:text-sm text-secondary mt-1">{siteProfile.title}</p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-5 text-xs md:text-sm">
            <Link
              href="/portfolio"
              className="text-secondary hover:text-accent transition-colors duration-200"
            >
              Portofolio
            </Link>
            <Link
              href="/about"
              className="text-secondary hover:text-accent transition-colors duration-200"
            >
              Pengalaman
            </Link>
            <Link
              href="/contact"
              className="text-secondary hover:text-accent transition-colors duration-200"
            >
              Kontak
            </Link>
            <a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-primary/5 flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3">
          <p className="text-[10px] md:text-xs text-secondary/40">
            © {year} {siteProfile.name}. Terima kasih sudah mampir.
          </p>
          <p className="text-[10px] md:text-xs text-secondary/30">
            Dibuat dengan Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
