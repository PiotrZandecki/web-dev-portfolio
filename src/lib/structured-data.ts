import { siteConfig } from "@/config/site";
import { Project } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";
import { Locale } from "@/types/locale";

function getLocalizedUrl(locale: Locale, path = "") {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.replace(/^\/+/, "");

  return `${siteUrl}/${locale}/${normalizedPath}`;
}

function getProjectUrl(locale: Locale, project: Project) {
  return getLocalizedUrl(locale, `projects/${project.slug}/`);
}

export function getHomeStructuredData(locale: Locale) {
  const siteUrl = getSiteUrl();
  const homeUrl = getLocalizedUrl(locale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteUrl,
      inLanguage: locale,
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      legalName: siteConfig.author,
      url: homeUrl,
      email: siteConfig.email || undefined,
      sameAs: siteConfig.githubUrl ? [siteConfig.githubUrl] : undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Piotr Zandecki",
      url: homeUrl,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      jobTitle: "Frontend Developer",
      sameAs: siteConfig.githubUrl ? [siteConfig.githubUrl] : undefined,
    },
  ];
}

export function getProjectsPageStructuredData(
  locale: Locale,
  projects: Project[],
) {
  const projectsUrl = getLocalizedUrl(locale, "projects/");

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: locale === "pl" ? "Projekty | Z-TECH" : "Projects | Z-TECH",
      url: projectsUrl,
      inLanguage: locale,
      description:
        locale === "pl"
          ? "Hub projektów frontendowych Z-TECH z case studies, technologiami i linkami."
          : "Z-TECH frontend project hub with case studies, technologies and project links.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: getProjectUrl(locale, project),
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "pl" ? "Start" : "Home",
          item: getLocalizedUrl(locale),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "pl" ? "Projekty" : "Projects",
          item: projectsUrl,
        },
      ],
    },
  ];
}

export function getProjectStructuredData(locale: Locale, project: Project) {
  const projectUrl = getProjectUrl(locale, project);
  const projectsUrl = getLocalizedUrl(locale, "projects/");

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      url: projectUrl,
      inLanguage: locale,
      description: project.shortDescription[locale],
      dateCreated: project.year,
      creator: {
        "@type": "Organization",
        name: siteConfig.name,
        legalName: siteConfig.author,
        url: getLocalizedUrl(locale),
      },
      keywords: project.technologies.join(", "),
      about: project.category[locale],
      image: `${getSiteUrl()}${project.mockups[0]?.imageSrc ?? "/opengraph-image"}`,
      sameAs: [project.liveUrl, project.sourceUrl].filter(Boolean),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "pl" ? "Start" : "Home",
          item: getLocalizedUrl(locale),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "pl" ? "Projekty" : "Projects",
          item: projectsUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: projectUrl,
        },
      ],
    },
  ];
}
