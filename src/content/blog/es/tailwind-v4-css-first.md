---
title: "TailwindCSS v4: configuración CSS-first"
description: "Por qué migrar a Tailwind v4 con @theme y @plugin en lugar del clásico tailwind.config.js."
publishedAt: 2026-06-20
tags: ["tailwindcss", "css", "diseño"]
version: "v2026.06"
changeType: "improved"
---

TailwindCSS v4 cambia el modelo mental: la configuración vive en CSS, no en JavaScript.

## De config.js a @theme

En lugar de un `tailwind.config.mjs`, los tokens de diseño se declaran en `global.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-primary: var(--token-text-primary);
  --font-display: "Cabinet Grotesk", sans-serif;
}
```

Esto acerca el diseño al navegador: variables CSS nativas, sin capa intermedia.

## Modo oscuro con data-theme

Para temas con persistencia en `localStorage`, una variante custom evita depender de `prefers-color-scheme`:

```css
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

Un script inline en `<head>` aplica el tema antes del primer paint.

## Integración con Astro

Con Vite, basta el plugin `@tailwindcss/vite` en `astro.config.mjs`. No se necesita `@astrojs/tailwind`.

El resultado: menos archivos de configuración, tokens compartidos entre utilidades y CSS vanilla, y un flujo más predecible para equipos que ya piensan en design tokens.
