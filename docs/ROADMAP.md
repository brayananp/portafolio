# Roadmap del portafolio a seis meses

Del 9 de noviembre de 2026 al 8 de mayo de 2027. El plan supone entre dos y tres horas de trabajo por semana.

El portafolio ya tiene una portada bilingüe, un blog, un CV descargable, un caso de Reactivos con cuatro catálogos públicos y un caso de SmartRent. Umami está integrado. La prioridad es que un cliente pueda entender qué construyes, comprobarlo en proyectos reales y contactarte desde el móvil.

## Mes 1. Mide los recorridos y corrige los bloqueos

Del 9 de noviembre al 8 de diciembre.

- [ ] Prueba el menú, el cambio de idioma, la apertura de proyectos, el contacto y la descarga del CV en móvil y escritorio. Repite el recorrido con teclado y revisa el foco y el contraste en ambos temas. [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [ ] Verifica que Umami reciba visitas a los casos. Registra clics de contacto por canal y descargas exitosas del CV. Usa nombres de eventos y datos de página, sin capturar mensajes ni datos de contacto. [Eventos de Umami](https://docs.umami.is/docs/track-events)
- [ ] Registra una medición inicial de carga y estabilidad visual en la portada, Reactivos y el blog. Usa datos de usuarios para evaluar los Core Web Vitals cuando haya volumen suficiente. [Web Vitals](https://web.dev/articles/vitals)
- [ ] Revisa Dependabot y activa la configuración predeterminada de CodeQL. Comprueba que el primer análisis termine y revisa sus hallazgos. [Configuración de CodeQL](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning)

**Entrega.** Una lista corta de problemas corregidos y una medición inicial que puedas repetir en el mes seis.

## Mes 2. Convierte Reactivos en tu caso principal

Del 9 de diciembre al 8 de enero.

- [ ] Presenta Reactivos como un trabajo para un cliente con cuatro catálogos. Explica el propósito de cada sitio y añade una captura pública útil por catálogo.
- [ ] Muestra un recorrido real desde la búsqueda de un producto hasta la solicitud de cotización. Identifica qué partes implementaste y explica una decisión técnica que ayudó a ese recorrido.
- [ ] Pide al cliente autorización para publicar un resultado concreto si tiene datos que lo respalden. Si no dispones de esas cifras, describe qué funcionalidad quedó en producción.
- [ ] Publica el caso en español e inglés y verifica los cuatro enlaces externos.

**Entrega.** Un caso que puedas enviar a un cliente que necesita un catálogo B2B.

## Mes 3. Demuestra tu trabajo en aplicaciones internas

Del 9 de enero al 8 de febrero.

- [ ] Completa SmartRent con un recorrido ilustrado o un video corto con datos ficticios. Elige una tarea concreta, como registrar un alquiler y revisar su estado, si forma parte del flujo entregado.
- [ ] Explica tu aporte técnico con un diagrama breve. Incluye solo componentes, roles y decisiones que puedas confirmar y compartir.
- [ ] Revisa Telso App como muestra de código abierto. Prueba la demo y documenta un recorrido reproducible en el repositorio. Si la demo falla, corrígela o enlaza a las instrucciones de ejecución.

**Entrega.** Un caso de aplicación interna que muestre el flujo y tu aporte sin exponer información del cliente.

## Mes 4. Haz que sea más fácil contratarte

Del 9 de febrero al 8 de marzo.

- [ ] Añade un bloque «En qué te puedo ayudar» con dos servicios concretos. Describe para quién sirve un catálogo B2B y qué tipo de trabajo puede resolver un panel interno. Enlaza cada servicio con su caso.
- [ ] Usa una llamada a la acción de contacto consistente en la portada y los casos. Elige el canal principal según cómo atiendes consultas y comprueba su apertura en móvil.
- [ ] Pide un testimonio breve sobre una entrega concreta. Publícalo solo con autorización. Revisa que el CV descargable incluya los casos actualizados.

**Entrega.** Un visitante puede identificar el servicio que necesita, ver un ejemplo y abrir un canal de contacto.

## Mes 5. Publica contenido que respalde los casos

Del 9 de marzo al 8 de abril.

- [ ] Publica una nota breve sobre cómo diseñaste el paso de una ficha de producto a una cotización en Reactivos.
- [ ] Publica otra nota sobre una decisión de implementación que puedas mostrar. Puedes usar SmartRent con datos ficticios o ampliar el artículo de INP con una prueba reproducible.
- [ ] Enlaza cada nota con el caso correspondiente. Comprueba que el título, la imagen al compartir y los enlaces funcionen en cada idioma que publiques.

**Entrega.** Dos notas técnicas con ejemplos que un lector pueda revisar o aplicar.

## Mes 6. Mide, prueba y ajusta

Del 9 de abril al 8 de mayo.

- [ ] Compara los primeros 28 días completos con medición activa y los últimos 28 días. Revisa visitas a casos, clics de contacto y descargas de CV. Cuenta los mensajes recibidos por separado de los clics.
- [ ] Si el tráfico es bajo, observa a tres personas intentar encontrar un caso, abrir un contacto y descargar el CV. Registra dónde se detienen y corrige el problema que más se repita.
- [ ] Repite la medición de rendimiento y la revisión de enlaces. Comprueba que el build, Biome y la auditoría de dependencias pasen en CI.

**Entrega.** Una revisión de resultados y una mejora concreta respaldada por datos o por observación directa.
