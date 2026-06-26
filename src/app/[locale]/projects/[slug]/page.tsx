import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";
import { locales } from "@/types/locale";

type ProjectDetailsPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href={`/${locale}/projects`}
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← {dictionary.common.backToProjects}
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {dictionary.common.projectDetails}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.description[locale]}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {dictionary.common.liveDemo}
              </a>
            ) : null}

            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                {dictionary.common.sourceCode}
              </a>
            ) : null}
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div>
            <p className="text-sm text-slate-400">{dictionary.common.status}</p>
            <p className="mt-2 font-semibold text-white">
              {dictionary.status[project.status]}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-400">
              {dictionary.common.technologies}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-400">
              {dictionary.common.highlights}
            </p>

            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              {project.highlights[locale].map((highlight) => (
                <li key={highlight} className="rounded-xl bg-white/5 p-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
