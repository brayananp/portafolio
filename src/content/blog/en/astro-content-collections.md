---
title: "Content Collections in Astro 7"
description: "How to structure a bilingual blog with typed schemas and per-locale folders."
publishedAt: 2026-06-28
tags: ["astro", "typescript", "blog"]
version: "v2026.06"
changeType: "added"
---

Astro Content Collections provide build-time validation and editor autocompletion.

## Schema with Zod

In `src/content/config.ts` you define the contract for each article:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    changeType: z.enum(["added", "fixed", "improved", "deprecated"]),
  }),
});
```

If frontmatter doesn't match the schema, the build fails immediately.

## Per-locale folders

For i18n without automatic translation, each locale gets its own folder:

```
content/blog/
├── es/
│   └── articulo.md
└── en/
    └── article.md
```

The entry `id` includes the path (`es/articulo`), enabling locale filtering in `getCollection()`.

## Rendering

Each entry exposes `.render()` to get the content component and heading metadata — ideal for tables of contents or internal links in future phases.
