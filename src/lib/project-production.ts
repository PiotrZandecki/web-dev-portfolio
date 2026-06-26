import { Project } from "@/content/projects";
import { projectReleaseDetails } from "@/content/projectReleaseDetails";
import { projectTechnicalDetails } from "@/content/projectTechnicalDetails";
import { getResolvedProjectLinks } from "@/lib/project-links";

export type ProjectProductionCheck = {
  id: string;
  isReady: boolean;
};

export type ProjectProductionStatus = {
  portfolioReadyScore: number;
  deploymentReadyScore: number;
  portfolioReadyChecks: number;
  portfolioTotalChecks: number;
  deploymentReadyChecks: number;
  deploymentTotalChecks: number;
  hasProjectContent: boolean;
  hasVisualPreview: boolean;
  hasTechnicalDetails: boolean;
  hasReleaseDetails: boolean;
  hasImplementationNotes: boolean;
  hasTestingNotes: boolean;
  hasRoadmap: boolean;
  hasLiveDemo: boolean;
  hasSourceCode: boolean;
};

export type ProjectProductionSummary = {
  totalProjects: number;
  portfolioReadyProjects: number;
  deploymentReadyProjects: number;
  averagePortfolioReadiness: number;
  averageDeploymentReadiness: number;
};

export function getProjectProductionStatus(
  project: Project,
): ProjectProductionStatus {
  const links = getResolvedProjectLinks(project);
  const technicalDetails = projectTechnicalDetails[project.slug];
  const releaseDetails = projectReleaseDetails[project.slug];

  const hasProjectContent = Boolean(
    project.title &&
    project.description.en &&
    project.description.pl &&
    project.shortDescription.en &&
    project.shortDescription.pl,
  );

  const hasVisualPreview = project.mockups.length > 0;
  const hasTechnicalDetails = Boolean(technicalDetails);
  const hasReleaseDetails = Boolean(releaseDetails);
  const hasImplementationNotes = Boolean(
    technicalDetails?.implementationAreas.length,
  );
  const hasTestingNotes = Boolean(technicalDetails?.testingAreas.length);
  const hasRoadmap =
    project.nextSteps.en.length > 0 || project.nextSteps.pl.length > 0;

  const portfolioChecks: ProjectProductionCheck[] = [
    {
      id: "project-content",
      isReady: hasProjectContent,
    },
    {
      id: "visual-preview",
      isReady: hasVisualPreview,
    },
    {
      id: "technical-details",
      isReady: hasTechnicalDetails,
    },
    {
      id: "release-details",
      isReady: hasReleaseDetails,
    },
    {
      id: "implementation-notes",
      isReady: hasImplementationNotes,
    },
    {
      id: "testing-notes",
      isReady: hasTestingNotes,
    },
    {
      id: "roadmap",
      isReady: hasRoadmap,
    },
  ];

  const deploymentChecks: ProjectProductionCheck[] = [
    {
      id: "live-demo",
      isReady: links.hasLiveUrl,
    },
    {
      id: "source-code",
      isReady: links.hasSourceUrl,
    },
    {
      id: "embed-url",
      isReady: links.hasEmbedUrl,
    },
  ];

  const portfolioReadyChecks = portfolioChecks.filter(
    (check) => check.isReady,
  ).length;
  const deploymentReadyChecks = deploymentChecks.filter(
    (check) => check.isReady,
  ).length;

  return {
    portfolioReadyScore: Math.round(
      (portfolioReadyChecks / portfolioChecks.length) * 100,
    ),
    deploymentReadyScore: Math.round(
      (deploymentReadyChecks / deploymentChecks.length) * 100,
    ),
    portfolioReadyChecks,
    portfolioTotalChecks: portfolioChecks.length,
    deploymentReadyChecks,
    deploymentTotalChecks: deploymentChecks.length,
    hasProjectContent,
    hasVisualPreview,
    hasTechnicalDetails,
    hasReleaseDetails,
    hasImplementationNotes,
    hasTestingNotes,
    hasRoadmap,
    hasLiveDemo: links.hasLiveUrl,
    hasSourceCode: links.hasSourceUrl,
  };
}

export function getProjectProductionSummary(
  projects: Project[],
): ProjectProductionSummary {
  const statuses = projects.map((project) =>
    getProjectProductionStatus(project),
  );

  const totalProjects = projects.length;
  const totalPortfolioReadiness = statuses.reduce(
    (sum, status) => sum + status.portfolioReadyScore,
    0,
  );
  const totalDeploymentReadiness = statuses.reduce(
    (sum, status) => sum + status.deploymentReadyScore,
    0,
  );

  return {
    totalProjects,
    portfolioReadyProjects: statuses.filter(
      (status) => status.portfolioReadyScore === 100,
    ).length,
    deploymentReadyProjects: statuses.filter(
      (status) => status.deploymentReadyScore === 100,
    ).length,
    averagePortfolioReadiness:
      totalProjects > 0
        ? Math.round(totalPortfolioReadiness / totalProjects)
        : 0,
    averageDeploymentReadiness:
      totalProjects > 0
        ? Math.round(totalDeploymentReadiness / totalProjects)
        : 0,
  };
}
