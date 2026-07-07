import type { Locale } from "../types/portfolio";

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang === "en") return "en";
	return "es";
}

export function getLocalizedPath(path: string, lang: Locale): string {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	if (normalizedPath === "/" || normalizedPath === "") {
		return `/${lang}`;
	}
	return `/${lang}${normalizedPath}`;
}

export function getAlternateLang(lang: Locale): Locale {
	return lang === "es" ? "en" : "es";
}
