export type Locale = "es" | "en";

export interface StackCategory {
	category: string;
	label: string;
	items: string[];
}

export interface Project {
	id: string;
	name: string;
	version: string;
	summary: string;
	details: string;
	tags: string[];
	access: "open-source" | "private-client";
	links?: {
		demo?: string;
		repo?: string;
	};
}

export interface CareerEntry {
	version: string;
	title: string;
	organization?: string;
	location?: string;
	period: string;
	description: string;
	highlights?: string[];
}

export interface ContactLinks {
	email: string;
	whatsapp: string;
	linkedin: string;
	github: string;
}

export interface SocialLinks {
	github: string;
	linkedin: string;
}

export interface PortfolioData {
	authorName: string;
	displayName: string;
	hero: {
		version: string;
		role: string;
		tagline: string;
		releaseDate: string;
		avatar: {
			src: string;
			alt: string;
		};
	};
	about: {
		content: string;
		paragraphs?: string[];
		highlights?: string[];
	};
	stack: StackCategory[];
	projects: Project[];
	career: CareerEntry[];
	contact: ContactLinks;
	social: SocialLinks;
}
