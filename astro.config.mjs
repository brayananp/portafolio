import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const siteUrl =
	import.meta.env.SITE_URL ??
	import.meta.env.VITE_SITE_URL ??
	"https://example.com";

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "es",
				locales: {
					es: "es",
					en: "en",
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
