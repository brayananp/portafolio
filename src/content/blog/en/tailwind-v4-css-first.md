---
title: "TailwindCSS v4: CSS-first configuration"
description: "Why migrate to Tailwind v4 with @theme and @plugin instead of the classic tailwind.config.js."
publishedAt: 2026-06-20
tags: ["tailwindcss", "css", "design"]
version: "v2026.06"
changeType: "improved"
---

TailwindCSS v4 shifts the mental model: configuration lives in CSS, not JavaScript.

## From config.js to @theme

Instead of a `tailwind.config.mjs`, design tokens are declared in `global.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-primary: var(--token-text-primary);
  --font-display: "Cabinet Grotesk", sans-serif;
}
```

This brings design closer to the browser: native CSS variables, no intermediate layer.

## Dark mode with data-theme

For themes with `localStorage` persistence, a custom variant avoids relying on `prefers-color-scheme`:

```css
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

An inline script in `<head>` applies the theme before first paint.

## Astro integration

With Vite, the `@tailwindcss/vite` plugin in `astro.config.mjs` is enough. No `@astrojs/tailwind` needed.

The result: fewer config files, tokens shared between utilities and vanilla CSS, and a more predictable workflow for teams already thinking in design tokens.
