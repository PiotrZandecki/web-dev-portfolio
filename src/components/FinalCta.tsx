import Link from "next/link";
import { Locale } from "@/types/locale";

type FinalCtaProps = {
  locale: Locale;
};

const finalCtaCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  }
> = {
  en: {
    eyebrow: "Next step",
    title: "Have a frontend project in mind?",
    description:
      "Let’s talk about a practical website, portfolio, landing page or frontend interface that can be built, deployed and maintained with a clear structure.",
    primaryCta: "Contact Z-TECH",
    secondaryCta: "View projects",
  },
  pl: {
    eyebrow: "Następny krok",
    title: "Masz na myśli projekt frontendowy?",
    description:
      "Porozmawiajmy o praktycznej stronie, portfolio, landing page’u albo interfejsie frontendowym, który można zbudować, wdrożyć i utrzymywać w czytelnej strukturze.",
    primaryCta: "Kontakt z Z-TECH",
    secondaryCta: "Zobacz projekty",
  },
};

export function FinalCta({ locale }: FinalCtaProps) {
  const copy = finalCtaCopy[locale];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-8 md:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl zt-soft-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-cyan-400/70 via-cyan-300/20 to-transparent"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              {copy.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {copy.title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={`/${locale}/contact/#contact-top`}
              className="zt-button-press group/link inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-300"
            >
              {copy.primaryCta}
              <span
                aria-hidden="true"
                className="ml-2 transition group-hover/link:translate-x-0.5"
              >
                →
              </span>
            </Link>

            <Link
              href={`/${locale}/projects/`}
              className="zt-button-press group/link inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {copy.secondaryCta}
              <span
                aria-hidden="true"
                className="ml-2 transition group-hover/link:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
