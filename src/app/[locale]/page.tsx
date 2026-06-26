import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { FeaturedProject } from "@/components/FeaturedProject";
import { HeroSection } from "@/components/HeroSection";
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
  const [featuredProject, ...otherProjects] = projects;

  return (
    <main>
      <HeroSection locale={locale} dictionary={dictionary} />

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

        <FeaturedProject
          project={featuredProject}
          locale={locale}
          dictionary={dictionary}
        />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
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
