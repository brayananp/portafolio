# Guía de contenido

Cómo reemplazar los placeholders del portafolio con contenido real.

## Archivos de datos

| Archivo | Idioma | Contenido |
|---------|--------|-----------|
| `src/data/portfolio.es.ts` | Español | Bio, proyectos, trayectoria, stack, contacto |
| `src/data/portfolio.en.ts` | Inglés | Misma estructura, textos traducidos |

Ambos exportan un objeto `portfolio` tipado con `PortfolioData` de `src/types/portfolio.ts`.

## Estructura de tipos

```typescript
interface PortfolioData {
  isPlaceholder: boolean;
  hero: {
    version: string;       // vAAAA.MM
    role: string;
    tagline: string;
    releaseDate: string;
  };
  about: {
    content: string;
  };
  stack: StackCategory[];
  projects: Project[];
  career: CareerEntry[];
  contact: ContactLinks;
  social: SocialLinks;
}
```

## Convención de versiones

Formato `vAAAA.MM`:

- `v2026.07` — julio 2026
- Actualizar en hero al inicio de cada mes o cuando haya un cambio significativo

## Proyectos

Cada proyecto incluye:

```typescript
{
  id: 'smartrent',
  name: 'SmartRent',
  version: 'v1.0.0',
  summary: 'Descripción breve',
  details: 'Descripción extendida para el panel expandible',
  tags: ['react', 'typescript'],
  links?: { demo?: string; repo?: string; };
}
```

Proyectos planificados: SmartRent, QuotePilot, sitios e-commerce B2B.

## Trayectoria

Entradas cronológicas descendente:

```typescript
{
  version: 'v2023.06',
  title: 'Systems Engineer — UCV',
  period: '2019 – 2023',
  description: 'Graduación con enfoque en...',
}
```

## Stack técnico

Agrupado por categoría:

```typescript
{
  category: 'frontend',
  label: 'Frontend',
  items: ['React', 'TypeScript', 'TailwindCSS'],
}
```

Categorías sugeridas: frontend, backend, database, tools.

## Contacto

Actualizar URLs reales en ambos archivos de datos:

```typescript
contact: {
  email: 'mailto:tu@email.com',
  whatsapp: 'https://wa.me/51XXXXXXXXX',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario',
}
```

## UI strings

Cadenas de interfaz en `src/i18n/ui.ts` — nav, labels, CTAs. Editar ambos bloques `es` y `en`.

## Blog (Fase 2) — plantilla frontmatter

```markdown
---
title: "Título del artículo"
description: "Descripción SEO (max 160 chars)"
publishedAt: 2026-06-15
tags: ["tanstack-start", "arquitectura"]
version: "v2026.06"
changeType: "improved"
---

Contenido en Markdown...
```

Tipos de cambio: `added`, `improved`, `fixed`, `deprecated`.

## Checklist al reemplazar placeholders

1. Cambiar `isPlaceholder: false` en ambos archivos de datos
2. Revisar textos en `/es` y `/en`
3. Verificar enlaces de contacto y redes
4. Actualizar versión del hero
5. Ejecutar `pnpm run build` para validar
