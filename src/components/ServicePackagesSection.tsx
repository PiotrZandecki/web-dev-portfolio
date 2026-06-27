import Link from "next/link";
import { servicePackages } from "@/content/servicePackages";
import { Locale } from "@/types/locale";

type ServicePackagesSectionProps = {
  locale: Locale;
};

const servicePackagesCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    bestForLabel: string;
    includesLabel: string;
    ctaLabel: string;
  }
> = {
  en: {
    eyebrow: "Service packages",
    title: "Choose the type of web project you need.",
    description:
      "These packages are not rigid pricing plans. They describe the kind of projects Z-TECH is currently focused on building.",
    bestForLabel: "Best for",
    includesLabel: "Includes",
    ctaLabel: "Discuss this package",
  },
  pl: {
    eyebrow: "Pakiety usług",
    title: "Wybierz typ projektu webowego, którego potrzebujesz.",
    description:
      "To nie są sztywne cenniki. Te pakiety opisują typy projektów, na których Z-TECH aktualnie skupia się najbardziej.",
    bestForLabel: "Najlepsze dla",
    includesLabel: "Zawiera",
    ctaLabel: "Omów ten pakiet",
  },
};

export function ServicePackagesSection({
  locale,
}: ServicePackagesSectionProps) {
  const copy = servicePackagesCopy[locale];

  return (
    <section
      aria-labelledby="service-packages-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2
          id="service-packages-heading"
          className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          {copy.title}
        </h2>

        <p className="mt-5 max-w-2xl text-slate-300">{copy.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {servicePackages.map((servicePackage, index) => (
          <article
            key={servicePackage.name.en}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/20"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            >
              <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-cyan-400/60 via-cyan-300/20 to-transparent" />
            </div>

            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 ring-1 ring-cyan-400/10 transition group-hover:bg-cyan-400/15 group-hover:ring-cyan-400/25">
                  {servicePackage.tag[locale]}
                </p>

                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-xs font-bold text-slate-500 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white transition group-hover:text-cyan-50">
                {servicePackage.name[locale]}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {servicePackage.description[locale]}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4 transition group-hover:border-cyan-400/20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {copy.bestForLabel}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {servicePackage.bestFor[locale]}
                </p>
              </div>

              <div className="mt-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {copy.includesLabel}
                </p>

                <ul className="mt-4 space-y-3">
                  {servicePackage.includes[locale].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-300 transition group-hover:bg-cyan-400/15"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${locale}/contact/#contact-top`}
                className="zt-button-press group/link mt-8 inline-flex w-fit items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {copy.ctaLabel}
                <span
                  aria-hidden="true"
                  className="ml-2 transition group-hover/link:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
