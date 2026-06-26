export const siteConfig = {
  name: "Z-TECH",
  author: "Z-TECH Piotr Zandecki",
  description:
    "Bilingual web developer portfolio focused on Next.js, TypeScript, Tailwind CSS and project-based frontend development.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  locale: "en",
  alternateLocale: "pl",
  keywords: [
    "Z-TECH",
    "Piotr Zandecki",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Development",
  ],
} as const;

export function getContactLinks() {
  return {
    email: siteConfig.email ? `mailto:${siteConfig.email}` : "",
    github: siteConfig.githubUrl,
  };
}

export function hasAnyContactLink() {
  const links = getContactLinks();

  return Boolean(links.email || links.github);
}
