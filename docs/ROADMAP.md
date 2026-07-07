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

## Fase 2 — Blog

**Objetivo:** Blog técnico con Content Collections.

- [ ] Esquema en `src/content/config.ts`
- [ ] Carpetas `content/blog/es/` y `content/blog/en/`
- [ ] Páginas `blog/index.astro` y `blog/[slug].astro` por locale
- [ ] Integración `changeTypeConfig` en listado y artículo
- [ ] Plugin `@tailwindcss/typography` con estilos prose custom
- [ ] 2-3 artículos de prueba
- [ ] Navegación prev/next entre artículos
- [ ] Reemplazar stub de `BlogPreview.astro` con posts reales

---

## Fase 3 — Exportar CV en PDF

**Objetivo:** Generar CV como release note descargable.

- [ ] Instalar `pdf-lib`
- [ ] Componente de generación con datos del portafolio
- [ ] Botón funcional en footer
- [ ] Diseño PDF alineado con metáfora changelog

---

## Fase 4 — Opcional

Mejoras no bloqueantes:

- [ ] Keystatic CMS (si hay fricción al publicar)
- [ ] Sección recomendaciones (cuando haya testimonios reales)
- [ ] Analytics (Plausible, Umami, etc.)
- [ ] SEO avanzado (sitemap, robots.txt, Open Graph images)
- [ ] Decisión y configuración de hosting definitivo
