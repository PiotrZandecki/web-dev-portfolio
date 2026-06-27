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
    <section
      id="project-preview"
      aria-labelledby="project-mockups-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 zt-fade-up">
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
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/20"
          >
            <div className="border-b border-white/10 bg-slate-950/80 p-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src={mockup.imageSrc}
                  alt={mockup.title[locale]}
                  width={1200}
                  height={760}
                  sizes="(min-width: 1024px) 1152px, calc(100vw - 48px)"
                  className="aspect-1200/760 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.035] group-hover:-translate-y-1"
                  priority={project.slug === "web-dev-portfolio"}
                />
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
          </li>
        ))}
      </ul>
    </section>
  );
}
