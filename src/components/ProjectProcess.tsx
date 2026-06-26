import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectProcessProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectProcess({
  project,
  locale,
  dictionary,
}: ProjectProcessProps) {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.projectProcess.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {dictionary.projectProcess.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {dictionary.projectProcess.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {project.process.map((step, index) => (
          <article
            key={step.title.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
              {index + 1}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {step.title[locale]}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {step.description[locale]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
