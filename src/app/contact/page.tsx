import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Kirim pesan atau hubungi lewat WhatsApp, email, dan medsos.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontak"
          title="Mau ngobrol?"
          description="Isi form di kiri, atau langsung chat lewat kontak di kanan."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2 rounded-2xl bg-white border border-primary/10 p-6 md:p-8 shadow-card">
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}
