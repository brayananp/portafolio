# Portafolio

Portafolio y blog personal desarrollado en código abierto con [Astro](https://astro.build).

[![CI](https://github.com/OWNER/portafolio/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/portafolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## Stack

- [Astro 7](https://astro.build/) — framework web
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

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

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
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes Astro
│   ├── layouts/         # Layouts base
│   └── pages/           # Rutas del sitio
├── .github/             # CI y plantillas de GitHub
├── biome.json           # Configuración de Biome
└── astro.config.mjs     # Configuración de Astro
```

## Contribuir

Las contribuciones son bienvenidas. Lee la [guía de contribución](./CONTRIBUTING.md) antes de abrir un PR.

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).
