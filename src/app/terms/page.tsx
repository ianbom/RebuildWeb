import type { Metadata } from "next";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = { title: `Terms — ${site.companyName}`, alternates: { canonical: "/terms" }, robots: { index: false } };

export default function Terms() {
  return <main className="legal-page"><Link href="/" className="legal-home">← {site.companyName}</Link><p className="eyebrow">Legal / Draft</p><h1>Terms</h1><p>This is provisional website information, not a contract for services. It must be reviewed and replaced with terms matching the actual business before launch.</p><h2>Project engagements</h2><p>Scope, deliverables, pricing, timelines, and support are agreed separately in a written proposal or contract.</p><h2>Contact</h2><p>Questions about working together? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p></main>;
}
