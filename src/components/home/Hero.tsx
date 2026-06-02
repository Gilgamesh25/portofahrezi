"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteProfile } from "@/data/mockData";

const PROFILE_WIDTH = 1023;
const PROFILE_HEIGHT = 1537;

export function Hero() {
  const profilePhoto = siteProfile.profilePhoto;

  return (
    <section className="relative overflow-x-hidden bg-gradient-to-br from-surface via-white to-surface-muted">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,54,93,0.06),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 hidden lg:block w-[42%] h-[65%] bg-[radial-gradient(circle_at_75%_85%,rgba(26,54,93,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        {/* Konten siteProfile — layout tetap, tidak ikut membesar saat foto diperbesar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="text-sm font-medium text-secondary mb-4">
            Surabaya · portofolio & riwayat kerja
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
            {siteProfile.name}
            <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-secondary mt-3">
              {siteProfile.title}
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
            {siteProfile.elevatorPitch}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href={siteProfile.cvUrl}
              download={siteProfile.cvDownloadName}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex justify-center items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:bg-primary-light"
            >
              Unduh CV
            </motion.a>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center rounded-xl border-2 border-primary px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Yuk, ngobrol
            </Link>
          </div>
        </motion.div>

        {/* Foto di luar alur layout teks — membesar tanpa mendorong siteProfile */}
        {profilePhoto && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-10 flex justify-center lg:mt-0 lg:absolute lg:right-4 xl:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:z-0 pointer-events-none"
          >
            <Image
              src={profilePhoto}
              alt={`Foto ${siteProfile.name}`}
              width={PROFILE_WIDTH}
              height={PROFILE_HEIGHT}
              priority
              sizes="(max-width: 1023px) 320px, 620px"
              className="pointer-events-auto h-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[540px] xl:max-w-[580px] 2xl:max-w-[620px] object-contain drop-shadow-[0_24px_48px_rgba(26,54,93,0.14)]"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
