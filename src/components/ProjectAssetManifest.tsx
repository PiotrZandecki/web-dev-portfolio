import Image from "next/image";
import { Project } from "@/content/projects";
import { projectReleaseDetails } from "@/content/projectReleaseDetails";
import { Locale } from "@/types/locale";

type ProjectAssetManifestProps = {
  project: Project;
  locale: Locale;
};

const assetCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    assetPath: string;
    assetType: string;
    dimensions: string;
    usage: string;
    usageItems: string[];
    replacementTitle: string;
    replacementDescription: string;
  }
> = {
  en: {
    eyebrow: "Asset manifest",
    title: "Visual preview assets",
    description:
      "A technical overview of the preview assets used to present this project across cards, featured sections and case study pages.",
    assetPath: "Asset path",
    assetType: "Asset type",
    dimensions: "Designed size",
    usage: "Used in",
    usageItems: [
      "Project cards",
      "Featured project section",
      "Case study hero",
      "Visual preview section",
    ],
    replacementTitle: "Future screenshot replacement",
    replacementDescription:
      "Designed SVG previews can be replaced with real screenshots once the project has a final live deployment.",
  },
  pl: {
    eyebrow: "Manifest assetów",
    title: "Assety podglądu wizualnego",
    description:
      "Techniczny przegląd assetów preview używanych do prezentacji projektu w kartach, sekcjach featured i podstronach case study.",
    assetPath: "Ścieżka assetu",
    assetType: "Typ assetu",
    dimensions: "Projektowany rozmiar",
    usage: "Używane w",
    usageItems: [
      "Karty projektów",
      "Sekcja featured project",
      "Hero case study",
      "Sekcja visual preview",
    ],
    replacementTitle: "Przyszła wymiana na screenshot",
    replacementDescription:
      "Zaprojektowane preview SVG można zastąpić realnymi screenshotami, gdy projekt będzie miał finalne wdrożenie live.",
  },
};

export function ProjectAssetManifest({
  project,
  locale,
}: ProjectAssetManifestProps) {
  const copy = assetCopy[locale];
  const releaseDetails = projectReleaseDetails[project.slug];

  return (
    <section
      id="project-assets"
      aria-labelledby="project-assets-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-assets-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-6">
        {project.mockups.map((mockup) => (
          <article
            key={mockup.imageSrc}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-white/10 bg-slate-950/80 p-4 lg:border-b-0 lg:border-r">
                <Image
                  src={mockup.imageSrc}
                  alt={mockup.title[locale]}
                  width={1200}
                  height={760}
                  sizes="(min-width: 1024px) 620px, calc(100vw - 48px)"
                  className="aspect-1200/760 w-full rounded-2xl border border-white/10 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {mockup.title[locale]}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {mockup.description[locale]}
                </p>

                <dl className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-slate-950 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {copy.assetPath}
                    </dt>

                    <dd className="mt-2 break-all font-mono text-sm text-slate-300">
                      {mockup.imageSrc}
                    </dd>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-950 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {copy.assetType}
                      </dt>

                      <dd className="mt-2 text-sm text-slate-300">
                        SVG preview
                      </dd>
                    </div>

                    <div className="rounded-2xl bg-slate-950 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {copy.dimensions}
                      </dt>

                      <dd className="mt-2 text-sm text-slate-300">
                        1200 × 760
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {copy.usage}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {copy.usageItems.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {releaseDetails ? (
                  <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/6 p-4">
                    <h4 className="font-semibold text-white">
                      {releaseDetails.visualPreview.label[locale]}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {releaseDetails.visualPreview.description[locale]}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {copy.replacementTitle}
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          {copy.replacementDescription}
        </p>
      </div>
    </section>
  );
}
