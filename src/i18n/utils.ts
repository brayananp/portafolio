import type { Locale } from "../types/portfolio";

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang === "en") return "en";
	return "es";
}

export function getLocalizedPath(path: string, lang: Locale): string {
	const segment = path.replace(/^\/+|\/+$/g, "");
	return segment ? `/${lang}/${segment}/` : `/${lang}/`;
}

export function getAlternateLang(lang: Locale): Locale {
	return lang === "es" ? "en" : "es";
}

export function getProjectPath(id: string, lang: Locale): string {
	return getLocalizedPath(
		`${lang === "es" ? "proyectos" : "projects"}/${id}`,
		lang,
	);
}
