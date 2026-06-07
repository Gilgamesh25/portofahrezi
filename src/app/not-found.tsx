import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-secondary">Halamannya tidak ketemu, mungkin salah alamat.</p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light"
      >
        Balik ke beranda
      </Link>
    </div>
  );
}
