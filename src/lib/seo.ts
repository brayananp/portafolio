import type { Locale } from "../types/portfolio";

export const DEFAULT_OG_IMAGE = "/images/og-default.png";
export const DEFAULT_OG_IMAGE_ALT = "Brayan Nuñez — Desarrollador Full-Stack";

export function getSiteUrl(site: URL | string | undefined): string {
	return site?.toString().replace(/\/$/, "") ?? "";
}

export function absoluteUrl(siteUrl: string, path: string): string {
	if (!siteUrl) return path;
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	return `${siteUrl}${normalizedPath}`;
}

export function formatIsoDate(date: Date): string {
	return date.toISOString().split("T")[0] ?? date.toISOString();
}

export function buildPersonJsonLd(params: {
	siteUrl: string;
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	image: string;
	sameAs: string[];
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: params.name,
		jobTitle: params.jobTitle,
		description: params.description,
		url: params.url,
		image: params.image,
		sameAs: params.sameAs,
	};
}

export function buildWebSiteJsonLd(params: {
	siteUrl: string;
	name: string;
	description: string;
	url: string;
	locale: Locale;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: params.name,
		description: params.description,
		url: params.url,
		inLanguage: params.locale === "es" ? "es-PE" : "en-US",
	};
}

export function buildArticleJsonLd(params: {
	siteUrl: string;
	title: string;
	description: string;
	url: string;
	image: string;
	authorName: string;
	publishedAt: Date;
	updatedAt?: Date;
	locale: Locale;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: params.title,
		description: params.description,
		image: params.image,
		url: params.url,
		datePublished: formatIsoDate(params.publishedAt),
		dateModified: formatIsoDate(params.updatedAt ?? params.publishedAt),
		inLanguage: params.locale === "es" ? "es-PE" : "en-US",
		author: {
			"@type": "Person",
			name: params.authorName,
		},
		publisher: {
			"@type": "Person",
			name: params.authorName,
		},
	};
}

export function buildSoftwareProjectJsonLd(params: {
	siteUrl: string;
	name: string;
	description: string;
	url: string;
	tags: string[];
	authorName: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: params.name,
		description: params.description,
		url: params.url,
		applicationCategory: "WebApplication",
		operatingSystem: "Web",
		keywords: params.tags.join(", "),
		author: {
			"@type": "Person",
			name: params.authorName,
		},
	};
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function buildHomeJsonLd(params: {
	siteUrl: string;
	locale: Locale;
	authorName: string;
	displayName: string;
	role: string;
	tagline: string;
	homeUrl: string;
	sameAs: string[];
}) {
	const image = absoluteUrl(params.siteUrl, DEFAULT_OG_IMAGE);

	return [
		buildPersonJsonLd({
			siteUrl: params.siteUrl,
			name: params.authorName,
			jobTitle: params.role,
			description: params.tagline,
			url: params.homeUrl,
			image,
			sameAs: params.sameAs,
		}),
		buildWebSiteJsonLd({
			siteUrl: params.siteUrl,
			name: `${params.displayName} — ${params.role}`,
			description: params.tagline,
			url: params.homeUrl,
			locale: params.locale,
		}),
	];
}
