import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
// https://astro.build/config
export default defineConfig({
	site: SITE_URL ?? "https://brayan-nunez.pages.dev",
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
	security: {
		csp: {
			directives: [
				"default-src 'self'",
				"base-uri 'self'",
				"form-action 'self'",
				"frame-ancestors 'none'",
				"object-src 'none'",
				"img-src 'self' data: https:",
				"font-src 'self'",
				"connect-src 'self' https://cloud.umami.is",
				"manifest-src 'self'",
				"upgrade-insecure-requests",
			],
			scriptDirective: {
				resources: ["'self'", "https://cloud.umami.is"],
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
