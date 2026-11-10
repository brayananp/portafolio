import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
	authorName: "Brayan Alexis Nuñez Pesantes",
	displayName: "Brayan Nuñez",
	hero: {
		version: "v2026.11",
		role: "Full-Stack Developer",
		tagline:
			"I build B2B catalogs and management applications for businesses, from designing the workflow to developing and deploying the application.",
		releaseDate: "2026-11-08",
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
			id: "reactivos-quimicos-peru",
			name: "Reactivos Químicos Perú",
			version: "v2026.01",
			summary:
				"A B2B catalog for finding laboratory products and requesting quotes from product pages.",
			details:
				"The catalog is live. Visitors can filter by brand or category, review product details, and request a WhatsApp quote with the product already named.",
			tags: ["B2B catalog", "search", "SEO", "quotes"],
			access: "private-client",
			links: {
				demo: "https://reactivosquimicosperu.com/productos",
			},
			caseStudy: {
				context:
					"The client needed a catalog that helped customers identify the right laboratory reagent or equipment before asking about pricing and availability.",
				contribution:
					"I developed the commercial site and designed the path from browsing to requesting a quote. I implemented brand and category navigation, product pages, and access to WhatsApp from the catalog.",
				workflowTitle: "From browsing to requesting a quote",
				steps: [
					{
						title: "Find a product",
						description: "Search by name or filter by category and brand.",
					},
					{
						title: "Check the details",
						description: "Confirm the product and review its specifications.",
					},
					{
						title: "Request a quote",
						description: "Open WhatsApp with the product named in the message.",
					},
				],
				image: {
					src: "/images/projects/reactivos-catalogo.webp",
					alt: "Public catalog showing filters, product cards, and quote buttons.",
					width: 1080,
					height: 525,
				},
				relatedSites: [
					{
						name: "Insumos Químicos Perú",
						specialty: "Industrial and food-grade chemicals",
						description:
							"Catalog of industrial and food-grade chemicals with product details and WhatsApp inquiries.",
						href: "https://insumosquimicosperu.com/",
					},
					{
						name: "Papel Filtro Perú",
						specialty: "Filtration and measurement",
						description:
							"Catalog of filter paper, indicator paper, and measuring instruments, searchable by brand, category, or product.",
						href: "https://www.papelfiltroperu.com/",
					},
					{
						name: "Vidrio de Laboratorio Perú",
						specialty: "Glassware and laboratory supplies",
						description:
							"Lab supplies catalog organized by category and brand, from flasks and pipettes to burettes and stands.",
						href: "https://www.vidriodelaboratorioperu.com/",
					},
				],
			},
		},
		{
			id: "smartrent",
			name: "SmartRent",
			version: "v2025.02",
			summary:
				"A private dashboard for managing rentals, users, and operational tasks.",
			details:
				"The project provides a private entry point for the operations team and a foundation for organizing rental workflows and daily tasks.",
			tags: ["dashboard", "admin", "rentals", "operations"],
			access: "private-client",
			caseStudy: {
				context:
					"Rental operations needed a private workspace that brought team access, users, and daily tasks together.",
				contribution:
					"I developed a private admin dashboard and organized the interface around the team's everyday operational tasks.",
				workflowTitle: "Private dashboard workflow",
				steps: [
					{
						title: "Private access",
						description: "An entry point for the operations team.",
					},
					{
						title: "Rental management",
						description: "A workspace for rental workflows.",
					},
					{
						title: "Internal operations",
						description: "User management and team tasks.",
					},
				],
			},
		},
		{
			id: "portafolio",
			name: "Portfolio",
			version: "v2026.11",
			summary:
				"Open-source personal portfolio and blog with a changelog-inspired visual system.",
			details:
				"A bilingual site built with Astro, Tailwind CSS, and TypeScript. It brings together project case studies, technical articles, and a downloadable CV.",
			tags: ["astro", "typescript", "tailwindcss", "pdf-lib"],
			access: "open-source",
			links: {
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
