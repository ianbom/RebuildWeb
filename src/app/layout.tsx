import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";
import "./responsive.css";
import { site } from "@/data/site";

const title = "Nexora — Software House & Web Development Indonesia";
const description = "Nexora membantu bisnis membangun website, web application, mobile application, dan produk digital melalui UI/UX design dan software engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title,
  description,
  keywords: ["software house indonesia", "jasa pembuatan website", "web development indonesia", "software development indonesia", "jasa web application", "custom software development", "UI UX Indonesia"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title, description, siteName: site.companyName, locale: "id_ID" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
