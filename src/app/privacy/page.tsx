import type { Metadata } from "next";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = { title: `Privacy Policy — ${site.companyName}`, alternates: { canonical: "/privacy" }, robots: { index: false } };

export default function Privacy() {
  return <main className="legal-page"><Link href="/" className="legal-home">← {site.companyName}</Link><p className="eyebrow">Legal / Draft</p><h1>Privacy Policy</h1><p>This draft describes how inquiries sent to {site.companyName} may be handled. It must be reviewed and replaced with a policy matching actual operations before launch.</p><h2>Contact inquiries</h2><p>If you contact us by email or WhatsApp, the information you provide is used to respond to your request. Please do not send sensitive information in an initial inquiry.</p><h2>Questions</h2><p>For privacy questions, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p></main>;
}
