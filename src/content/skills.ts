import { Locale } from "@/types/locale";

export type SkillGroup = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: {
      en: "Frontend",
      pl: "Frontend",
    },
    description: {
      en: "Core technologies used to build modern web interfaces.",
      pl: "Podstawowe technologie używane do budowania nowoczesnych interfejsów webowych.",
    },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: {
      en: "Styling & UI",
      pl: "Styling i UI",
    },
    description: {
      en: "Tools and patterns used to create responsive and clean layouts.",
      pl: "Narzędzia i wzorce używane do tworzenia responsywnych i czystych layoutów.",
    },
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Component-based UI",
      "Dark UI",
    ],
  },
  {
    title: {
      en: "Workflow",
      pl: "Workflow",
    },
    description: {
      en: "Development tools used to keep projects structured and maintainable.",
      pl: "Narzędzia developerskie pomagające utrzymać strukturę i porządek w projektach.",
    },
    skills: ["Git", "GitHub", "VS Code", "ESLint", "npm"],
  },
  {
    title: {
      en: "Currently improving",
      pl: "Aktualnie rozwijam",
    },
    description: {
      en: "Areas I am actively practicing through portfolio projects.",
      pl: "Obszary, które aktywnie ćwiczę przez budowanie projektów portfolio.",
    },
    skills: [
      "State Management",
      "Project Architecture",
      "Reusable Components",
      "Deployment",
    ],
  },
];
