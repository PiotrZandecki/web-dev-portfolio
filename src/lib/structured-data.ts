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

function getBaseOrganization() {
  const siteUrl = getSiteUrl();

  return {
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.author,
    url: siteUrl,
    email: siteConfig.email || undefined,
    sameAs: siteConfig.githubUrl ? [siteConfig.githubUrl] : undefined,
  };
}

function getBaseBreadcrumbs(
  locale: Locale,
  items: {
    name: string;
    item: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
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
      publisher: getBaseOrganization(),
    },
    {
      "@context": "https://schema.org",
      ...getBaseOrganization(),
      url: homeUrl,
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

export function getAboutPageStructuredData(locale: Locale) {
  const aboutUrl = getLocalizedUrl(locale, "about/");

  return [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: locale === "pl" ? "O Z-TECH" : "About Z-TECH",
      url: aboutUrl,
      inLanguage: locale,
      description:
        locale === "pl"
          ? "Informacje o Z-TECH Piotr Zandecki, kierunku frontendowym, workflow projektowym i stacku technologicznym."
          : "Information about Z-TECH Piotr Zandecki, frontend focus, project workflow and technology stack.",
      about: getBaseOrganization(),
    },
    getBaseBreadcrumbs(locale, [
      {
        name: locale === "pl" ? "Start" : "Home",
        item: getLocalizedUrl(locale),
      },
      {
        name: locale === "pl" ? "O Z-TECH" : "About",
        item: aboutUrl,
      },
    ]),
  ];
}

export function getServicesPageStructuredData(locale: Locale) {
  const servicesUrl = getLocalizedUrl(locale, "services/");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name:
        locale === "pl"
          ? "Usługi frontendowe Z-TECH"
          : "Z-TECH frontend services",
      url: servicesUrl,
      inLanguage: locale,
      description:
        locale === "pl"
          ? "Usługi frontendowe Z-TECH: strony firmowe, interfejsy frontendowe, portfolio i dwujęzyczne projekty webowe."
          : "Z-TECH frontend services: business websites, frontend interfaces, portfolio pages and bilingual web projects.",
      provider: getBaseOrganization(),
      areaServed: "Online",
      serviceType: [
        "Business websites",
        "Frontend interfaces",
        "Portfolio websites",
        "Bilingual web projects",
      ],
    },
    getBaseBreadcrumbs(locale, [
      {
        name: locale === "pl" ? "Start" : "Home",
        item: getLocalizedUrl(locale),
      },
      {
        name: locale === "pl" ? "Usługi" : "Services",
        item: servicesUrl,
      },
    ]),
  ];
}

export function getContactPageStructuredData(locale: Locale) {
  const contactUrl = getLocalizedUrl(locale, "contact/");

  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: locale === "pl" ? "Kontakt | Z-TECH" : "Contact | Z-TECH",
      url: contactUrl,
      inLanguage: locale,
      description:
        locale === "pl"
          ? "Kontakt z Z-TECH Piotr Zandecki w sprawie projektów frontendowych, stron firmowych i web developmentu."
          : "Contact Z-TECH Piotr Zandecki for frontend projects, business websites and web development.",
      about: getBaseOrganization(),
    },
    getBaseBreadcrumbs(locale, [
      {
        name: locale === "pl" ? "Start" : "Home",
        item: getLocalizedUrl(locale),
      },
      {
        name: locale === "pl" ? "Kontakt" : "Contact",
        item: contactUrl,
      },
    ]),
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
    getBaseBreadcrumbs(locale, [
      {
        name: locale === "pl" ? "Start" : "Home",
        item: getLocalizedUrl(locale),
      },
      {
        name: locale === "pl" ? "Projekty" : "Projects",
        item: projectsUrl,
      },
    ]),
  ];
}

export function getProjectStructuredData(locale: Locale, project: Project) {
  const projectUrl = getProjectUrl(locale, project);
  const projectsUrl = getLocalizedUrl(locale, "projects/");
  const relatedLinks = [project.liveUrl, project.sourceUrl].filter(Boolean);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      url: projectUrl,
      inLanguage: locale,
      description: project.shortDescription[locale],
      dateCreated: project.year,
      creator: getBaseOrganization(),
      keywords: project.technologies.join(", "),
      about: project.category[locale],
      image: `${getSiteUrl()}${
        project.mockups[0]?.imageSrc ?? "/opengraph-image"
      }`,
      sameAs: relatedLinks.length > 0 ? relatedLinks : undefined,
    },
    getBaseBreadcrumbs(locale, [
      {
        name: locale === "pl" ? "Start" : "Home",
        item: getLocalizedUrl(locale),
      },
      {
        name: locale === "pl" ? "Projekty" : "Projects",
        item: projectsUrl,
      },
      {
        name: project.title,
        item: projectUrl,
      },
    ]),
  ];
}
