import { skillGroups } from "@/content/skills";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type SkillsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SkillsSection({ locale, dictionary }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.skillsSection.eyebrow}
        </p>

        <h2
          id="skills-heading"
          className="mt-4 text-4xl font-bold tracking-tight text-white"
        >
          {dictionary.skillsSection.title}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          {dictionary.skillsSection.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold text-white">
              {group.title[locale]}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {group.description[locale]}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
