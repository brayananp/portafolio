# Especificación del portafolio

Especificación maestra para la construcción del portafolio personal con blog integrado.

**Autor:** Brayan Alexis Nuñez Pesantes  
**Framework:** Astro 7  
**Estilos:** TailwindCSS v4 (configuración CSS-first con `@theme`)

---

## 1. Resumen

- **Propósito:** Portafolio profesional con blog técnico integrado
- **Concepto visual:** Changelog / historial de versiones de software
- **Público:** Clientes freelance y reclutadores LATAM (Perú)
- **Idiomas:** Español (default) e inglés — rutas `/es` y `/en`

> El concepto original de "recibo térmico" fue descartado por ser estética sobreexplotada. Se reemplazó por changelog, que conecta con el hábito real de documentar trabajo técnico. La exportación PDF se conserva como "exportar CV como release note".

---

## 2. Fases de implementación

| Fase | Alcance | Estado |
|------|---------|--------|
| **1 — Fundación** | Tailwind, tokens, layout, tema, homepage bilingüe, placeholders | En progreso |
| **2 — Blog** | Content Collections, listado y artículo individual, 2-3 posts prueba | Pendiente |
| **3 — PDF** | `pdf-lib`, exportar CV como release note | Pendiente |
| **4 — Opcional** | Keystatic, recomendaciones, analytics, SEO avanzado | Pendiente |

---

## 3. TailwindCSS v4

### 3.1 Instalación

```bash
pnpm add tailwindcss @tailwindcss/vite @tailwindcss/typography
```

Configurar en `astro.config.mjs`:

```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

> No usar `@astrojs/tailwind` (deprecado para v4). No se genera `tailwind.config.mjs`.

### 3.2 Archivo global — `src/styles/global.css`

Combina importación de Tailwind, tokens por modo, y exposición semántica via `@theme`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root { /* tokens light */ }
[data-theme='dark'] { /* tokens dark */ }

@theme {
  --color-bg: var(--token-bg);
  /* ... más tokens ... */
  --font-display: "Cabinet Grotesk", sans-serif;
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --spacing-section: 3rem;
}
```

Ver [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) para tokens completos.

### 3.3 `@apply` en componentes Astro

Si se usa `@apply` en bloques `<style>`, declarar `@reference "../styles/global.css"` al inicio. Preferir utilidades directamente en atributos `class`.

### 3.4 Modo oscuro/claro

- Toggle via `data-theme="dark"` / `data-theme="light"` en `<html>`
- Persistencia en `localStorage`
- Modo oscuro por defecto

---

## 4. Secciones del portafolio

1. **Header** — nav fija, selector idioma, toggle tema
2. **Hero** — release actual `vAAAA.MM`
3. **Sobre mí** — descripción del release
4. **Stack técnico** — dependencias por categoría
5. **Proyectos** — entradas `+ added` expandibles (SmartRent, QuotePilot, e-commerce B2B)
6. **Trayectoria** — historial cronológico descendente
7. **Recomendaciones** — omitir hasta tener testimonios reales
8. **Blog** — preview de release notes (stub en Fase 1)
9. **Contacto** — enlaces a email, WhatsApp, LinkedIn, GitHub
10. **Footer** — exportar CV PDF (stub en Fase 1), redes

---

## 5. Content Collections — blog (Fase 2)

### 5.1 Estructura

```
src/content/
├── config.ts
└── blog/
    ├── es/
    │   └── articulo-uno.md
    └── en/
        └── article-one.md
```

### 5.2 Esquema

```typescript
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    version: z.string().optional(),
    changeType: z.enum(['added', 'fixed', 'improved', 'deprecated']).default('added'),
  }),
});
```

### 5.3 changeTypeConfig

Centralizado en `src/lib/changeTypeConfig.ts`:

```typescript
export const changeTypeConfig = {
  added: { symbol: '+', label: 'added', className: 'text-diff-added' },
  improved: { symbol: '~', label: 'improved', className: 'text-amber' },
  fixed: { symbol: '-', label: 'fixed', className: 'text-diff-removed' },
  deprecated: { symbol: '!', label: 'deprecated', className: 'text-muted' },
} as const;
```

---

## 6. Internacionalización

Config Astro:

```javascript
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routing: { prefixDefaultLocale: true },
}
```

- UI strings: `src/i18n/ui.ts`
- Contenido portafolio: `src/data/portfolio.{lang}.ts`
- Blog: carpetas separadas `content/blog/es/` y `content/blog/en/`

Ver [I18N.md](./I18N.md).

---

## 7. Contacto

Solo enlaces externos — sin formulario ni backend:

- Email
- WhatsApp
- LinkedIn
- GitHub

---

## 8. Gestión de contenido

- **Fase actual:** archivos TypeScript/Markdown en el repo
- **Futuro opcional:** Keystatic (CMS Git-based, MIT)

---

## 9. Tipografía

| Rol | Fuente | Uso |
|-----|--------|-----|
| Display | Cabinet Grotesk | Títulos, hero, headings |
| Body | Inter | Párrafos, contenido |
| Mono | JetBrains Mono | Versiones, fechas, metadatos |

> No usar Space Grotesk en producción. Si Cabinet Grotesk no está disponible en npm, usar archivo local o Switzer como fallback.
