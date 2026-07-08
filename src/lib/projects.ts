import { portfolio as portfolioEn } from "../data/portfolio.en";
import { portfolio as portfolioEs } from "../data/portfolio.es";
import type { Locale, PortfolioData, Project } from "../types/portfolio";

export function getPortfolio(lang: Locale): PortfolioData {
	return lang === "en" ? portfolioEn : portfolioEs;
}

export function getProjectPath(lang: Locale, projectId: string): string {
	return `/${lang}/projects/${projectId}`;
}

export function getProjectById(lang: Locale, projectId: string): Project | undefined {
	return getPortfolio(lang).projects.find((project) => project.id === projectId);
}

export function getAdjacentProjects(lang: Locale, currentId: string) {
	const projects = getPortfolio(lang).projects;
	const index = projects.findIndex((project) => project.id === currentId);

	return {
		previous: index > 0 ? projects[index - 1] : null,
		next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
	};
}

export function extractProjectIdFromPath(pathname: string): string | null {
	const match = pathname.match(/^\/(es|en)\/projects\/([^/]+)\/?$/);
	return match?.[2] ?? null;
}
