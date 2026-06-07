import type { Metadata } from "next";
import { Timeline } from "@/components/experience/Timeline";
import { CertificationGrid } from "@/components/experience/CertificationGrid";
import { EducationSection } from "@/components/experience/EducationSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Pengalaman & Pendidikan",
  description:
    "Riwayat magang & kerja, kuliah, dan sertifikat yang pernah saya ambil.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16 lg:py-20 space-y-16 md:space-y-24">
      <section className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Kerja & magang"
          description="Dari yang terbaru dulu, biar kebayang saya lagi di mana."
        />
        <Timeline />
      </section>

      <section className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kuliah"
          title="Pendidikan"
        />
        <EducationSection />
      </section>

      <section className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 bg-surface py-16 md:py-20 -mx-0 w-full">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sertifikat"
            title="Yang sudah saya pegang"
            description="Klik kartunya kalau mau lihat foto sertifikat aslinya (buka tab baru)."
          />
          <CertificationGrid />
        </div>
      </section>
    </div>
  );
}
