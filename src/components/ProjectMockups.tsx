import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectMockupsProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectMockups({
  project,
  locale,
  dictionary,
}: ProjectMockupsProps) {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.projectMockups.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {dictionary.projectMockups.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {dictionary.projectMockups.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {project.mockups.map((mockup) => (
          <article
            key={mockup.title.en}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="border-b border-white/10 bg-slate-950/80 p-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-slate-500">
                    {dictionary.projectMockups.browserLabel}
                  </span>
                </div>

                <div className="space-y-3 p-4">
                  <div className="h-3 w-2/3 rounded-full bg-cyan-400/30" />
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />

                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <div className="h-16 rounded-xl bg-cyan-400/10" />
                    <div className="h-16 rounded-xl bg-white/10" />
                    <div className="h-16 rounded-xl bg-white/10" />
                    <div className="h-16 rounded-xl bg-cyan-400/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {mockup.title[locale]}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {mockup.description[locale]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
