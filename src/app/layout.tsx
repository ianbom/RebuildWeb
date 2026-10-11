import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";
import "./responsive.css";
import { site } from "@/data/site";

const title = "TemuWeb - Jasa Pembuatan Website & Aplikasi Web Indonesia";
const description =
  "TemuWeb membantu bisnis membuat website, aplikasi web, dan produk digital yang mudah dipakai dan siap berkembang.";

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title,
  description,
  keywords: [
    "perusahaan software indonesia",
    "jasa pembuatan website",
    "pengembangan web indonesia",
    "pengembangan perangkat lunak",
    "jasa pembuatan aplikasi web",
    "pembuatan software khusus",
    "desain UI UX Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: site.companyName,
    locale: "id_ID",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
