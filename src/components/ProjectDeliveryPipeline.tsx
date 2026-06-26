import { Locale } from "@/types/locale";

type ProjectDeliveryPipelineProps = {
  locale: Locale;
};

const pipelineCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
      items: string[];
    }[];
  }
> = {
  en: {
    eyebrow: "Delivery pipeline",
    title: "How projects move from idea to portfolio-ready case study.",
    description:
      "This portfolio is designed around repeatable project delivery: define the idea, build the interface, document technical decisions and connect live/source links when available.",
    steps: [
      {
        title: "Plan",
        description:
          "Define what the project should show, what problem it solves and how it fits into the portfolio.",
        items: ["Project goal", "Scope", "Content model"],
      },
      {
        title: "Build",
        description:
          "Implement the frontend structure, reusable components and responsive UI.",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Document",
        description:
          "Turn the project into a case study with implementation notes, testing details and roadmap.",
        items: ["Case study", "Technical notes", "Testing review"],
      },
      {
        title: "Publish",
        description:
          "Connect live demo, source repository, visual preview and production metadata.",
        items: ["Live demo", "Source code", "SEO / deployment"],
      },
    ],
  },
  pl: {
    eyebrow: "Pipeline realizacji",
    title: "Jak projekty przechodzą od pomysłu do case study w portfolio.",
    description:
      "To portfolio jest oparte o powtarzalny proces realizacji: określenie pomysłu, budowę interfejsu, opis decyzji technicznych i podpięcie linków live/source, gdy są dostępne.",
    steps: [
      {
        title: "Plan",
        description:
          "Określenie, co projekt ma pokazywać, jaki problem rozwiązuje i jak pasuje do portfolio.",
        items: ["Cel projektu", "Zakres", "Model treści"],
      },
      {
        title: "Budowa",
        description:
          "Implementacja struktury frontendowej, komponentów reusable i responsywnego UI.",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Dokumentacja",
        description:
          "Zamiana projektu w case study z notatkami implementacyjnymi, testami i roadmapą.",
        items: ["Case study", "Notatki techniczne", "Przegląd testów"],
      },
      {
        title: "Publikacja",
        description:
          "Podpięcie live demo, repozytorium, preview wizualnego i metadanych produkcyjnych.",
        items: ["Live demo", "Kod źródłowy", "SEO / deployment"],
      },
    ],
  },
};

export function ProjectDeliveryPipeline({
  locale,
}: ProjectDeliveryPipelineProps) {
  const copy = pipelineCopy[locale];

  return (
    <section
      aria-labelledby="project-delivery-pipeline-heading"
      className="mt-16"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-delivery-pipeline-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <ol className="grid gap-6 lg:grid-cols-4">
        {copy.steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
              {index + 1}
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {step.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {step.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
