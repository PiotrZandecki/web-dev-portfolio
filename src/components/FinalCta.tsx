import Link from "next/link";
import { siteConfig } from "@/config/site";
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
    projectsLabel: string;
    contactLabel: string;
  }
> = {
  en: {
    eyebrow: "Next step",
    title: "Need a clean frontend project or business website?",
    description:
      "Z-TECH is focused on practical web development: clear structure, responsive interfaces, bilingual content and deployment-ready frontend projects.",
    projectsLabel: "View projects",
    contactLabel: "Contact Z-TECH",
  },
  pl: {
    eyebrow: "Kolejny krok",
    title: "Potrzebujesz czystego projektu frontendowego albo strony firmowej?",
    description:
      "Z-TECH skupia się na praktycznym web developmencie: czytelnej strukturze, responsywnych interfejsach, treściach dwujęzycznych i projektach gotowych do wdrożenia.",
    projectsLabel: "Zobacz projekty",
    contactLabel: "Skontaktuj się",
  },
};

export function FinalCta({ locale }: FinalCtaProps) {
  const copy = finalCtaCopy[locale];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-8 md:p-12">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-3xl"
        />

        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              {copy.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              {copy.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {copy.description}
            </p>

            <p className="mt-6 text-sm text-slate-500">{siteConfig.author}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/projects/`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {copy.projectsLabel}
            </Link>

            <Link
              href={`/${locale}/#contact`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {copy.contactLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
