# Despliegue

> **Estado:** hosting por definir. Este documento describe opciones y checklist.

## Opciones de hosting

| Plataforma | Ventajas | Consideraciones |
|------------|----------|-----------------|
| **Vercel** | Deploy automático desde Git, preview PRs, CDN global | Gratis para proyectos personales |
| **Netlify** | Similar a Vercel, forms nativos (no usados aquí) | Gratis con límites de build |
| **Cloudflare Pages** | CDN Cloudflare, builds rápidos | Integración con Workers si se necesita SSR futuro |
| **GitHub Pages** | Gratis con repo público, simple | Requiere configuración de `base` si no es dominio raíz |

Todos son compatibles con Astro SSG sin adaptador.

## Configuración `site` en Astro

Cuando se decida el dominio, configurar en `astro.config.mjs`:

```javascript
export default defineConfig({
  site: import.meta.env.SITE_URL ?? 'https://example.com',
});
```

O via variable de entorno en CI:

```bash
SITE_URL=https://tudominio.com pnpm build
```

## Checklist pre-deploy

- [ ] `pnpm run build` exitoso sin errores
- [ ] `site` configurado con URL de producción
- [ ] Favicon presente (`public/favicon.svg`)
- [ ] Meta tags básicos (title, description) por página
- [ ] `hreflang` alternates para `/es` y `/en`
- [ ] Placeholders reemplazados por contenido real (ver [CONTENT-GUIDE.md](./CONTENT-GUIDE.md))
- [ ] Enlaces de contacto actualizados (email, WhatsApp, LinkedIn, GitHub)
- [ ] Badge CI en README apunta al repo correcto (reemplazar `OWNER/portafolio`)
- [ ] Probar ambos temas (claro/oscuro) y ambos idiomas

## CI existente

El workflow en `.github/workflows/ci.yml` ejecuta `pnpm run check:ci` y `pnpm run build` en cada push/PR.

## Dominio personalizado

Pasos generales (varían por plataforma):

1. Añadir registro DNS (CNAME o A) apuntando al hosting
2. Configurar dominio custom en el panel del hosting
3. Actualizar `site` en Astro con la URL final
4. Verificar HTTPS activo
