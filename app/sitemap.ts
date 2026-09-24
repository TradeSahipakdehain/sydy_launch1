import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = "https://sydycapital.com";
  return [
    { url: root, lastModified: new Date() },
    { url: `${root}/blog`, lastModified: new Date() },
    { url: `${root}/disclosures`, lastModified: new Date() },
    { url: `${root}/privacy`, lastModified: new Date() },
    { url: `${root}/terms`, lastModified: new Date() },
    ...articles.map(({ slug }) => ({
      url: `${root}/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
