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
			"Systems Engineer with experience in full-stack web development for real business projects. I build sites and applications with a strong focus on usefulness, clarity, and maintainability.",
		paragraphs: [
			"My name is Brayan Nuñez, and I mainly work with React, Next.js, Astro, TypeScript, and Node.js. I also have a foundation in Laravel, PHP, and MySQL, which helps me move comfortably across frontend, backend, databases, and deployment.",
			"I have worked on real client projects, from production commercial sites to internal dashboards and management solutions. I care not only about making things work, but also about keeping projects well structured, easy to use, and technically solid enough to keep evolving.",
			"Right now I am continuing to grow as a full-stack developer, gaining more experience through real projects and improving the way I build useful and well-structured web products.",
		],
	},
	stack: [
		{
			category: "frontend",
			label: "Frontend",
			items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
		},
		{
			category: "backend",
			label: "Backend",
			items: ["Node.js", "Laravel", "PHP", "REST APIs"],
		},
		{
			category: "database",
			label: "Database",
			items: ["PostgreSQL", "MySQL", "Prisma", "Drizzle ORM"],
		},
		{
			category: "tools",
			label: "Tools",
			items: ["Git", "GitHub", "pnpm", "Biome", "Vercel"],
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
			access: "open-source",
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
			access: "open-source",
			links: {
				demo: "https://telso-app-example.vercel.app",
				repo: "https://github.com/brayananp/telso-app",
			},
		},
		{
			id: "reactivos-quimicos-peru",
			name: "Reactivos Químicos Perú",
			version: "v2026.01",
			summary:
				"Production commercial website for catalog browsing, brand discovery, and lead capture in the laboratory supply sector.",
			details:
				"Private client project focused on sales and digital presence. The site presents product catalog pages, brand navigation, product detail views, commercial sections, and contact flows designed to convert visits into quote requests.",
			tags: ["e-commerce", "catalog", "seo", "production"],
			access: "private-client",
			links: {
				demo: "https://reactivosquimicosperu.com/",
			},
		},
		{
			id: "smartrent",
			name: "SmartRent",
			version: "v2025.02",
			summary:
				"Administrative dashboard for rental management with private access and an operations-first workflow.",
			details:
				"Private project designed for internal operations. It centralizes access to an admin panel and serves as a base for managing rental workflows, users, and operational tasks through a daily-use oriented interface.",
			tags: ["dashboard", "admin", "private", "operations"],
			access: "private-client",
			links: {
				demo: "https://rent-house-olive-ten.vercel.app/",
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
		email: "mailto:brayannunezpesantes@gmail.com",
		whatsapp: "https://wa.me/51976863254",
		linkedin:
			"https://www.linkedin.com/in/brayan-alexis-nu%C3%B1ez-pesantes-a112091b8/",
		github: "https://github.com/brayananp",
	},
	social: {
		github: "https://github.com/brayananp",
		linkedin:
			"https://www.linkedin.com/in/brayan-alexis-nu%C3%B1ez-pesantes-a112091b8/",
	},
};
