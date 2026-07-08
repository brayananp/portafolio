import { type CollectionEntry, getCollection } from "astro:content";
import { getLocalizedPath } from "../i18n/utils";
import type { Locale } from "../types/portfolio";

export type BlogPost = CollectionEntry<"blog">;

export function getLocaleFromPostId(id: string): Locale {
	return id.startsWith("en/") ? "en" : "es";
}

export function getSlugFromPostId(id: string): string {
	const parts = id.split("/");
	return parts[parts.length - 1] ?? id;
}

export function getBlogPostPath(lang: Locale, slug: string): string {
	return getLocalizedPath(`/blog/${slug}`, lang);
}

export async function getPublishedBlogPosts(
	locale: Locale,
): Promise<BlogPost[]> {
	const posts = await getCollection("blog", ({ data, id }) => {
		return !data.draft && id.startsWith(`${locale}/`);
	});

	return posts.sort(
		(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
	);
}

export function getAdjacentPosts(
	posts: BlogPost[],
	currentSlug: string,
): { previous: BlogPost | null; next: BlogPost | null } {
	const index = posts.findIndex(
		(post) => getSlugFromPostId(post.id) === currentSlug,
	);

	if (index === -1) {
		return { previous: null, next: null };
	}

	return {
		previous: posts[index + 1] ?? null,
		next: posts[index - 1] ?? null,
	};
}

export function formatBlogDate(date: Date, locale: Locale): string {
	return date.toLocaleDateString(locale === "es" ? "es-PE" : "en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
