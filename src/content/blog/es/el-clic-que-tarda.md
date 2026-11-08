---
title: "El clic que tarda ya es el problema"
description: "INP mide la respuesta al toque. Cifras del Web Almanac 2025 y una revisión corta antes de entregar un sitio."
publishedAt: 2026-11-08
tags: ["rendimiento", "inp", "javascript"]
version: "v2026.11"
changeType: "added"
assistedByAi: true
coverImage: "/images/blog/el-clic-que-tarda-cover.jpg"
alternateSlug: "the-click-that-waits"
---

<figure>
  <img
    src="/images/blog/el-clic-que-tarda-cover.jpg"
    alt="Teléfono sobre fondo oscuro. Un botón ámbar espera, con una copia fantasma desplazada, junto a una línea de tres estados: toque, espera y fotograma pintado."
    width="1600"
    height="900"
    loading="eager"
    fetchpriority="high"
  />
  <figcaption>
    El hueco entre el toque y el siguiente fotograma es lo que INP resume en un solo número.
  </figcaption>
</figure>

En los sitios de catálogo que armo, el comentario que más se repite no habla del peso del archivo. Habla del botón.

La persona abre el sitio en el celular, toca el menú o un filtro, y la página se queda un instante en silencio. En la laptop, el informe de laboratorio puede verse razonable. En la mano, no. Nadie dice «tu JavaScript pesa 600 kilobytes». Dice que el control no responde.

## Qué está midiendo ese silencio

Ese silencio tiene nombre: **Interaction to Next Paint**, INP. Desde el 12 de marzo de 2024 es una [Core Web Vital](https://web.dev/blog/inp-cwv-march-12). Observa los clics, toques y pulsaciones de teclado durante toda la visita y se queda con una de las interacciones más lentas, dejando fuera los casos extremos. Mira la visita completa, no solo el primer toque, que era lo que medía FID.

Una página va bien cuando, en el percentil 75 de las visitas reales, el INP queda en **200 ms o menos**. Entre 200 y 500 ms hace falta mejorar. Por encima de 500 ms la respuesta es pobre. El percentil 75 importa: si una de cada cuatro visitas ya va mal, el sitio no pasa, aunque el resto se sienta rápido. La definición está en [web.dev](https://web.dev/articles/inp).

Doscientos milisegundos salen de cómo percibimos la causa. Por debajo de unos 100 ms, el botón y la respuesta se sienten como la misma acción. Pasados los 200 ms, esa sensación se rompe. El umbral bueno se dejó en 200 ms porque, en teléfonos reales, un objetivo de 100 ms casi nadie lo sostenía. El razonamiento está en [cómo se definieron los umbrales](https://web.dev/articles/defining-core-web-vitals-thresholds).

## Lo que dicen los sitios de verdad

El [Web Almanac 2025](https://almanac.httparchive.org/en/2025/page-weight), con el rastreo de julio, sitúa la página de inicio mediana en **2 559 KB** en móvil y **2 862 KB** en escritorio.

Ese total es el peso de la página. Cada tipo de archivo tiene su propia mediana, y no son trozos que sumen esa cifra. En móvil quedan así:

- 911 KB de imágenes
- 632 KB de JavaScript
- 122 KB de fuentes
- 77 KB de CSS
- 22 KB de HTML

En escritorio, la mediana de JavaScript sube a 697 KB. Las imágenes siguen ganando en bytes. El script, además, hay que parsearlo y ejecutarlo en el mismo hilo que tiene que pintar la respuesta al dedo.

En experiencia real el mapa es desigual. El capítulo de [rendimiento](https://almanac.httparchive.org/en/2025/performance) anota que en 2025 el **77 %** de los sitios tiene un INP bueno en teléfono y el **97 %** en escritorio. Si se piden las tres Core Web Vitals a la vez —LCP, INP y CLS—, quedan en «bueno» el **48 %** de los sitios móviles y el **56 %** de los de escritorio.

Hay un hueco más incómodo. En laboratorio, el Total Blocking Time mediano en móvil llegó a **1 916 ms**, un 58 % más que en 2024. En escritorio la mediana fue 92 ms. El INP de campo mejoró y el bloqueo medido en laboratorio empeoró. El propio Almanac ofrece dos lecturas: los teléfonos reales son más capaces y tapan parte de la complejidad, y algunos sitios afinan las interacciones que dominan el INP mientras dejan mucho trabajo de fondo.

Las páginas interiores en móvil salen peor que las de inicio: **69 %** con INP bueno, frente a **80 %** en la home. Filtros, validaciones y widgets que aparecen cuando la persona ya entró. Ahí suelo encontrar el clic que tarda.

<figure>
  <img
    src="/images/blog/el-clic-que-tarda-laboratorio.webp"
    alt="A la izquierda, un portátil con la página ya estable y un punto verde. A la derecha, un teléfono con un botón ámbar todavía apagado y un dedo esperando."
    width="1600"
    height="900"
    loading="lazy"
  />
  <figcaption>
    El informe de la laptop y la mano que espera no están midiendo el mismo momento.
  </figcaption>
</figure>

## Lo que reviso antes de entregar

Cuatro pasos me alcanzan para el primer control:

1. Abrir el sitio en un teléfono de gama media, además de la laptop donde lo desarrollé.
2. Tocar el menú, un filtro y un campo de formulario. Si la respuesta visual llega tarde, miro el hilo principal, no solo el peso de la descarga.
3. Preguntar para qué está cada script que no es el producto: un chat, una segunda analítica, un carrusel que nadie pidió.
4. Dejar en HTML lo que no cambia después del clic. Un catálogo legible sin hidratar toda la página llega antes a la mano.

Si el sitio ya tiene tráfico, PageSpeed Insights muestra datos de campo de CrUX. El informe de laboratorio responde otra pregunta: cómo se comporta en una máquina controlada. Las dos sirven. Describen momentos distintos.

| Señal | Bueno | Pobre |
| --- | --- | --- |
| INP, percentil 75 | ≤ 200 ms | > 500 ms |
| LCP | ≤ 2,5 s | > 4 s |
| CLS | ≤ 0,1 | > 0,25 |

Entre «bueno» y «pobre» queda la franja de «necesita mejorar». Los tres umbrales salen de [web.dev](https://web.dev/articles/vitals).

## Para cerrar

Cuando entrego un sitio, lo que más me preocupa es el primer control que alguien va a tocar en el celular. Si ese control responde, la conversación con el cliente empieza por algo que ya se puede usar.

Las cifras las contrasté con el Web Almanac 2025 y con la documentación de web.dev. Si un número de aquí no coincide con una medición de tu propio sitio, quédate con la medición: el Almanac describe la web en conjunto, no tu proyecto.
