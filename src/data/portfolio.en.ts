import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
	isPlaceholder: true,
	authorName: "Brayan Alexis Nuñez Pesantes",
	displayName: "Brayan Nuñez",
	hero: {
		version: "v2026.07",
		role: "Full-Stack Developer",
		tagline:
			"I'm a Systems Engineer building business-focused web applications and sites. I work with React, Next.js, TanStack Start, Astro, and Node.js, backed by a foundation in Laravel, PHP, and MySQL. I've contributed to real institutional management projects and B2B sites already in production, combining development, structure, documentation, and a results-oriented mindset. I'm looking to keep growing as a junior full-stack developer by strengthening APIs, databases, and web deployment.",
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
			id: "portafolio",
			name: "Portfolio",
			version: "v2026.07",
			summary:
				"Open-source personal portfolio and blog with a changelog-inspired visual system.",
			details:
				"Bilingual site built with Astro 7, Tailwind CSS, and TypeScript. It includes project detail pages, PDF CV export, technical SEO, and an interface styled like a software release history.",
			tags: ["astro", "typescript", "tailwindcss", "pdf-lib"],
			links: {
				demo: "https://brayan-nunez.pages.dev/en",
				repo: "https://github.com/brayananp/portafolio",
			},
		},
		{
			id: "telso-app",
			name: "Telso App",
			version: "v2025.03",
			summary:
				"Full-stack e-commerce application with catalog, authentication, and checkout flow.",
			details:
				"Project built with Next.js, Prisma, and PostgreSQL to manage products, categories, images, addresses, and orders. It also integrates authentication and payments as a solid foundation for an online store.",
			tags: ["nextjs", "typescript", "prisma", "postgresql"],
			links: {
				demo: "https://telso-app-example.vercel.app",
				repo: "https://github.com/brayananp/telso-app",
			},
		},
		{
			id: "my-task-board",
			name: "My Task Board",
			version: "v2024.12",
			summary:
				"Task board application with boards and cards to organize personal work.",
			details:
				"Application built with Next.js App Router, Prisma, and Server Actions. It supports creating boards and tasks with a clear structure of reusable components, server-side actions, and database persistence.",
			tags: ["nextjs", "typescript", "prisma", "server-actions"],
			links: {
				repo: "https://github.com/brayananp/my-task-board",
			},
		},
		{
			id: "todo-app",
			name: "Todo App",
			version: "v2024.09",
			summary:
				"Task app with drag and drop, dark mode, and Supabase persistence.",
			details:
				"Frontend project built with React, TypeScript, and Tailwind CSS. It includes filters, task reordering, light and dark theme support, and data persistence through Supabase.",
			tags: ["react", "typescript", "tailwindcss", "supabase"],
			links: {
				demo: "https://todo-list-2024-09.netlify.app/",
				repo: "https://github.com/brayananp/todo-app",
			},
		},
	],
	career: [
		{
			version: "v2025.01",
			title: "Freelance Full-Stack Developer",
			organization: "Independent",
			location: "Lima, Peru (remote)",
			period: "2025 - Present",
			description:
				"I work independently on the design, development, and deployment of web solutions for real clients, covering both technical execution and project coordination.",
			highlights: [
				"I independently designed, developed, and deployed 4 production commercial websites and 1 internal management dashboard, covering the full cycle: architecture, database, frontend, deployment, and maintenance.",
				"I managed requirements, timelines, and communication directly with real clients, from discovery to post-launch support.",
				"I applied sound architecture, version control, and technical documentation practices in every delivered project.",
			],
		},
		{
			version: "v2020.06",
			title: "Web Developer - Maintenance and Evolution",
			organization: "ONG Juventud Globalizada",
			location: "Lima, Peru",
			period: "Jun. 2020 - Dec. 2020",
			description:
				"I contributed to the evolution of an existing Laravel application by adding functional improvements while preserving system stability.",
			highlights: [
				"I implemented functional improvements, new modules, and bug fixes on an existing Laravel application.",
				"I made controlled changes to the MySQL structure and documented user flows and newly added functionality.",
			],
		},
		{
			version: "v2019.04",
			title: "Web Developer - Backend",
			organization: "ONG Juventud Globalizada",
			location: "Lima, Peru",
			period: "Apr. 2019 - Jul. 2019",
			description:
				"I built an institutional management system focused on backend development, data modeling, and validation with non-technical stakeholders.",
			highlights: [
				"I developed an institutional management system with PHP, Laravel 5.x, MySQL, Blade, and Bootstrap, applying the MVC pattern and user authentication.",
				"I modeled a relational MySQL database with entities, relationships, foreign keys, and indexes to improve data integrity and query performance.",
				"I coordinated requirements gathering and deliverable validation with non-technical organization stakeholders.",
			],
		},
		{
			version: "v2023.06",
			title: "Systems Engineer",
			organization: "Universidad César Vallejo",
			location: "Lima, Peru",
			period: "2019 - 2023",
			description:
				"University education focused on software engineering, databases, and systems architecture.",
			highlights: [
				"I built a strong technical foundation in analysis, design, and implementation of information systems.",
			],
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
