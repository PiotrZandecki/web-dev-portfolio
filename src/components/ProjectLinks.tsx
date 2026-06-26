import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";

type ProjectLinksProps = {
  project: Project;
  dictionary: Dictionary;
};

function getExternalLinkProps(href: string) {
  const isEmailLink = href.startsWith("mailto:");

  return {
    target: isEmailLink ? undefined : "_blank",
    rel: isEmailLink ? undefined : "noreferrer",
  };
}

export function ProjectLinks({ project, dictionary }: ProjectLinksProps) {
  const links = [
    {
      label: dictionary.common.liveDemo,
      description: dictionary.projectLinks.liveDescription,
      href: project.liveUrl,
    },
    {
      label: dictionary.common.sourceCode,
      description: dictionary.projectLinks.sourceDescription,
      href: project.sourceUrl,
    },
  ];

  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.projectLinks.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {dictionary.projectLinks.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {dictionary.projectLinks.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {links.map((link) => {
          const hasHref = Boolean(link.href);

          return (
            <article
              key={link.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {link.label}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {link.description}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    hasHref
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {hasHref
                    ? dictionary.projectLinks.available
                    : dictionary.projectLinks.notAvailable}
                </span>
              </div>

              {link.href ? (
                <a
                  href={link.href}
                  {...getExternalLinkProps(link.href)}
                  aria-label={`${dictionary.projectLinks.openLink}: ${link.label}`}
                  className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {dictionary.projectLinks.openLink}
                </a>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-slate-900 p-4 text-sm leading-6 text-slate-400">
                  {dictionary.projectLinks.placeholder}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
