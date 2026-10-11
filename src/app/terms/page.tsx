import type { Metadata } from "next";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Ketentuan — ${site.companyName}`,
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function Terms() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-home">
        ← {site.companyName}
      </Link>
      <p className="eyebrow">
        Dokumen sementara
      </p>
      <h1>
        Ketentuan
      </h1>
      <p>
        Informasi di halaman ini masih sementara dan bukan kontrak layanan.
        Sebelum situs diluncurkan, isinya perlu ditinjau dan disesuaikan dengan
        kegiatan bisnis yang sebenarnya.
      </p>
      <h2>
        Kerja sama proyek
      </h2>
      <p>
        Cakupan pekerjaan, hasil yang diserahkan, biaya, jadwal, dan dukungan
        akan disepakati terpisah dalam proposal atau kontrak tertulis.
      </p>
      <h2>
        Hubungi kami
      </h2>
      <p>
        Punya pertanyaan soal kerja sama? Kirim email ke{" "}
        <a href={`mailto:${site.email}`}>
          {site.email}
        </a>.
      </p>
    </main>
  );
}
