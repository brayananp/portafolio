import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
	authorName: "Brayan Alexis Nuñez Pesantes",
	displayName: "Brayan Nuñez",
	hero: {
		version: "v2026.11",
		role: "Desarrollador Full Stack",
		tagline:
			"Desarrollo catálogos B2B y aplicaciones de gestión para empresas. Diseño el recorrido, construyo la aplicación y la llevo a producción.",
		releaseDate: "2026-11-08",
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
			items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
		},
		{
			category: "backend",
			label: "Backend",
			items: ["Node.js", "Laravel", "PHP", "REST APIs"],
		},
		{
			category: "database",
			label: "Base de datos",
			items: ["PostgreSQL", "MySQL", "Prisma", "Drizzle ORM"],
		},
		{
			category: "tools",
			label: "Herramientas",
			items: ["Git", "GitHub", "pnpm", "Biome", "Vercel"],
		},
	],
	projects: [
		{
			id: "reactivos-quimicos-peru",
			name: "Reactivos Químicos Perú",
			version: "v2026.01",
			summary:
				"Catálogo B2B para encontrar productos de laboratorio y solicitar cotizaciones desde sus fichas.",
			details:
				"El catálogo está en producción. Los visitantes pueden filtrar por marca o categoría, consultar una ficha y solicitar una cotización por WhatsApp con el producto identificado.",
			tags: ["catálogo B2B", "búsqueda", "SEO", "cotizaciones"],
			access: "private-client",
			links: {
				demo: "https://reactivosquimicosperu.com/productos",
			},
			caseStudy: {
				context:
					"El cliente necesitaba mostrar reactivos y equipos de laboratorio en un catálogo que ayudara a identificar un producto antes de consultar precio y disponibilidad.",
				contribution:
					"Desarrollé el sitio comercial y organicé el recorrido del catálogo a la cotización. Implementé la navegación por marcas y categorías, las fichas de producto y el acceso a WhatsApp desde el catálogo.",
				workflowTitle: "Del catálogo a la cotización",
				steps: [
					{
						title: "Encontrar",
						description: "Buscar por nombre o filtrar por categoría y marca.",
					},
					{
						title: "Revisar la ficha",
						description: "Confirmar el producto y sus características.",
					},
					{
						title: "Cotizar",
						description:
							"Abrir WhatsApp con el producto indicado en el mensaje.",
					},
				],
				image: {
					src: "/images/projects/reactivos-catalogo.webp",
					alt: "Catálogo público con filtros, fichas de productos y botones para cotizar.",
					width: 1080,
					height: 525,
				},
				relatedSites: [
					{
						name: "Insumos Químicos Perú",
						specialty: "Químicos industriales y alimentarios",
						description:
							"Catálogo de insumos químicos de grado industrial y alimentario, con fichas de producto y consultas por WhatsApp.",
						href: "https://insumosquimicosperu.com/",
					},
					{
						name: "Papel Filtro Perú",
						specialty: "Filtración y medición",
						description:
							"Catálogo de papel filtro, papel indicador e instrumentos de medición, con búsqueda por marca, categoría o producto.",
						href: "https://www.papelfiltroperu.com/",
					},
					{
						name: "Vidrio de Laboratorio Perú",
						specialty: "Vidriería y material de laboratorio",
						description:
							"Catálogo de material de laboratorio con navegación por categoría y marca, desde matraces y pipetas hasta buretas y soportes.",
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
				"Panel privado para reunir la gestión de alquileres, usuarios y tareas operativas.",
			details:
				"El proyecto entrega un punto de entrada privado para el trabajo del equipo y una base para organizar los flujos de alquiler y las tareas de operación.",
			tags: ["dashboard", "administración", "alquileres", "operaciones"],
			access: "private-client",
			caseStudy: {
				context:
					"La gestión de alquileres requería un espacio de trabajo interno para reunir el acceso, los usuarios y las tareas del equipo.",
				contribution:
					"Desarrollé un panel de administración de acceso privado y estructuré la interfaz alrededor de las tareas habituales de la operación.",
				workflowTitle: "Esquema del panel privado",
				steps: [
					{
						title: "Acceso privado",
						description: "Punto de entrada para el equipo de operación.",
					},
					{
						title: "Gestión de alquileres",
						description: "Área de trabajo para los flujos de alquiler.",
					},
					{
						title: "Operación interna",
						description: "Gestión de usuarios y tareas del equipo.",
					},
				],
			},
		},
		{
			id: "portafolio",
			name: "Portafolio",
			version: "v2026.11",
			summary:
				"Portafolio y blog personal en código abierto con enfoque visual tipo changelog.",
			details:
				"Sitio bilingüe construido con Astro, Tailwind CSS y TypeScript. Reúne casos de proyecto, artículos técnicos y un CV descargable.",
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
