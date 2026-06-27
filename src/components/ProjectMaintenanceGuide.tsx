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
    eyebrow: "Growth system",
    title: "A portfolio built to keep evolving.",
    description:
      "This portfolio is not meant to be a frozen showcase. It is a place for continuous learning, testing new ideas, improving existing projects and staying up to date with modern frontend development.",
    sections: [
      {
        title: "1. Learn continuously",
        description:
          "Each project is a chance to practice real frontend decisions instead of only collecting static screenshots.",
        items: [
          "Explore new frontend patterns and implementation ideas",
          "Compare different ways to structure reusable components",
          "Turn lessons from each project into stronger case studies",
        ],
      },
      {
        title: "2. Improve the stack",
        description:
          "The technology stack should stay practical, modern and aligned with real deployment needs.",
        items: [
          "Review framework, styling and deployment choices",
          "Keep the project structure clean and maintainable",
          "Update tooling when it brings real value to the workflow",
        ],
      },
      {
        title: "3. Refine existing work",
        description:
          "A finished project can still become better through polish, accessibility, performance and clearer presentation.",
        items: [
          "Improve UI details, responsiveness and interaction quality",
          "Replace previews with real screenshots when available",
          "Keep case studies clear, useful and easy to review",
        ],
      },
      {
        title: "4. Build forward",
        description:
          "New projects should expand the portfolio with different use cases, stronger demos and more complete frontend experience.",
        items: [
          "Add new projects that show different frontend skills",
          "Connect live demos and source links where possible",
          "Use the portfolio as a long-term record of progress",
        ],
      },
    ],
    footerTitle: "The goal: keep learning and stay up to date.",
    footerDescription:
      "Z-TECH should grow together with my skills: through new projects, updated stack decisions, fresh experiments, better case studies and continuous improvements to the production portfolio.",
  },
  pl: {
    eyebrow: "System rozwoju",
    title: "Portfolio zbudowane tak, żeby stale się rozwijało.",
    description:
      "To portfolio nie ma być zamkniętą, statyczną wizytówką. Ma być miejscem ciągłej nauki, testowania nowych pomysłów, dopracowywania istniejących projektów i bycia na bieżąco z nowoczesnym frontend developmentem.",
    sections: [
      {
        title: "1. Uczyć się regularnie",
        description:
          "Każdy projekt jest okazją do ćwiczenia realnych decyzji frontendowych, a nie tylko dodania kolejnego screena do portfolio.",
        items: [
          "Testować nowe wzorce frontendowe i pomysły implementacyjne",
          "Porównywać różne sposoby budowania komponentów wielokrotnego użytku",
          "Przekuwać wnioski z projektów w mocniejsze case studies",
        ],
      },
      {
        title: "2. Rozwijać stack",
        description:
          "Stack technologiczny powinien pozostać praktyczny, nowoczesny i dopasowany do realnych potrzeb wdrożeniowych.",
        items: [
          "Regularnie oceniać wybór frameworka, stylowania i deploymentu",
          "Utrzymywać czystą i łatwą w rozwoju strukturę projektu",
          "Aktualizować narzędzia wtedy, gdy faktycznie poprawiają workflow",
        ],
      },
      {
        title: "3. Dopracowywać istniejące projekty",
        description:
          "Ukończony projekt nadal może zyskać dzięki polishowi, dostępności, wydajności i lepszej prezentacji.",
        items: [
          "Poprawiać detale UI, responsywność i jakość interakcji",
          "Zastępować preview realnymi screenshotami, gdy będą dostępne",
          "Utrzymywać case studies jako czytelne, konkretne i łatwe do oceny",
        ],
      },
      {
        title: "4. Budować dalej",
        description:
          "Nowe projekty powinny poszerzać portfolio o różne przypadki użycia, mocniejsze demo i pełniejsze doświadczenie frontendowe.",
        items: [
          "Dodawać projekty pokazujące różne umiejętności frontendowe",
          "Podpinać live demo i linki do kodu tam, gdzie to możliwe",
          "Traktować portfolio jako długoterminowy zapis postępów",
        ],
      },
    ],
    footerTitle: "Cel: uczyć się i być stale na bieżąco.",
    footerDescription:
      "Z-TECH ma rozwijać się razem z moimi umiejętnościami: przez nowe projekty, aktualizację stacku, świeże eksperymenty, lepsze case studies i ciągłe dopracowywanie produkcyjnego portfolio.",
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
