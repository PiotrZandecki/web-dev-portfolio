export const siteConfig = {
  name: "Piotr.dev",
  author: "Piotr Zandecki",
  description:
    "Bilingual web developer portfolio focused on Next.js, TypeScript, Tailwind CSS and project-based frontend development.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  locale: "en",
  alternateLocale: "pl",
  keywords: [
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
    linkedin: siteConfig.linkedinUrl,
  };
}

export function hasAnyContactLink() {
  const links = getContactLinks();

  return Boolean(links.email || links.github || links.linkedin);
}
