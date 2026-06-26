import { productionChecklistGroups } from "@/content/siteProduction";
import { Locale } from "@/types/locale";

type SiteProductionChecklistProps = {
  locale: Locale;
};

const siteProductionCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    statusLabel: string;
    statusValue: string;
  }
> = {
  en: {
    eyebrow: "Production readiness",
    title: "The portfolio is structured for release and maintenance.",
    description:
      "This checklist summarizes the technical layers that make the site ready to maintain, extend and use as a production portfolio.",
    statusLabel: "Current status",
    statusValue: "Ready for maintenance",
  },
  pl: {
    eyebrow: "Gotowość produkcyjna",
    title: "Portfolio jest przygotowane pod release i utrzymanie.",
    description:
      "Ta checklista podsumowuje techniczne warstwy, które sprawiają, że strona jest gotowa do utrzymania, rozbudowy i używania jako produkcyjne portfolio.",
    statusLabel: "Aktualny status",
    statusValue: "Gotowe do utrzymania",
  },
};

export function SiteProductionChecklist({
  locale,
}: SiteProductionChecklistProps) {
  const copy = siteProductionCopy[locale];

  return (
    <section
      id="production-readiness"
      aria-labelledby="production-readiness-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="production-readiness-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            {copy.title}
          </h2>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6 lg:justify-self-end">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {copy.statusLabel}
          </p>

          <p className="mt-3 text-2xl font-bold tracking-tight text-white">
            {copy.statusValue}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            {copy.description}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {productionChecklistGroups.map((group) => (
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

            <ul className="mt-6 grid gap-3">
              {group.items[locale].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-slate-300"
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
    </section>
  );
}
