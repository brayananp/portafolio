import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
	isPlaceholder: true,
	authorName: "Brayan Alexis Nuñez Pesantes",
	displayName: "Brayan Nuñez",
	hero: {
		version: "v2026.07",
		role: "Full-Stack Developer",
		tagline:
			"I build web products with TypeScript, TanStack Start, and PostgreSQL. Focused on clean architecture and user experience.",
		releaseDate: "2026-07-06",
		avatar: {
			src: "/images/avatar.webp",
			alt: "Brayan Nuñez",
		},
	},
	about: {
		content:
			"Systems Engineer graduated from Universidad César Vallejo (2023). I specialize in full-stack development with TypeScript, building scalable applications with TanStack Start, Drizzle ORM, and PostgreSQL. I document my technical work with the same rigor as a software changelog.",
	},
	stack: [
		{
			category: "frontend",
			label: "Frontend",
			items: ["React", "TypeScript", "TailwindCSS", "shadcn/ui"],
		},
		{
			category: "backend",
			label: "Backend",
			items: ["TanStack Start", "Node.js", "Better Auth"],
		},
		{
			category: "database",
			label: "Database",
			items: ["PostgreSQL", "Drizzle ORM"],
		},
		{
			category: "tools",
			label: "Tools",
			items: ["Git", "pnpm", "Biome", "Astro"],
		},
	],
	projects: [
		{
			id: "smartrent",
			name: "SmartRent",
			version: "v1.0.0",
			summary:
				"Rental management platform with PDF receipt and contract generation.",
			details:
				"Complete system for property managers: tenant registration, recurring payments, automatic thermal receipt PDF generation with pdf-lib, and a control panel with occupancy metrics.",
			tags: ["react", "typescript", "pdf-lib", "postgresql"],
			links: {
				repo: "https://github.com/ejemplo/smartrent",
			},
		},
		{
			id: "quotepilot",
			name: "QuotePilot",
			version: "v0.9.0",
			summary: "B2B quoting CRM with sales pipeline and client tracking.",
			details:
				"CRM application built with TanStack Start and Drizzle ORM. Includes lead management, templated quotes, pipeline tracking, and authentication with Better Auth.",
			tags: ["tanstack-start", "drizzle", "postgresql", "better-auth"],
			links: {
				repo: "https://github.com/ejemplo/quotepilot",
			},
		},
		{
			id: "ecommerce-b2b",
			name: "E-commerce B2B",
			version: "v1.2.0",
			summary: "B2B e-commerce sites for wholesale distributors.",
			details:
				"Online store development with product catalogs, volume pricing, inventory system integration, and checkout optimized for wholesale orders.",
			tags: ["astro", "react", "tailwindcss", "stripe"],
			links: {
				demo: "https://ejemplo.com",
				repo: "https://github.com/ejemplo/ecommerce-b2b",
			},
		},
	],
	career: [
		{
			version: "v2023.06",
			title: "Systems Engineer — Universidad César Vallejo",
			period: "2019 – 2023",
			description:
				"Graduation focused on software engineering, databases, and systems architecture.",
		},
		{
			version: "v2024.01",
			title: "Freelance Full-Stack Developer",
			period: "2024 – present",
			description:
				"Web product development for clients in Peru and LATAM: CRMs, management platforms, and B2B e-commerce.",
		},
	],
	contact: {
		email: "mailto:contacto@ejemplo.com",
		whatsapp: "https://wa.me/51999999999",
		linkedin: "https://linkedin.com/in/ejemplo",
		github: "https://github.com/ejemplo",
	},
	social: {
		github: "https://github.com/ejemplo",
		linkedin: "https://linkedin.com/in/ejemplo",
	},
};
