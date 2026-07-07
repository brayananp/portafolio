// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.VITE_SITE_URL,
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
