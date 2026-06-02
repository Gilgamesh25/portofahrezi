import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MusicPlayer } from "@/components/layout/MusicPlayer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
