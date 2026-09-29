import type { Metadata } from "next";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = { title: `Kebijakan Privasi — ${site.companyName}`, alternates: { canonical: "/privacy" }, robots: { index: false } };

export default function Privacy() {
  return <main className="legal-page"><Link href="/" className="legal-home">← {site.companyName}</Link><p className="eyebrow">Dokumen sementara</p><h1>Kebijakan Privasi</h1><p>Halaman ini masih berupa draf tentang cara {site.companyName} menangani pesan yang masuk. Sebelum situs diluncurkan, isinya perlu ditinjau dan disesuaikan dengan cara kerja yang sebenarnya.</p><h2>Pesan yang Anda kirim</h2><p>Jika Anda menghubungi kami lewat email atau WhatsApp, informasi yang Anda berikan kami gunakan untuk membalas pesan Anda. Mohon jangan mengirim informasi sensitif saat pertama kali menghubungi kami.</p><h2>Ada pertanyaan?</h2><p>Untuk pertanyaan soal privasi, kirim email ke <a href={`mailto:${site.email}`}>{site.email}</a>.</p></main>;
}
