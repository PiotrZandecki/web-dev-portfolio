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
      title: dictionary.projectSections.whatILearned,
      items: project.whatILearned[locale],
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
    <section aria-labelledby="project-case-study-heading" className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.projectSections.caseStudy}
        </p>

        <h2
          id="project-case-study-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-white"
        >
          {dictionary.projectSections.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {dictionary.projectSections.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold text-white">
              {section.title}
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {section.items.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-900 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
