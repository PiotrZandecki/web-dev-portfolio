import { Locale } from "@/types/locale";

type ProjectMaintenanceGuideProps = {
  locale: Locale;
};

const maintenanceCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    sections: {
      title: string;
      description: string;
      items: string[];
    }[];
    footerTitle: string;
    footerDescription: string;
  }
> = {
  en: {
    eyebrow: "Maintenance system",
    title: "Adding a new project is now a repeatable workflow.",
    description:
      "The portfolio is structured so future projects can be added by extending content files, connecting preview assets and filling technical documentation sections.",
    sections: [
      {
        title: "1. Project entry",
        description:
          "The main project data powers cards, filters, case study pages, metadata and structured data.",
        items: [
          "Add a new object in src/content/projects.ts",
          "Provide PL / EN descriptions",
          "Add technologies, highlights, features and roadmap",
        ],
      },
      {
        title: "2. Visual preview",
        description:
          "Each project should have a visual preview before or after deployment.",
        items: [
          "Add SVG or screenshot to public/project-previews",
          "Connect imageSrc in the project mockups array",
          "Use 1200 × 760 format for consistency",
        ],
      },
      {
        title: "3. Technical notes",
        description:
          "Project-specific technical sections make the case study stronger than a simple project card.",
        items: [
          "Update projectTechnicalDetails.ts",
          "Add implementation areas",
          "Add testing and review areas",
        ],
      },
      {
        title: "4. Release notes",
        description:
          "Release details explain what is live, what is pending and what is prepared for future deployment.",
        items: [
          "Update projectReleaseDetails.ts",
          "Document live/source/preview status",
          "Add build command and release checks",
        ],
      },
    ],
    footerTitle: "The goal: add projects without redesigning the portfolio.",
    footerDescription:
      "Once the structure is ready, future work should mostly mean adding new project entries, screenshots, links and technical notes.",
  },
  pl: {
    eyebrow: "System utrzymania",
    title: "Dodawanie nowego projektu jest teraz powtarzalnym workflow.",
    description:
      "Portfolio jest zbudowane tak, żeby przyszłe projekty można było dodawać przez rozszerzanie plików contentowych, podpięcie assetów preview i uzupełnienie sekcji dokumentacji technicznej.",
    sections: [
      {
        title: "1. Wpis projektu",
        description:
          "Główne dane projektu zasilają karty, filtry, case study, metadane i structured data.",
        items: [
          "Dodaj nowy obiekt w src/content/projects.ts",
          "Uzupełnij opisy PL / EN",
          "Dodaj technologie, highlights, features i roadmapę",
        ],
      },
      {
        title: "2. Preview wizualny",
        description:
          "Każdy projekt powinien mieć preview wizualne przed albo po wdrożeniu.",
        items: [
          "Dodaj SVG albo screenshot do public/project-previews",
          "Podepnij imageSrc w tablicy mockups projektu",
          "Używaj formatu 1200 × 760 dla spójności",
        ],
      },
      {
        title: "3. Notatki techniczne",
        description:
          "Sekcje techniczne konkretnego projektu robią z case study coś mocniejszego niż zwykła karta projektu.",
        items: [
          "Zaktualizuj projectTechnicalDetails.ts",
          "Dodaj obszary implementacji",
          "Dodaj obszary testów i przeglądu",
        ],
      },
      {
        title: "4. Release notes",
        description:
          "Szczegóły release wyjaśniają, co jest live, co oczekuje i co jest przygotowane pod przyszłe wdrożenie.",
        items: [
          "Zaktualizuj projectReleaseDetails.ts",
          "Opisz status live/source/preview",
          "Dodaj komendę build i kontrole release",
        ],
      },
    ],
    footerTitle: "Cel: dodawać projekty bez przebudowy portfolio.",
    footerDescription:
      "Gdy struktura jest gotowa, dalsza praca powinna polegać głównie na dodawaniu nowych wpisów projektów, screenshotów, linków i notatek technicznych.",
  },
};

export function ProjectMaintenanceGuide({
  locale,
}: ProjectMaintenanceGuideProps) {
  const copy = maintenanceCopy[locale];

  return (
    <section
      aria-labelledby="project-maintenance-guide-heading"
      className="mt-16"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-maintenance-guide-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {copy.sections.map((section) => (
          <article
            key={section.title}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {section.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {section.description}
            </p>

            <ul className="mt-6 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span aria-hidden="true" className="text-cyan-300">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6 md:p-8">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {copy.footerTitle}
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          {copy.footerDescription}
        </p>
      </div>
    </section>
  );
}
