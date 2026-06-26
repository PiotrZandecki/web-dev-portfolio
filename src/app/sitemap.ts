import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";
import { locales } from "@/types/locale";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const currentDate = new Date();

  const staticRoutes = locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}/`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.9,
    },
    {
      url: `${siteUrl}/${locale}/about/`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/${locale}/projects/`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/${locale}/services/`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/${locale}/contact/`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]);

  const projectRoutes = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/projects/${project.slug}/`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
