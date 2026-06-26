import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const heroStats = {
  en: [
    { value: "3+", label: "Portfolio projects" },
    { value: "2", label: "Languages" },
    { value: "Next.js", label: "Main stack" },
  ],
  pl: [
    { value: "3+", label: "Projekty w portfolio" },
    { value: "2", label: "Języki" },
    { value: "Next.js", label: "Główny stack" },
  ],
};

const heroCardCopy = {
  en: {
    label: "Portfolio structure",
    title: "Project hub built for growth",
    description:
      "Every smaller project has its own page, case study section and dedicated space for a future live preview.",
    items: ["Bilingual routing", "Dynamic project pages", "Embedded previews"],
  },
  pl: {
    label: "Struktura portfolio",
    title: "Hub projektów gotowy do rozwoju",
    description:
      "Każdy mniejszy projekt ma własną podstronę, sekcję case study i miejsce na przyszły podgląd live.",
    items: [
      "Dwujęzyczny routing",
      "Dynamiczne strony projektów",
      "Osadzone podglądy",
    ],
  },
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const stats = heroStats[locale];
  const cardCopy = heroCardCopy[locale];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:py-28">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {dictionary.home.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            {dictionary.home.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {dictionary.home.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/projects`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-300"
            >
              {dictionary.common.viewProjects}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {dictionary.common.contactMe}
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <dt className="text-sm text-slate-400">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside
          aria-label={`${siteConfig.name} portfolio structure`}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">{cardCopy.label}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {cardCopy.title}
                </h2>
              </div>

              <div aria-hidden="true" className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              {cardCopy.description}
            </p>

            <ul className="mt-8 grid gap-3">
              {cardCopy.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white/5 p-4 text-sm text-slate-300"
                >
                  <span>{item}</span>
                  <span aria-hidden="true" className="text-cyan-300">
                    ✓
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-cyan-400/10 p-4">
              <p className="text-sm text-cyan-300">
                {dictionary.home.focusLabel}
              </p>
              <p className="mt-2 font-semibold text-white">
                {dictionary.home.focusTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {dictionary.home.focusDescription}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
