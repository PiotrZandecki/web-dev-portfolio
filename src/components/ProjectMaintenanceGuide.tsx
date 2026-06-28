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
    title: "A project system built for clarity, scale and long-term use.",
    description:
      "Z-TECH projects are structured as professional case studies and maintainable frontend products. The focus is on clear documentation, reliable implementation, reusable patterns and deployment-ready presentation.",
    sections: [
      {
        title: "1. Structured delivery",
        description:
          "Each project is organized around a clear scope, reusable content structure and a presentation flow that makes the work easy to review.",
        items: [
          "Define project scope, goals and interface areas",
          "Use consistent content models and reusable sections",
          "Present each project as a complete case study",
        ],
      },
      {
        title: "2. Maintainable frontend",
        description:
          "The technical structure is designed to keep interfaces predictable, scalable and easier to extend after release.",
        items: [
          "Keep components focused, reusable and easy to update",
          "Separate content, configuration and UI logic",
          "Use stable frontend patterns across pages and sections",
        ],
      },
      {
        title: "3. Production quality",
        description:
          "Projects are prepared with deployment, responsiveness, accessibility and long-term presentation quality in mind.",
        items: [
          "Check responsive layouts across key breakpoints",
          "Keep pages readable, accessible and easy to navigate",
          "Prepare live links, source links and release notes",
        ],
      },
      {
        title: "4. Continuous improvement",
        description:
          "Finished projects can be refined with better content, stronger visuals, updated assets and clearer technical context.",
        items: [
          "Improve case studies with stronger project evidence",
          "Update previews, links and technical notes when needed",
          "Keep the portfolio aligned with current frontend standards",
        ],
      },
    ],
    footerTitle:
      "The goal: professional frontend delivery that stays maintainable.",
    footerDescription:
      "Z-TECH is built around clear project presentation, structured implementation and practical maintenance. The portfolio is designed to support new work, stronger case studies and reliable production updates without losing consistency.",
  },
  pl: {
    eyebrow: "System utrzymania",
    title:
      "System projektów zbudowany pod czytelność, skalowanie i długoterminowe użycie.",
    description:
      "Projekty Z-TECH są przygotowywane jako profesjonalne case studies i utrzymywalne realizacje frontendowe. Główny nacisk jest położony na czytelną dokumentację, stabilną implementację, wzorce wielokrotnego użytku i prezentację gotową pod wdrożenie.",
    sections: [
      {
        title: "1. Uporządkowana realizacja",
        description:
          "Każdy projekt jest organizowany wokół jasnego zakresu, spójnej struktury treści i sposobu prezentacji, który ułatwia ocenę wykonanej pracy.",
        items: [
          "Określenie zakresu, celów i kluczowych obszarów interfejsu",
          "Stosowanie spójnych modeli treści i sekcji wielokrotnego użytku",
          "Prezentowanie projektu jako kompletnego case study",
        ],
      },
      {
        title: "2. Utrzymywalny frontend",
        description:
          "Struktura techniczna jest projektowana tak, aby interfejsy były przewidywalne, skalowalne i łatwiejsze do dalszej rozbudowy po wdrożeniu.",
        items: [
          "Utrzymywanie komponentów jako czytelnych i łatwych do aktualizacji",
          "Oddzielanie treści, konfiguracji i logiki interfejsu",
          "Stosowanie stabilnych wzorców frontendowych między sekcjami",
        ],
      },
      {
        title: "3. Jakość produkcyjna",
        description:
          "Projekty są przygotowywane z myślą o wdrożeniu, responsywności, dostępności i długoterminowej jakości prezentacji.",
        items: [
          "Sprawdzanie layoutów responsywnych na kluczowych breakpointach",
          "Utrzymywanie stron jako czytelnych, dostępnych i łatwych w nawigacji",
          "Przygotowanie linków live, linków do kodu i notatek release",
        ],
      },
      {
        title: "4. Ciągłe usprawnienia",
        description:
          "Gotowe projekty mogą być dopracowywane przez mocniejsze treści, lepsze materiały wizualne, aktualne assety i pełniejszy kontekst techniczny.",
        items: [
          "Wzmacnianie case studies przez konkretniejsze dowody realizacji",
          "Aktualizowanie preview, linków i notatek technicznych w razie potrzeby",
          "Utrzymywanie portfolio zgodnie z aktualnymi standardami frontendu",
        ],
      },
    ],
    footerTitle:
      "Cel: profesjonalna realizacja frontendowa, która pozostaje utrzymywalna.",
    footerDescription:
      "Z-TECH opiera się na czytelnej prezentacji projektów, uporządkowanej implementacji i praktycznym utrzymaniu. Portfolio jest przygotowane tak, aby wspierać nowe realizacje, mocniejsze case studies i stabilne aktualizacje produkcyjne bez utraty spójności.",
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
