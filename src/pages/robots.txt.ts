import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
	const siteUrl = String(import.meta.env.SITE ?? "https://example.com").replace(
		/\/$/,
		"",
	);
	const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`;

	return new Response(body.trim(), {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
