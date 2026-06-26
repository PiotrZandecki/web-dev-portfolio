import { aboutCopy, aboutHighlights, aboutPrinciples } from "@/content/about";
import { Locale } from "@/types/locale";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const copy = aboutCopy[locale];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="about-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            {copy.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {copy.description}
          </p>

          <p className="mt-5 text-base leading-7 text-slate-400">
            {copy.secondaryDescription}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((highlight) => (
              <div
                key={highlight.label.en}
                className="rounded-2xl border border-white/10 bg-slate-900 p-4"
              >
                <dt className="text-xs text-slate-500">
                  {highlight.label[locale]}
                </dt>

                <dd className="mt-2 text-lg font-semibold text-white">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-6">
          <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {copy.cardTitle}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {copy.cardDescription}
            </p>
          </article>

          <div className="grid gap-4">
            {aboutPrinciples.map((principle) => (
              <article
                key={principle.title.en}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {principle.title[locale]}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {principle.description[locale]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
