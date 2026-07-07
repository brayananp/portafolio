import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().max(160),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		coverImage: z.string().optional(),
		version: z.string().optional(),
		changeType: z
			.enum(["added", "fixed", "improved", "deprecated"])
			.default("added"),
	}),
});

export const collections = { blog };
