import { readFile } from "node:fs/promises";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
const emptyBlogPaths = new Set();
const siteSitemap = sitemap({
	filter: (url) => {
		const { pathname } = new URL(url);
		return pathname !== "/" && !emptyBlogPaths.has(pathname);
	},
});

// https://astro.build/config
export default defineConfig({
	site: SITE_URL ?? "https://brayan-nunez.pages.dev",
	trailingSlash: "always",
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	integrations: [
		{
			name: siteSitemap.name,
			hooks: {
				...siteSitemap.hooks,
				"astro:build:done": async (options) => {
					emptyBlogPaths.clear();
					for (const lang of ["es", "en"]) {
						const path = `/${lang}/blog/`;
						const html = await readFile(
							new URL(`.${path}index.html`, options.dir),
							"utf8",
						);
						if (
							html.includes('<meta name="robots" content="noindex,') ||
							html.includes('<meta name=robots content="noindex,')
						) {
							emptyBlogPaths.add(path);
						}
					}
					await siteSitemap.hooks["astro:build:done"]?.(options);
				},
			},
		},
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
