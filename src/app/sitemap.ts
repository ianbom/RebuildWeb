import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { articles } from "./artikel/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.origin, lastModified: new Date() },
    { url: `${site.origin}/layanan` },
    { url: `${site.origin}/kontak` },
    { url: `${site.origin}/artikel` },
    ...articles.map((article) => ({
      url: `${site.origin}/artikel/${article.slug}`,
      lastModified: new Date(article.date),
    })),
    { url: `${site.origin}/portofolio`, lastModified: new Date() },
    ...site.projects.map((project) => ({
      url: `${site.origin}/portofolio/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
