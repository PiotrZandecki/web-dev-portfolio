export const siteConfig = {
  name: "Piotr.dev",
  author: "Piotr Zandecki",
  description:
    "Bilingual web developer portfolio focused on Next.js, TypeScript, Tailwind CSS and project-based frontend development.",
  email: "",
  githubUrl: "",
  linkedinUrl: "",
  locale: "en",
  alternateLocale: "pl",
} as const;

export function getContactLinks() {
  return {
    email: siteConfig.email ? `mailto:${siteConfig.email}` : "",
    github: siteConfig.githubUrl,
    linkedin: siteConfig.linkedinUrl,
  };
}

export function hasAnyContactLink() {
  const links = getContactLinks();

  return Boolean(links.email || links.github || links.linkedin);
}
