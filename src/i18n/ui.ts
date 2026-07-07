import type { Locale } from "../types/portfolio";

export const ui = {
	es: {
		"nav.career": "Experiencia",
		"nav.projects": "Proyectos",
		"nav.about": "Sobre mí",
		"nav.blog": "Blog",
		"nav.contact": "Contacto",
		"nav.home": "Inicio",
		"hero.badge": "release actual",
		"hero.releaseDate": "Fecha de release",
		"about.badge": "descripción del release",
		"about.title": "Sobre mí",
		"stack.badge": "dependencias",
		"stack.title": "Stack técnico",
		"projects.badge": "changelog",
		"projects.title": "Proyectos",
		"career.badge": "historial de releases",
		"career.title": "Experiencia",
		"blog.badge": "notas de versión",
		"blog.title": "Blog",
		"blog.subtitle":
			"Release notes técnicas sobre arquitectura, herramientas y decisiones de desarrollo.",
		"blog.comingSoon":
			"Próximamente — release notes técnicas sobre arquitectura y desarrollo full-stack.",
		"blog.viewAll": "Ver todas las notas",
		"blog.backToHome": "Volver al inicio",
		"blog.backToBlog": "Volver al blog",
		"blog.previous": "Anterior",
		"blog.next": "Siguiente",
		"blog.publishedOn": "Publicado",
		"blog.updatedOn": "Actualizado",
		"blog.noPosts": "Aún no hay artículos publicados.",
		"blog.postNavigation": "Navegación entre artículos",
		"contact.badge": "abrir issue",
		"contact.title": "Contacto",
		"contact.subtitle":
			"¿Tienes un proyecto en mente? Escríbeme por cualquiera de estos canales.",
		"contact.email": "Email",
		"contact.whatsapp": "WhatsApp",
		"contact.linkedin": "LinkedIn",
		"contact.github": "GitHub",
		"footer.exportCv": "Exportar CV como release note",
		"footer.comingSoon": "Próximamente",
		"footer.placeholder":
			"Contenido de demostración — reemplazar con datos reales.",
		"theme.toggle": "Cambiar tema",
		"theme.light": "Modo claro",
		"theme.dark": "Modo oscuro",
		"lang.switch": "Cambiar idioma",
	},
	en: {
		"nav.career": "Experience",
		"nav.projects": "Projects",
		"nav.about": "About",
		"nav.blog": "Blog",
		"nav.contact": "Contact",
		"nav.home": "Home",
		"hero.badge": "current release",
		"hero.releaseDate": "Release date",
		"about.badge": "release description",
		"about.title": "About me",
		"stack.badge": "dependencies",
		"stack.title": "Tech stack",
		"projects.badge": "changelog",
		"projects.title": "Projects",
		"career.badge": "release history",
		"career.title": "Experience",
		"blog.badge": "release notes",
		"blog.title": "Blog",
		"blog.subtitle":
			"Technical release notes on architecture, tooling, and development decisions.",
		"blog.comingSoon":
			"Coming soon — technical release notes on architecture and full-stack development.",
		"blog.viewAll": "View all notes",
		"blog.backToHome": "Back to home",
		"blog.backToBlog": "Back to blog",
		"blog.previous": "Previous",
		"blog.next": "Next",
		"blog.publishedOn": "Published",
		"blog.updatedOn": "Updated",
		"blog.noPosts": "No published articles yet.",
		"blog.postNavigation": "Article navigation",
		"contact.badge": "open issue",
		"contact.title": "Contact",
		"contact.subtitle":
			"Have a project in mind? Reach out through any of these channels.",
		"contact.email": "Email",
		"contact.whatsapp": "WhatsApp",
		"contact.linkedin": "LinkedIn",
		"contact.github": "GitHub",
		"footer.exportCv": "Export CV as release note",
		"footer.comingSoon": "Coming soon",
		"footer.placeholder": "Demo content — replace with real data.",
		"theme.toggle": "Toggle theme",
		"theme.light": "Light mode",
		"theme.dark": "Dark mode",
		"lang.switch": "Switch language",
	},
} as const;

export type UiKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Locale) {
	return function t(key: UiKey): string {
		return ui[lang][key];
	};
}
