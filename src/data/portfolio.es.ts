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
			"Ingeniero de Sistemas con experiencia en desarrollo web full stack para proyectos reales de negocio. Trabajo construyendo sitios y aplicaciones orientadas a resultado, buscando siempre que el producto sea claro, útil y mantenible.",
		paragraphs: [
			"Me llamo Brayan Nuñez y trabajo principalmente con React, Next.js, Astro, TypeScript y Node.js. También tengo base en Laravel, PHP y MySQL, lo que me ha permitido moverme con soltura entre frontend, backend, base de datos y despliegue.",
			"He participado en proyectos reales para clientes, desde sitios comerciales en producción hasta dashboards internos y soluciones de gestión. Me interesa que cada proyecto no solo funcione, sino que tenga una estructura ordenada, una buena experiencia de uso y una base técnica que permita seguir creciendo.",
			"Actualmente sigo fortaleciendo mi perfil como desarrollador full stack, ganando más experiencia en proyectos reales y mejorando la forma en que construyo productos web útiles y bien estructurados.",
		],
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
			access: "open-source",
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
				"Sitio comercial en producción para catálogo, marcas y captación de clientes del sector laboratorio.",
			details:
				"Proyecto privado orientado a ventas y presencia digital. La web muestra catálogo de productos, navegación por marcas, fichas de producto, secciones comerciales y formularios de contacto pensados para convertir visitas en cotizaciones.",
			tags: ["e-commerce", "catalogo", "seo", "produccion"],
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
				"Panel de administración para la gestión de alquileres con acceso privado y enfoque operativo.",
			details:
				"Proyecto privado pensado para operaciones internas. Centraliza el acceso al panel de administración y sirve como base para gestionar flujos de alquiler, usuarios y tareas operativas desde una interfaz enfocada en uso diario.",
			tags: ["dashboard", "admin", "private", "operaciones"],
			access: "private-client",
			links: {
				demo: "https://rent-house-olive-ten.vercel.app/",
			},
		},
	],
	career: [
		{
			version: "v2025.01",
			title: "Desarrollador Full-Stack Freelance",
			organization: "Independiente",
			location: "Lima, Perú (remoto)",
			period: "2025 - Actualidad",
			description:
				"Trabajo de forma independiente en el diseño, desarrollo y despliegue de soluciones web para clientes reales, cubriendo tanto la parte técnica como la coordinación del proyecto.",
			highlights: [
				"Diseñé, desarrollé y desplegué de forma independiente 4 sitios web comerciales en producción y 1 dashboard interno de gestión, cubriendo todo el ciclo: arquitectura, base de datos, frontend, despliegue y mantenimiento.",
				"Gestioné de manera autónoma requerimientos, plazos y comunicación con clientes reales, desde el levantamiento de necesidades hasta el soporte post-lanzamiento.",
				"Apliqué buenas prácticas de arquitectura, control de versiones y documentación técnica en cada proyecto entregado.",
			],
		},
		{
			version: "v2020.06",
			title: "Desarrollador Web - Mantenimiento y Evolución",
			organization: "ONG Juventud Globalizada",
			location: "Lima, Perú",
			period: "Jun. 2020 - Dic. 2020",
			description:
				"Participé en la evolución de una aplicación Laravel existente, incorporando mejoras funcionales y manteniendo la estabilidad del sistema.",
			highlights: [
				"Implementé mejoras funcionales, nuevos módulos y corrección de errores sobre una aplicación Laravel existente.",
				"Realicé cambios controlados en la estructura MySQL y documenté flujos de usuario y funcionalidades incorporadas.",
			],
		},
		{
			version: "v2019.04",
			title: "Desarrollador Web - Backend",
			organization: "ONG Juventud Globalizada",
			location: "Lima, Perú",
			period: "Abr. 2019 - Jul. 2019",
			description:
				"Desarrollé un sistema institucional orientado a la gestión interna, con enfoque en backend, modelo de datos y validación con usuarios no técnicos.",
			highlights: [
				"Desarrollé un sistema de gestión institucional con PHP, Laravel 5.x, MySQL, Blade y Bootstrap, aplicando patrón MVC y autenticación de usuarios.",
				"Modelé una base de datos relacional en MySQL con entidades, relaciones, claves foráneas e índices para mejorar integridad y consultas.",
				"Coordiné levantamiento de requerimientos y validación de entregables con responsables no técnicos de la organización.",
			],
		},
		{
			version: "v2023.06",
			title: "Ingeniero de Sistemas",
			organization: "Universidad César Vallejo",
			location: "Lima, Perú",
			period: "2019 - 2023",
			description:
				"Formación universitaria con enfoque en ingeniería de software, bases de datos y arquitectura de sistemas.",
			highlights: [
				"Consolidé bases técnicas en análisis, diseño e implementación de sistemas de información.",
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
