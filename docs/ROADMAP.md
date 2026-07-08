# Roadmap

## Fase 1 — Fundación (completada)

**Objetivo:** Base visual y estructural del portafolio.

- [x] Documentación del proyecto (`docs/`, `CONTEXT.md`)
- [x] TailwindCSS v4 con tokens `@theme`
- [x] Layout con tema claro/oscuro y persistencia
- [x] Homepage bilingüe (`/es`, `/en`)
- [x] Todas las secciones con datos placeholder
- [x] Header con nav, selector idioma, toggle tema
- [x] Footer con stub "próximamente" para PDF
- [x] Blog preview con stub "próximamente"

**Fuera de alcance:** blog funcional, PDF dinámico, formulario de contacto.

---

## Fase 2 — Blog (completada)

**Objetivo:** Blog técnico con Content Collections.

- [x] Esquema en `src/content.config.ts`
- [x] Carpetas `content/blog/es/` y `content/blog/en/`
- [x] Páginas `blog/index.astro` y `blog/[slug].astro` por locale
- [x] Integración `changeTypeConfig` en listado y artículo
- [x] Plugin `@tailwindcss/typography` con estilos prose custom
- [x] 2-3 artículos de prueba
- [x] Navegación prev/next entre artículos
- [x] Reemplazar stub de `BlogPreview.astro` con posts reales

---



## Fase 3 — Exportar CV en PDF (completada)

**Objetivo:** Generar CV como release note descargable.

- [x] Instalar `pdf-lib`
- [x] Componente de generación con datos del portafolio
- [x] Botón funcional en footer
- [x] Diseño PDF alineado con metáfora changelog

---



## Fase 4 — Opcional

Mejoras no bloqueantes:

- [ ] Keystatic CMS (si hay fricción al publicar)
- [ ] Sección recomendaciones (cuando haya testimonios reales)
- [ ] Analytics (Plausible, Umami, etc.)
- [x] SEO avanzado (sitemap, robots.txt, Open Graph images)
- [ ] Decisión y configuración de hosting definitivo