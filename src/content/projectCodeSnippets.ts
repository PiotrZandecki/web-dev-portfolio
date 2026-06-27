import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;

export type ProjectCodeSnippet = {
  filename: string;
  language: string;
  title: LocalizedText;
  description: LocalizedText;
  code: string;
};

export const projectCodeSnippets: Record<string, ProjectCodeSnippet[]> = {
  "web-dev-portfolio": [
    {
      filename: "src/app/[locale]/projects/page.tsx",
      language: "tsx",
      title: {
        en: "Localized project hub",
        pl: "Dwujęzyczny hub projektów",
      },
      description: {
        en: "The projects route combines localized metadata, structured data, project cards and technical portfolio sections.",
        pl: "Trasa projektów łączy lokalizowane metadata, structured data, karty projektów i techniczne sekcje portfolio.",
      },
      code: `export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <ProjectsExplorer
        projects={projects}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectDeliveryDashboard projects={projects} locale={locale} />
      <ProjectProductionGate projects={projects} locale={locale} />
    </main>
  );
}`,
    },
    {
      filename: "src/components/ProjectCard.tsx",
      language: "tsx",
      title: {
        en: "Interactive project card",
        pl: "Interaktywna karta projektu",
      },
      description: {
        en: "Project cards combine preview assets, status badges, technology tags and a case study call to action.",
        pl: "Karty projektów łączą preview, badge statusu, technologie i CTA do case study.",
      },
      code: `export function ProjectCard({ project, locale, dictionary }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 4);
  const previewImage = project.mockups[0];

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5">
      <Image
        src={previewImage.imageSrc}
        alt={previewImage.title[locale]}
        width={1200}
        height={760}
      />

      <h2>{project.title}</h2>
      <ProjectLinkStatusBadges project={project} locale={locale} />

      <Link href={"/" + locale + "/projects/" + project.slug + "/"}>
        {dictionary.common.viewProject}
      </Link>
    </article>
  );
}`,
    },
    {
      filename: "src/content/projects.ts",
      language: "ts",
      title: {
        en: "Scalable project data",
        pl: "Skalowalne dane projektów",
      },
      description: {
        en: "Project content is stored as structured data so new case studies can be added without rebuilding the layout.",
        pl: "Treść projektów jest trzymana jako dane strukturalne, dzięki czemu nowe case studies można dodawać bez przebudowy layoutu.",
      },
      code: `export type Project = {
  slug: string;
  title: string;
  status: "completed" | "inProgress";
  category: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  technologies: string[];
  highlights: Record<Locale, string[]>;
  mockups: ProjectMockup[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "web-dev-portfolio",
    title: "Web Dev Portfolio",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];`,
    },
  ],

  "private-space": [
    {
      filename: "src/lib/noteStorage.ts",
      language: "ts",
      title: {
        en: "Local persistence layer",
        pl: "Warstwa lokalnego zapisu",
      },
      description: {
        en: "A browser storage layer keeps user notes, lists and plans available between sessions.",
        pl: "Warstwa browser storage utrzymuje notatki, listy i plany między sesjami.",
      },
      code: `const STORAGE_KEY = "private-space-notes-v1";

export function readNotesSnapshot(): NotesSnapshot {
  if (typeof window === "undefined") {
    return EMPTY_SNAPSHOT;
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    return rawValue ? JSON.parse(rawValue) : EMPTY_SNAPSHOT;
  } catch {
    return EMPTY_SNAPSHOT;
  }
}

export function saveNotesSnapshot(snapshot: NotesSnapshot) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
}`,
    },
    {
      filename: "src/app/notes/page.tsx",
      language: "tsx",
      title: {
        en: "Notes module UI",
        pl: "Interfejs modułu notatek",
      },
      description: {
        en: "Feature pages are split into focused modules with their own state and actions.",
        pl: "Strony funkcjonalne są dzielone na moduły z własnym stanem i akcjami.",
      },
      code: `export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleCreateNote(input: NoteInput) {
    const nextNote = createNote(input);
    setNotes((currentNotes) => [nextNote, ...currentNotes]);
  }

  return (
    <main>
      <PageHeader title="Notes" />
      <NoteForm onSubmit={handleCreateNote} />
      <NotesList notes={notes} />
    </main>
  );
}`,
    },
  ],

  "aurora-beauty": [
    {
      filename: "src/components/HeroSection.tsx",
      language: "tsx",
      title: {
        en: "Business landing hero",
        pl: "Hero strony firmowej",
      },
      description: {
        en: "The hero section sets the visual direction, value proposition and primary call to action.",
        pl: "Sekcja hero ustawia kierunek wizualny, propozycję wartości i główne CTA.",
      },
      code: `export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em]">
            Aurora Beauty
          </p>

          <h1>Beauty services with a calm, premium experience.</h1>
          <p>Modern presentation for services, trust and booking intent.</p>

          <a href="#contact">Book a visit</a>
        </div>

        <ServicePreviewCard />
      </div>
    </section>
  );
}`,
    },
    {
      filename: "src/components/ServicesSection.tsx",
      language: "tsx",
      title: {
        en: "Service presentation",
        pl: "Prezentacja usług",
      },
      description: {
        en: "Service cards keep the business offer easy to scan on desktop and mobile.",
        pl: "Karty usług ułatwiają szybkie przejrzenie oferty na desktopie i mobile.",
      },
      code: `const services = [
  "Facial treatments",
  "Brows and lashes",
  "Beauty consultation",
];

export function ServicesSection() {
  return (
    <section id="services">
      <h2>Services designed around care and trust.</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service}>
            <h3>{service}</h3>
            <p>Clear description, benefits and next step.</p>
          </article>
        ))}
      </div>
    </section>
  );
}`,
    },
  ],
};
