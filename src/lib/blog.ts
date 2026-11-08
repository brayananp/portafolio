import { type CollectionEntry, getCollection } from "astro:content";
import { getAlternateLang, getLocalizedPath } from "../i18n/utils";
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

export async function getAlternateBlogPostPath(
	post: BlogPost,
	lang: Locale,
): Promise<string | undefined> {
	const alternateLang = getAlternateLang(lang);
	const slug = getSlugFromPostId(post.id);
	const candidates = await getPublishedBlogPosts(alternateLang);
	const translation = candidates.find((candidate) => {
		const candidateSlug = getSlugFromPostId(candidate.id);
		if (post.data.alternateSlug) {
			return (
				candidateSlug === post.data.alternateSlug &&
				(candidate.data.alternateSlug ?? slug) === slug
			);
		}
		return candidate.data.alternateSlug
			? candidate.data.alternateSlug === slug
			: candidateSlug === slug;
	});

	return translation
		? getBlogPostPath(alternateLang, getSlugFromPostId(translation.id))
		: undefined;
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
	return new Intl.DateTimeFormat(locale === "es" ? "es-PE" : "en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	}).format(date);
}

const WORDS_PER_MINUTE = 200;

function countReadableWords(markdown: string): number {
	const plainText = markdown
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/!\[[^\]]*]\([^)]*\)/g, " ")
		.replace(/\[([^\]]*)]\([^)]*\)/g, "$1")
		.replace(/[#>*_~`|]/g, " ");

	return plainText
		.trim()
		.split(/\s+/)
		.filter((word) => word.length > 0).length;
}

export function getReadingTimeMinutes(markdown: string | undefined): number {
	if (!markdown?.trim()) {
		return 1;
	}

	const words = countReadableWords(markdown);
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number, locale: Locale): string {
	if (locale === "es") {
		return minutes === 1 ? "1 min de lectura" : `${minutes} min de lectura`;
	}

	return minutes === 1 ? "1 min read" : `${minutes} min read`;
}
