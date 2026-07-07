import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
	isPlaceholder: true,
	authorName: "Brayan Alexis Nuñez Pesantes",
	hero: {
		version: "v2026.07",
		role: "Desarrollador Full-Stack",
		tagline:
			"Construyo productos web con TypeScript, TanStack Start y PostgreSQL. Enfoque en arquitectura limpia y experiencia de usuario.",
		releaseDate: "2026-07-06",
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
			id: "smartrent",
			name: "SmartRent",
			version: "v1.0.0",
			summary:
				"Plataforma de gestión de alquileres con generación de recibos y contratos en PDF.",
			details:
				"Sistema completo para administradores de propiedades: registro de inquilinos, pagos recurrentes, generación automática de recibos térmicos en PDF con pdf-lib, y panel de control con métricas de ocupación.",
			tags: ["react", "typescript", "pdf-lib", "postgresql"],
		},
		{
			id: "quotepilot",
			name: "QuotePilot",
			version: "v0.9.0",
			summary:
				"CRM para cotizaciones B2B con pipeline de ventas y seguimiento de clientes.",
			details:
				"Aplicación CRM construida con TanStack Start y Drizzle ORM. Incluye gestión de leads, cotizaciones con plantillas, seguimiento de pipeline y autenticación con Better Auth.",
			tags: ["tanstack-start", "drizzle", "postgresql", "better-auth"],
		},
		{
			id: "ecommerce-b2b",
			name: "E-commerce B2B",
			version: "v1.2.0",
			summary:
				"Sitios de comercio electrónico B2B para distribuidores mayoristas.",
			details:
				"Desarrollo de tiendas online con catálogo de productos, precios por volumen, integración con sistemas de inventario y checkout optimizado para pedidos mayoristas.",
			tags: ["astro", "react", "tailwindcss", "stripe"],
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
