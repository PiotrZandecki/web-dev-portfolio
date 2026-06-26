import { valuePropositions } from "@/content/valuePropositions";
import { Locale } from "@/types/locale";

type ValuePropositionSectionProps = {
  locale: Locale;
};

const valuePropositionCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  en: {
    eyebrow: "Why Z-TECH",
    title: "Built for clarity, usability and deployment.",
    description:
      "The goal is to create web projects that are not only visually clean, but also structured, maintainable and ready to be published.",
  },
  pl: {
    eyebrow: "Dlaczego Z-TECH",
    title: "Budowane pod czytelność, użyteczność i wdrożenie.",
    description:
      "Celem jest tworzenie projektów webowych, które nie tylko wyglądają czysto, ale też mają dobrą strukturę, są utrzymywalne i gotowe do publikacji.",
  },
};

export function ValuePropositionSection({
  locale,
}: ValuePropositionSectionProps) {
  const copy = valuePropositionCopy[locale];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {valuePropositions.map((item) => (
          <article
            key={item.title.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div
              aria-hidden="true"
              className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"
            >
              ✓
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white">
              {item.title[locale]}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description[locale]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
