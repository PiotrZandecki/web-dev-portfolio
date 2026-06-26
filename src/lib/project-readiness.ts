import { Project } from "@/content/projects";
import { getResolvedProjectLinks } from "@/lib/project-links";

export type ProjectReadiness = {
  score: number;
  readyChecks: number;
  totalChecks: number;
  hasLiveDemo: boolean;
  hasSourceCode: boolean;
  hasVisualPreview: boolean;
  hasTechnicalStack: boolean;
  hasCaseStudy: boolean;
  hasRoadmap: boolean;
};

export type PortfolioReadinessSummary = {
  totalProjects: number;
  liveProjects: number;
  sourceAvailableProjects: number;
  visualPreviewProjects: number;
  averageReadiness: number;
};

export function getProjectReadiness(project: Project): ProjectReadiness {
  const resolvedLinks = getResolvedProjectLinks(project);

  const checks = [
    true,
    resolvedLinks.hasLiveUrl,
    resolvedLinks.hasSourceUrl,
    project.mockups.length > 0,
    project.technologies.length > 0,
    project.nextSteps.en.length > 0 || project.nextSteps.pl.length > 0,
  ];

  const readyChecks = checks.filter(Boolean).length;
  const totalChecks = checks.length;

  return {
    score: Math.round((readyChecks / totalChecks) * 100),
    readyChecks,
    totalChecks,
    hasLiveDemo: resolvedLinks.hasLiveUrl,
    hasSourceCode: resolvedLinks.hasSourceUrl,
    hasVisualPreview: project.mockups.length > 0,
    hasTechnicalStack: project.technologies.length > 0,
    hasCaseStudy: true,
    hasRoadmap:
      project.nextSteps.en.length > 0 || project.nextSteps.pl.length > 0,
  };
}

export function getPortfolioReadinessSummary(
  projects: Project[],
): PortfolioReadinessSummary {
  const readinessItems = projects.map((project) =>
    getProjectReadiness(project),
  );

  const totalProjects = projects.length;
  const totalReadiness = readinessItems.reduce(
    (sum, readiness) => sum + readiness.score,
    0,
  );

  return {
    totalProjects,
    liveProjects: readinessItems.filter((item) => item.hasLiveDemo).length,
    sourceAvailableProjects: readinessItems.filter((item) => item.hasSourceCode)
      .length,
    visualPreviewProjects: readinessItems.filter(
      (item) => item.hasVisualPreview,
    ).length,
    averageReadiness:
      totalProjects > 0 ? Math.round(totalReadiness / totalProjects) : 0,
  };
}
