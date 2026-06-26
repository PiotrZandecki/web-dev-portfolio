import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {dictionary.home.eyebrow}
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            {dictionary.home.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {dictionary.home.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/projects`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {dictionary.common.viewProjects}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              {dictionary.common.contactMe}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30">
          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              {dictionary.home.focusLabel}
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white">
              {dictionary.home.focusTitle}
            </h2>

            <p className="mt-4 text-slate-300">
              {dictionary.home.focusDescription}
            </p>

            <div className="mt-8 grid gap-3 text-sm text-slate-300">
              {dictionary.home.focusItems.map((item) => (
                <div key={item} className="rounded-xl bg-white/5 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {dictionary.home.aboutEyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            {dictionary.home.aboutTitle}
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {dictionary.home.aboutDescription}
          </p>
        </div>
      </section>

      <SkillsSection locale={locale} dictionary={dictionary} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              {dictionary.home.projectsEyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
              {dictionary.home.projectsTitle}
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              {dictionary.home.projectsDescription}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            {dictionary.common.viewProjects}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          ))}
        </div>
      </section>

      <ContactCta locale={locale} dictionary={dictionary} />
    </main>
  );
}
