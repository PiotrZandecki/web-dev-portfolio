import { services } from "@/content/services";
import { Locale } from "@/types/locale";

type ServicesSectionProps = {
  locale: Locale;
};

const servicesCopy = {
  en: {
    eyebrow: "Services",
    title: "What Z-TECH can help with",
    description:
      "A focused set of web development services built around practical frontend work, clear presentation and project-based delivery.",
  },
  pl: {
    eyebrow: "Usługi",
    title: "W czym może pomóc Z-TECH",
    description:
      "Skupiony zestaw usług web development opartych na praktycznej pracy frontendowej, czytelnej prezentacji i realizacji projektowej.",
  },
};

export function ServicesSection({ locale }: ServicesSectionProps) {
  const copy = servicesCopy[locale];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2
          id="services-heading"
          className="mt-4 text-4xl font-bold tracking-tight text-white"
        >
          {copy.title}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">{copy.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title.en}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {service.title[locale]}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
              {service.description[locale]}
            </p>

            <ul className="mt-6 space-y-3">
              {service.points[locale].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-sm text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-cyan-400"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
