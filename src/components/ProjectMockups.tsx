import Image from "next/image";
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
    <section aria-labelledby="project-mockups-heading" className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.projectMockups.eyebrow}
        </p>

        <h2
          id="project-mockups-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-white"
        >
          {dictionary.projectMockups.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {dictionary.projectMockups.description}
        </p>
      </div>

      <ul className="grid gap-6">
        {project.mockups.map((mockup) => (
          <li
            key={mockup.title.en}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="border-b border-white/10 bg-slate-950/80 p-4">
              <Image
                src={mockup.imageSrc}
                alt={mockup.title[locale]}
                width={1200}
                height={760}
                sizes="(min-width: 1024px) 1152px, calc(100vw - 48px)"
                className="aspect-1200/760 w-full rounded-2xl border border-white/10 object-cover"
                priority={project.slug === "web-dev-portfolio"}
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {mockup.title[locale]}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {mockup.description[locale]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
