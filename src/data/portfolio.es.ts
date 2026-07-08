import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
	isPlaceholder: true,
	authorName: "Brayan Alexis Nuñez Pesantes",
	displayName: "Brayan Nuñez",
	hero: {
		version: "v2026.07",
		role: "Desarrollador Full Stack",
		tagline:
			"Soy Ingeniero de Sistemas y desarrollo aplicaciones y sitios web orientados a negocio. Trabajo con React, Next.js, TanStack Start, Astro y Node.js, y cuento con base en Laravel, PHP y MySQL. He participado en proyectos reales de gestión institucional y en sitios B2B en producción, combinando desarrollo, estructura, documentación y enfoque en resultados. Busco seguir creciendo como desarrollador full stack junior, fortaleciendo APIs, bases de datos y despliegue web.",
		releaseDate: "2026-07-06",
		avatar: {
			src: "/images/avatar.webp",
			alt: "Brayan Nuñez",
		},
	},
	about: {
		content:
			"Ingeniero de Sistemas graduado de la Universidad César Vallejo (2023). Me especializo en desarrollo full-stack con TypeScript, construyendo aplicaciones escalables con TanStack Start, Drizzle ORM y PostgreSQL. Documento mi trabajo técnico con la misma rigurosidad que un changelog de software.",
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
			label: "Base de datos",
			items: ["PostgreSQL", "Drizzle ORM"],
		},
		{
			category: "tools",
			label: "Herramientas",
			items: ["Git", "pnpm", "Biome", "Astro"],
		},
	],
	projects: [
		{
			id: "portafolio",
			name: "Portafolio",
			version: "v2026.07",
			summary:
				"Portafolio y blog personal en código abierto con enfoque visual tipo changelog.",
			details:
				"Sitio bilingüe desarrollado con Astro 7, Tailwind CSS y TypeScript. Incluye páginas de detalle para proyectos, exportación de CV en PDF, SEO técnico y una interfaz inspirada en historiales de versiones de software.",
			tags: ["astro", "typescript", "tailwindcss", "pdf-lib"],
			links: {
				demo: "https://brayan-nunez.pages.dev/es",
				repo: "https://github.com/brayananp/portafolio",
			},
		},
		{
			id: "telso-app",
			name: "Telso App",
			version: "v2025.03",
			summary:
				"Aplicación e-commerce full-stack con catálogo, autenticación y flujo de compra.",
			details:
				"Proyecto construido con Next.js, Prisma y PostgreSQL para gestionar productos, categorías, imágenes, direcciones y órdenes. También integra autenticación y pagos, con una base sólida para escalar una tienda online.",
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
				"Tablero de tareas con gestión de boards y tarjetas para organizar trabajo personal.",
			details:
				"Aplicación desarrollada con Next.js App Router, Prisma y Server Actions. Permite crear tableros y tareas con una estructura clara de acciones, componentes reutilizables y persistencia en base de datos.",
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
				"Aplicación de tareas con drag and drop, modo oscuro y persistencia en Supabase.",
			details:
				"Proyecto frontend con React, TypeScript y Tailwind CSS. Implementa filtros, reordenamiento de tareas, soporte de tema claro/oscuro y persistencia de datos usando Supabase como backend.",
			tags: ["react", "typescript", "tailwindcss", "supabase"],
			links: {
				demo: "https://todo-list-2024-09.netlify.app/",
				repo: "https://github.com/brayananp/todo-app",
			},
		},
	],
	career: [
		{
			version: "v2023.06",
			title: "Systems Engineer — Universidad César Vallejo",
			period: "2019 – 2023",
			description:
				"Graduación con enfoque en ingeniería de software, bases de datos y arquitectura de sistemas.",
		},
		{
			version: "v2024.01",
			title: "Desarrollador Full-Stack Freelance",
			period: "2024 – presente",
			description:
				"Desarrollo de productos web para clientes en Perú y LATAM: CRMs, plataformas de gestión y e-commerce B2B.",
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
