---
title: "Content Collections en Astro 7"
description: "Cómo estructurar un blog bilingüe con esquemas tipados y carpetas por locale."
publishedAt: 2026-06-28
tags: ["astro", "typescript", "blog"]
version: "v2026.06"
changeType: "added"
---

Astro Content Collections ofrecen validación en build time y autocompletado en el editor.

## Esquema con Zod

En `src/content/config.ts` defines el contrato de cada artículo:

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

Si el frontmatter no cumple el esquema, el build falla de inmediato.

## Carpetas por idioma

Para i18n sin traducción automática, cada locale tiene su carpeta:

```
content/blog/
├── es/
│   └── articulo.md
└── en/
    └── article.md
```

El `id` del entry incluye la ruta (`es/articulo`), lo que permite filtrar por locale en `getCollection()`.

## Renderizado

Cada entry expone `.render()` para obtener el componente de contenido y metadata de headings — ideal para tablas de contenido o enlaces internos en fases futuras.
