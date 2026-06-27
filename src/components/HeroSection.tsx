import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const heroCopy = {
  en: {
    availability: "Available for frontend-focused web projects",
    title: "I build clean, bilingual websites and frontend interfaces.",
    description:
      "Z-TECH is a personal web development brand focused on modern business websites, portfolio systems and maintainable frontend projects built with Next.js, TypeScript and Tailwind CSS.",
    primaryCta: "View projects",
    secondaryCta: "View services",
    contactCta: "Contact Z-TECH",
    cardEyebrow: "Production-ready frontend",
    cardTitle: "Websites that are easy to present, deploy and maintain.",
    cardDescription:
      "A practical approach to frontend delivery: clear structure, reusable components, bilingual content, SEO basics and static deployment on Cloudflare Pages.",
    highlights: [
      "Business websites",
      "Portfolio systems",
      "Bilingual pages",
      "Production deployment",
    ],
    stackLabel: "Core stack",
    deliveryLabel: "Deployment",
    deliveryValue: "Cloudflare Pages",
  },
  pl: {
    availability: "Dostępny pod projekty webowe skupione na frontendzie",
    title: "Tworzę czyste, dwujęzyczne strony i interfejsy frontendowe.",
    description:
      "Z-TECH to osobista marka web developmentowa skupiona na nowoczesnych stronach firmowych, systemach portfolio i łatwych w utrzymaniu projektach frontendowych budowanych w Next.js, TypeScript i Tailwind CSS.",
    primaryCta: "Zobacz projekty",
    secondaryCta: "Zobacz usługi",
    contactCta: "Kontakt z Z-TECH",
    cardEyebrow: "Frontend gotowy produkcyjnie",
    cardTitle: "Strony łatwe do pokazania, wdrożenia i utrzymania.",
    cardDescription:
      "Praktyczne podejście do frontendu: czytelna struktura, komponenty wielokrotnego użytku, treści dwujęzyczne, podstawy SEO i statyczny deployment na Cloudflare Pages.",
    highlights: [
      "Strony firmowe",
      "Systemy portfolio",
      "Strony dwujęzyczne",
      "Deployment produkcyjny",
    ],
    stackLabel: "Główny stack",
    deliveryLabel: "Wdrożenie",
    deliveryValue: "Cloudflare Pages",
  },
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const copy = heroCopy[locale];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-900/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {copy.availability}
          </p>

          <h1
            id="hero-heading"
            className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            {copy.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {copy.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/projects/`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-300"
            >
              {copy.primaryCta}
            </Link>

            <Link
              href={`/${locale}/services/`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {copy.secondaryCta}
            </Link>

            <Link
              href={`/${locale}/contact/`}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15"
            >
              {copy.contactCta}
            </Link>
          </div>

          <dl className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-sm text-slate-400">{copy.stackLabel}</dt>
              <dd className="mt-1 text-xl font-bold text-white">Next.js</dd>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-sm text-slate-400">
                {dictionary.projectsSummary.languages}
              </dt>
              <dd className="mt-1 text-xl font-bold text-white">PL / EN</dd>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-sm text-slate-400">{copy.deliveryLabel}</dt>
              <dd className="mt-1 text-xl font-bold text-white">
                {copy.deliveryValue}
              </dd>
            </div>
          </dl>
        </div>

        <aside
          aria-label={`${siteConfig.name} project focus`}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  {copy.cardEyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {copy.cardTitle}
                </h2>
              </div>

              <div aria-hidden="true" className="hidden gap-2 sm:flex">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              {copy.cardDescription}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="mr-3 inline-block h-2 w-2 rounded-full bg-cyan-400"
                  />
                  {item}
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
