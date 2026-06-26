import { techStackGroups } from "@/content/techStack";
import { Locale } from "@/types/locale";

type TechStackSectionProps = {
  locale: Locale;
};

const techStackCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    toolsLabel: string;
    outcomesLabel: string;
  }
> = {
  en: {
    eyebrow: "Technology stack",
    title: "The tools behind the Z-TECH portfolio.",
    description:
      "A practical frontend stack focused on clean implementation, reusable components, bilingual structure and deployment-ready delivery.",
    toolsLabel: "Tools",
    outcomesLabel: "What it supports",
  },
  pl: {
    eyebrow: "Stack technologiczny",
    title: "Narzędzia stojące za portfolio Z-TECH.",
    description:
      "Praktyczny stack frontendowy skupiony na czystej implementacji, komponentach wielokrotnego użytku, dwujęzycznej strukturze i gotowości do wdrożenia.",
    toolsLabel: "Narzędzia",
    outcomesLabel: "Co wspiera",
  },
};

export function TechStackSection({ locale }: TechStackSectionProps) {
  const copy = techStackCopy[locale];

  return (
    <section
      id="stack"
      aria-labelledby="tech-stack-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="tech-stack-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {techStackGroups.map((group) => (
          <article
            key={group.title.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {group.title[locale]}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {group.description[locale]}
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {copy.toolsLabel}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {copy.outcomesLabel}
                </p>

                <ul className="mt-4 space-y-3">
                  {group.outcomes[locale].map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span aria-hidden="true" className="text-cyan-300">
                        ✓
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
