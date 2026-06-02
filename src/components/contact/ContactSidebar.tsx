import { siteProfile } from "@/data/mockData";

const whatsappLink = `https://wa.me/${siteProfile.whatsapp.replace(/\D/g, "")}`;

export function ContactSidebar() {
  return (
    <aside className="rounded-2xl bg-primary text-white p-6 md:p-8 shadow-glass h-fit">
      <h2 className="text-xl font-bold">Langsung aja</h2>
      <p className="mt-2 text-white/80 text-sm leading-relaxed">
        Mau ngajak kerja bareng, tanya soal web, atau butuh orang dokumentasi
        acara—silakan lewat salah satu kontak di bawah.
      </p>
      <ul className="mt-6 space-y-4">
        <li>
          <p className="text-xs uppercase tracking-wide text-white/60">WhatsApp</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-medium hover:underline"
          >
            {siteProfile.whatsapp}
          </a>
        </li>
        <li>
          <p className="text-xs uppercase tracking-wide text-white/60">Email</p>
          <a
            href={`mailto:${siteProfile.email}`}
            className="mt-1 block font-medium hover:underline break-all"
          >
            {siteProfile.email}
          </a>
        </li>
        <li>
          <p className="text-xs uppercase tracking-wide text-white/60">LinkedIn</p>
          <a
            href={siteProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-medium hover:underline"
          >
            Profil LinkedIn
          </a>
        </li>
        <li>
          <p className="text-xs uppercase tracking-wide text-white/60">Instagram</p>
          <a
            href={siteProfile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-medium hover:underline"
          >
            @aulxsya_
          </a>
        </li>
      </ul>
    </aside>
  );
}
