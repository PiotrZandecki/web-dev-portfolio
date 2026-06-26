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
        {servicePackages.map((servicePackage) => (
          <article
            key={servicePackage.name.en}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <p className="mb-4 w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {servicePackage.tag[locale]}
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {servicePackage.name[locale]}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {servicePackage.description[locale]}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-4">
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
                    <span aria-hidden="true" className="text-cyan-300">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/${locale}/contact/`}
              className="mt-8 inline-flex w-fit rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {copy.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
