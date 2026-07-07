# Contexto del proyecto — Portafolio Brayan Alexis Nuñez Pesantes

Documento de contexto para desarrolladores y agentes de IA. Para detalles técnicos completos, consultar [docs/SPEC.md](./docs/SPEC.md).

## Autor

- **Nombre:** Brayan Alexis Nuñez Pesantes
- **Formación:** Systems Engineer, Universidad César Vallejo (2023)
- **Stack principal:** TanStack Start, TypeScript, Drizzle ORM, PostgreSQL, Better Auth, shadcn/ui
- **Público objetivo:** Clientes freelance y reclutadores del mercado latinoamericano, particularmente Perú

## Propósito

Portafolio profesional con blog técnico integrado, construido con **Astro 7** y **TailwindCSS v4**. Código abierto (MIT).

## Concepto visual

Metáfora de **changelog / historial de versiones de software**. Cada sección del portafolio se presenta como un registro de versiones:

| Sección | Metáfora |
|---------|----------|
| Hero | Release actual (`vAAAA.MM`) |
| Sobre mí | Descripción del release |
| Stack técnico | Dependencias (estilo `package.json`) |
| Proyectos | Entradas de versión (`+ added`) |
| Trayectoria | Historial de releases anteriores |
| Blog | Release notes recientes |
| Contacto | Abrir un issue / solicitar cotización |
| Footer | Exportar CV como release note en PDF |

El modo oscuro es el tema por defecto (estado natural de editores y terminales).

## Decisiones cerradas

| Tema | Decisión |
|------|----------|
| Framework | Astro 7 |
| Estilos | TailwindCSS v4 (CSS-first con `@theme`, plugin `@tailwindcss/vite`) |
| Despliegue | Por definir — ver [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) |
| Contacto | Solo enlaces (email, WhatsApp, LinkedIn, GitHub) — sin formulario |
| Idioma | Bilingüe: rutas `/es` y `/en` |
| Contenido i18n | Archivos duplicados por idioma (`portfolio.es.ts`, `portfolio.en.ts`; blog futuro en `content/blog/es/` y `content/blog/en/`) |
| PDF | Fase 3 — footer con stub "próximamente" en Fase 1 |
| Blog | Fase 2 — Content Collections con Markdown |
| CMS | Markdown directo ahora; Keystatic opcional en Fase 4 |

## Documentación

| Documento | Contenido |
|-----------|-----------|
| [docs/SPEC.md](./docs/SPEC.md) | Especificación maestra del proyecto |
| [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) | Estructura de carpetas y flujo de datos |
| [docs/DESIGN-SYSTEM.md](./docs/DESIGN-SYSTEM.md) | Tokens, tipografía, tema claro/oscuro |
| [docs/I18N.md](./docs/I18N.md) | Internacionalización es/en |
| [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) | Opciones de hosting y checklist |
| [docs/ROADMAP.md](./docs/ROADMAP.md) | Fases de implementación |
| [docs/CONTENT-GUIDE.md](./docs/CONTENT-GUIDE.md) | Guía para reemplazar placeholders |

## Convenciones de código

- **Código:** inglés (variables, funciones, archivos)
- **UI y documentación:** español e inglés según locale
- **Linter:** Biome — ejecutar `pnpm run check` antes de commit
