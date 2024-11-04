import type { MetadataRoute } from "next";
import { PageRoutes } from "@/lib/pageroutes";
import { Settings } from "@/lib/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${Settings.metadataBase}/releases`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return [
    ...staticPages,
    ...PageRoutes.map((page) => ({
      url: `${Settings.metadataBase}${page.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
