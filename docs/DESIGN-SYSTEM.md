# Sistema de diseño

## Metáfora changelog

Cada sección del portafolio usa la metáfora de un archivo `CHANGELOG.md`:

| Elemento | Metáfora | Componente |
|----------|----------|------------|
| Hero | Release actual | `Hero.astro` |
| Sobre mí | Descripción del release | `About.astro` |
| Stack | Dependencias | `Stack.astro` |
| Proyectos | `+ added` | `Projects.astro` |
| Trayectoria | Releases anteriores | `Career.astro` |
| Blog | Release notes | `BlogPreview.astro` |
| Contacto | Abrir issue | `Contact.astro` |
| Footer | Exportar release note | `Footer.astro` |

## Tokens de color

Definidos en `src/styles/global.css`. Los valores reales viven en variables CSS `--token-*`; se exponen como utilidades Tailwind via `@theme`.

### Modo claro (`:root`)

| Token | Valor | Utilidad |
|-------|-------|----------|
| `--token-bg` | `#F6F7F9` | `bg-bg` |
| `--token-surface` | `#FFFFFF` | `bg-surface` |
| `--token-surface-1` | `#EDEEF1` | `bg-surface-1` |
| `--token-surface-hover` | `#F0F1F4` | `bg-surface-hover` |
| `--token-border` | `rgba(30,33,39,0.12)` | `border-border` |
| `--token-text-primary` | `#1E2127` | `text-primary` |
| `--token-text-secondary` | `#5A5F68` | `text-secondary` |
| `--token-text-muted` | `#8A8F98` | `text-muted` |
| `--token-green-diff` | `#2B7A44` | `text-diff-added` |
| `--token-red-diff` | `#A63D34` | `text-diff-removed` |
| `--token-amber` | `#9C7423` | `text-amber` |
| `--token-amber-bg` | `rgba(156,116,35,0.1)` | `bg-amber-bg` |

### Modo oscuro (`[data-theme='dark']`) — default

| Token | Valor |
|-------|-------|
| `--token-bg` | `#16181D` |
| `--token-surface` | `#1E2127` |
| `--token-surface-1` | `#262A31` |
| `--token-surface-hover` | `#24272E` |
| `--token-border` | `rgba(199,203,209,0.14)` |
| `--token-text-primary` | `#C7CBD1` |
| `--token-text-secondary` | `#8A8F98` |
| `--token-text-muted` | `#6B7078` |
| `--token-green-diff` | `#4F9D69` |
| `--token-red-diff` | `#C4544B` |
| `--token-amber` | `#D4A24C` |
| `--token-amber-bg` | `rgba(212,162,76,0.15)` |

## Tipografía

| Rol | Fuente | Utilidad | Uso |
|-----|--------|----------|-----|
| Display | Cabinet Grotesk | `font-display` | Títulos, hero, headings |
| Body | Inter | `font-sans` | Párrafos, contenido |
| Mono | JetBrains Mono | `font-mono` | Versiones, fechas, diffs |

### Fallback de display

Si `@fontsource/cabinet-grotesk` no está disponible, usar:

1. Archivo local en `public/fonts/` (con licencia válida), o
2. **Switzer** como alternativa documentada

No usar Space Grotesk en producción.

## Tema claro/oscuro

- Atributo `data-theme="dark"` | `data-theme="light"` en `<html>`
- Modo oscuro es el default
- Persistencia en `localStorage` key `theme`
- Script inline en `<head>` para evitar flash de tema incorrecto
- Variante Tailwind: `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))`

## Tipos de cambio (blog)

| Tipo | Símbolo | Color |
|------|---------|-------|
| added | `+` | `text-diff-added` |
| improved | `~` | `text-amber` |
| fixed | `-` | `text-diff-removed` |
| deprecated | `!` | `text-muted` |

## Reglas de estilo

1. Preferir utilidades Tailwind en atributos `class`
2. Evitar bloques `<style>` con `@apply`
3. Si `@apply` es necesario, usar `@reference` al CSS global
4. Colores semánticos via tokens — no hardcodear hex en componentes
5. Espaciado de sección: `py-section` (3rem)

## Convención de versiones

Formato `vAAAA.MM` — año y mes del release actual del autor.

Ejemplo: `v2026.07` para julio de 2026.
