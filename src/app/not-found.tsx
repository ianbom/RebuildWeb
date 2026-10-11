import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal-page">
      <p className="eyebrow">
        404 / Halaman tidak ditemukan
      </p>
      <h1>
        Sepertinya Anda tersesat.
      </h1>
      <p>
        Halaman yang Anda cari mungkin sudah pindah atau alamatnya kurang tepat.
      </p>
      <Link className="text-link" href="/">
        Kembali ke beranda{" "}
        <span aria-hidden="true">
          ↗
        </span>
      </Link>
    </main>
  );
}
