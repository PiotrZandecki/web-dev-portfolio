import { siteConfig } from "@/config/site";
import { Project } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export type ResolvedProjectLinks = {
  liveUrl: string;
  sourceUrl: string;
  embedUrl: string;
  hasLiveUrl: boolean;
  hasSourceUrl: boolean;
  hasEmbedUrl: boolean;
};

export function getResolvedProjectLinks(
  project: Project,
): ResolvedProjectLinks {
  const isPortfolioProject = project.slug === "web-dev-portfolio";

  const liveUrl = project.liveUrl || (isPortfolioProject ? getSiteUrl() : "");
  const sourceUrl =
    project.sourceUrl || (isPortfolioProject ? siteConfig.repositoryUrl : "");

  const embedUrl = project.embedUrl || liveUrl;

  return {
    liveUrl,
    sourceUrl,
    embedUrl,
    hasLiveUrl: Boolean(liveUrl),
    hasSourceUrl: Boolean(sourceUrl),
    hasEmbedUrl: Boolean(embedUrl),
  };
}
