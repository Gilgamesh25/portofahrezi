import Link from "next/link";
import { siteProfile } from "@/data/mockData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-primary/10 bg-white">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-primary">{siteProfile.name}</p>
            <p className="text-sm text-secondary mt-1">{siteProfile.title}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/portfolio" className="text-secondary hover:text-primary">
              Portofolio
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary">
              Pengalaman
            </Link>
            <Link href="/contact" className="text-secondary hover:text-primary">
              Kontak
            </Link>
            <a
              href={siteProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-secondary">
          © {year} {siteProfile.name}. Terima kasih sudah mampir.
        </p>
      </div>
    </footer>
  );
}
