# Guía de contribución

¡Gracias por tu interés en contribuir a este proyecto! Este repositorio contiene el código fuente de mi portafolio y blog personal, desarrollado en código abierto.

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 22.12.0
- [pnpm](https://pnpm.io/) >= 10

## Configuración del entorno

```bash
git clone <url-del-repositorio>
cd portafolio
pnpm install
pnpm dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

## Flujo de trabajo

1. Haz fork del repositorio
2. Crea una rama descriptiva: `git checkout -b feat/nombre-de-la-feature`
3. Realiza tus cambios
4. Ejecuta las comprobaciones de calidad:

```bash
pnpm run check
pnpm run build
```

5. Haz commit con mensajes claros en español o inglés
6. Abre un Pull Request describiendo el cambio y su motivación

## Estándares de código

- **Linter y formateo:** [Biome](https://biomejs.dev/) — ejecuta `pnpm run check` antes de hacer commit
- **Código:** en inglés (nombres de variables, funciones, archivos)
- **Textos de UI y documentación:** en español
- **Commits:** mensajes concisos que expliquen el *porqué* del cambio

## Extensiones recomendadas (VS Code / Cursor)

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

## Reportar problemas

- Usa las [plantillas de issues](../../issues/new/choose) del repositorio
- Describe el problema con pasos para reproducirlo
- Incluye versión de Node.js y sistema operativo si es relevante

## Código de conducta

Al participar en este proyecto, aceptas cumplir nuestro [Código de conducta](./CODE_OF_CONDUCT.md).
