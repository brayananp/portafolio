# Portafolio

Portafolio y blog personal desarrollado en código abierto con [Astro](https://astro.build).

[![CI](https://github.com/OWNER/portafolio/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/portafolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Concepto visual: **changelog / historial de versiones de software**. Cada sección del portafolio se presenta como un registro de releases.

## Stack

- [Astro 7](https://astro.build/) — framework web
- [TailwindCSS v4](https://tailwindcss.com/) — estilos CSS-first con `@theme`
- [Biome](https://biomejs.dev/) — linter y formateador
- [pnpm](https://pnpm.io/) — gestor de paquetes
- TypeScript

## Requisitos

- Node.js >= 22.12.0
- pnpm >= 10

## Inicio rápido

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:4321/es](http://localhost:4321/es) en tu navegador.

## Scripts

| Comando            | Descripción                              |
| ------------------ | ---------------------------------------- |
| `pnpm dev`         | Servidor de desarrollo                   |
| `pnpm build`       | Build de producción en `./dist/`         |
| `pnpm preview`     | Vista previa del build                   |
| `pnpm lint`        | Ejecutar linter                          |
| `pnpm format`      | Formatear archivos                       |
| `pnpm check`       | Lint + formato + organizar imports       |
| `pnpm check:ci`    | Verificación para CI (sin escribir)      |

## Estructura del proyecto

```text
/
├── docs/                # Documentación del proyecto
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes Astro
│   ├── data/            # Contenido del portafolio (es/en)
│   ├── i18n/            # Cadenas de UI bilingüe
│   ├── layouts/         # Layouts base
│   ├── lib/             # Utilidades compartidas
│   ├── pages/           # Rutas (/es, /en)
│   ├── styles/          # Tailwind v4 + design tokens
│   └── types/           # Tipos TypeScript
├── CONTEXT.md           # Contexto para desarrolladores e IA
├── biome.json           # Configuración de Biome
└── astro.config.mjs     # Configuración de Astro
```

## Documentación

| Documento | Descripción |
|-----------|-------------|
| [CONTEXT.md](./CONTEXT.md) | Contexto del proyecto y decisiones |
| [docs/SPEC.md](./docs/SPEC.md) | Especificación maestra |
| [docs/ROADMAP.md](./docs/ROADMAP.md) | Fases de implementación |
| [docs/CONTENT-GUIDE.md](./docs/CONTENT-GUIDE.md) | Guía para reemplazar placeholders |

## Idiomas

El sitio está disponible en español (`/es`) e inglés (`/en`). La ruta raíz redirige a `/es`.

## Contribuir

Las contribuciones son bienvenidas. Lee la [guía de contribución](./CONTRIBUTING.md) antes de abrir un PR.

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).
