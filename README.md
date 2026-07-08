# Portafolio

Portafolio y blog personal desarrollado en código abierto con [Astro](https://astro.build).

[CI](https://github.com/brayananp/portafolio/actions/workflows/ci.yml)
[License: MIT](./LICENSE)
[Live Site](https://brayan-nunez.pages.dev/es)

[Astro](https://astro.build)
[TypeScript](https://www.typescriptlang.org/)
[Tailwind CSS](https://tailwindcss.com/)
[Node.js](https://nodejs.org/)
[pnpm](https://pnpm.io/)

[Biome](https://biomejs.dev/)
[Sharp](https://sharp.pixelplumbing.com/)
[pdf-lib](https://pdf-lib.js.org/)
[Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
[Cloudflare Pages](https://pages.cloudflare.com/)

Concepto visual: **changelog / historial de versiones de software**. Cada sección del portafolio se presenta como un registro de releases.

**Demo en vivo:** [brayan-nunez.pages.dev/es](https://brayan-nunez.pages.dev/es)

## Stack


| Capa        | Tecnología                                                                                                  | Uso                                |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Framework   | [Astro 7](https://astro.build/)                                                                             | SSG, rutas e i18n                  |
| Estilos     | [TailwindCSS v4](https://tailwindcss.com/)                                                                  | Tokens `@theme`, diseño responsive |
| Tipografía  | [Inter](https://fontsource.org/fonts/inter) + [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono) | UI y bloques de código             |
| Contenido   | Content Collections                                                                                         | Blog bilingüe (`/es`, `/en`)       |
| Calidad     | [Biome](https://biomejs.dev/)                                                                               | Lint, formato y CI                 |
| Exportación | [pdf-lib](https://pdf-lib.js.org/)                                                                          | CV descargable en PDF              |
| SEO         | `@astrojs/sitemap`, Open Graph, JSON-LD                                                                     | Sitemap, metadatos y rich results  |
| Hosting     | [Cloudflare Pages](https://pages.cloudflare.com/)                                                           | CDN global y deploy estático       |


## Requisitos

- Node.js >= 22.12.0
- pnpm >= 10

## Inicio rápido

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:4321/es](http://localhost:4321/es) en tu navegador.

### Variables de entorno

Copia `.env.example` a `.env` y define la URL pública del sitio:

```bash
SITE_URL=https://brayan-nunez.pages.dev
```

## Scripts


| Comando         | Descripción                         |
| --------------- | ----------------------------------- |
| `pnpm dev`      | Servidor de desarrollo              |
| `pnpm build`    | Build de producción en `./dist/`    |
| `pnpm preview`  | Vista previa del build              |
| `pnpm lint`     | Ejecutar linter                     |
| `pnpm format`   | Formatear archivos                  |
| `pnpm check`    | Lint + formato + organizar imports  |
| `pnpm check:ci` | Verificación para CI (sin escribir) |


## Estructura del proyecto

```text
/
├── docs/                # Documentación del proyecto
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes Astro
│   ├── content/         # Blog (Content Collections)
│   ├── data/            # Contenido del portafolio (es/en)
│   ├── i18n/            # Cadenas de UI bilingüe
│   ├── layouts/         # Layouts base
│   ├── lib/             # Utilidades compartidas
│   ├── pages/           # Rutas (/es, /en)
│   ├── styles/          # Tailwind v4 + design tokens
│   └── types/           # Tipos TypeScript
├── CONTEXT.md           # Contexto para desarrolladores e IA
├── biome.json           # Configuración de Biome
├── wrangler.jsonc       # Config de Cloudflare Pages
└── astro.config.mjs     # Configuración de Astro
```

## Documentación


| Documento                                        | Descripción                        |
| ------------------------------------------------ | ---------------------------------- |
| [CONTEXT.md](./CONTEXT.md)                       | Contexto del proyecto y decisiones |
| [docs/SPEC.md](./docs/SPEC.md)                   | Especificación maestra             |
| [docs/ROADMAP.md](./docs/ROADMAP.md)             | Fases de implementación            |
| [docs/CONTENT-GUIDE.md](./docs/CONTENT-GUIDE.md) | Guía para reemplazar placeholders  |
| [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)       | Opciones y checklist de despliegue |


## Idiomas

El sitio está disponible en español (`/es`) e inglés (`/en`). La ruta raíz redirige a `/es` con HTTP 301.

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).