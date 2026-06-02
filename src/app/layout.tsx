import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";
import { siteProfile } from "@/data/mockData";
import { getPersonJsonLd } from "@/lib/structuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteProfile.name} | ${siteProfile.title}`,
    template: `%s | ${siteProfile.name}`,
  },
  description: siteProfile.metaDescription,
  keywords: [
    "Fahrezi Auliasyafa",
    "portofolio",
    "web developer Surabaya",
    "dokumentasi acara",
    "konten kreatif",
  ],
  authors: [{ name: siteProfile.name }],
  openGraph: {
    title: siteProfile.name,
    description: siteProfile.metaDescription,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPersonJsonLd();

  return (
    <html lang="id" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-primary">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
