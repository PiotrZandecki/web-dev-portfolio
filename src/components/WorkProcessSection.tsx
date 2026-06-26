import { workProcessSteps } from "@/content/workProcess";
import { Locale } from "@/types/locale";

type WorkProcessSectionProps = {
  locale: Locale;
};

const workProcessCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  en: {
    eyebrow: "Process",
    title: "How Z-TECH approaches web projects",
    description:
      "A simple workflow focused on understanding the goal, building a clear structure, implementing the interface and preparing it for deployment.",
  },
  pl: {
    eyebrow: "Proces",
    title: "Jak Z-TECH podchodzi do projektów webowych",
    description:
      "Prosty workflow skupiony na zrozumieniu celu, zbudowaniu czytelnej struktury, implementacji interfejsu i przygotowaniu go do wdrożenia.",
  },
};

export function WorkProcessSection({ locale }: WorkProcessSectionProps) {
  const copy = workProcessCopy[locale];

  return (
    <section
      id="process"
      aria-labelledby="work-process-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2
          id="work-process-heading"
          className="mt-4 text-4xl font-bold tracking-tight text-white"
        >
          {copy.title}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">{copy.description}</p>
      </div>

      <ol className="grid gap-6 lg:grid-cols-4">
        {workProcessSteps.map((step, index) => (
          <li
            key={step.title.en}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
              {index + 1}
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
              {step.title[locale]}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
              {step.description[locale]}
            </p>

            <ul className="mt-6 space-y-2">
              {step.details[locale].map((detail) => (
                <li
                  key={detail}
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-slate-300"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
