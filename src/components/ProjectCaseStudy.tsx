import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectCaseStudyProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectCaseStudy({
  project,
  locale,
  dictionary,
}: ProjectCaseStudyProps) {
  const sections = [
    {
      title: dictionary.projectSections.features,
      items: project.features[locale],
    },
    {
      title: dictionary.projectSections.technicalDecisions,
      items: project.technicalDecisions[locale],
    },
    {
      title: dictionary.projectSections.challenges,
      items: project.challenges[locale],
    },
    {
      title: dictionary.projectSections.nextSteps,
      items: project.nextSteps[locale],
    },
  ];

  return (
    <section
      aria-labelledby="case-study-heading"
      className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        {dictionary.projectSections.caseStudy}
      </p>

      <div className="mt-4 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <h2
            id="case-study-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {dictionary.projectSections.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {dictionary.projectSections.description}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {section.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {section.items.map((item) => (
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
          </article>
        ))}
      </div>
    </section>
  );
}
