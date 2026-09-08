# Auditoría editorial del blog de Roesan

Fecha de auditoría: 2026-08-28

## Criterio aplicado

La prioridad fue exactitud y confianza. Un artículo se considera listo para publicación únicamente cuando sus afirmaciones principales pueden sostenerse con fuentes identificadas y cuando no conserva precios, rankings, estadísticas o conclusiones legales sin metodología verificable.

- **Mantener:** reescrito y verificado; puede indexarse.
- **Actualizar:** la intención es útil, pero requiere sustituir cifras o afirmaciones y completar fuentes.
- **Revisar urgentemente:** contiene riesgos legales, médicos, financieros, rankings o cifras extensas sin respaldo suficiente. Conserva su URL con HTTP 200, muestra un aviso editorial y usa `noindex` hasta completar la revisión.

## Clasificación de los 13 artículos

| Estado | Artículo | Motivo principal |
|---|---|---|
| Mantener | `seguro-automovil-colombia-guia` | Reescrito sin precios inventados; diferencia SOAT/seguro voluntario respaldada por Fasecolda y SFC. |
| Mantener | `seguro-para-copropiedades-guia` | Reescrito conforme al artículo 15 de la Ley 675; separa obligación legal y coberturas adicionales. |
| Mantener | `seguro-hogar-vivienda-guia-completa` | Reescrito con Fasecolda y SFC; eliminados Fenaincol, porcentajes, precios y comparaciones sin respaldo. |
| Actualizar | `seguro-de-vida-decision-importante` | Debe revisar fórmulas de suma asegurada, rangos de primas y generalizaciones sobre aceptación. |
| Actualizar | `seguro-bicicletas-patinetas-electricas-colombia` | Tema útil, pero estadísticas de hurto, precios, obligaciones y productos requieren fuentes actuales. |
| Actualizar | `seguro-mascotas-responsabilidad-civil` | Debe validar costos veterinarios, límites, exclusiones y afirmaciones jurídicas sobre responsabilidad. |
| Revisar urgentemente | `costo-seguro-contra-todo-riesgo-bogota` | Contiene numerosos precios, porcentajes de riesgo, deducibles, tiempos de emisión y datos geográficos sin fuente o metodología. |
| Revisar urgentemente | `medicina-prepagada-adultos-mayores-bogota` | Contiene tiempos médicos, precios, aceptación por edad, preexistencias y conclusiones legales/médicas sensibles. |
| Revisar urgentemente | `seguro-inversion-no-gasto` | Presenta rentabilidades, inflación, escenarios patrimoniales y productos de inversión como resultados generales. |
| Revisar urgentemente | `seguro-vida-deudor-hipotecario-ahorro` | Afirma ahorros y condiciones de endoso que dependen del crédito, banco, póliza y marco contractual. |
| Revisar urgentemente | `sarlaft-importancia-empresas-personas` | Generaliza obligaciones, sanciones y sujetos obligados; requiere revisión jurídica especializada y norma aplicable por sector. |
| Revisar urgentemente | `planes-mas-que-seguros-eps` | Incluye precios, tiempos de cita y descripciones de productos de salud que deben verificarse con condiciones vigentes. |
| Revisar urgentemente | `mejores-aseguradoras-colombia-2026` | Ranking sin metodología pública, NPS, ratings, oficinas, tiempos de pago y precios no respaldados. |

## Correcciones factuales realizadas

1. Se sustituyó “Fenaincol (Federación Nacional de Aseguradoras)” por una guía completamente nueva que identifica correctamente a **Fasecolda, Federación de Aseguradores de Colombia**.
2. La explicación de la Ley 675 se ajustó al texto del artículo 15: es obligatoria la póliza contra incendio y terremoto para los bienes comunes susceptibles de ser asegurados. No se presentan responsabilidad civil, manejo u otros amparos como obligaciones creadas por ese artículo.
3. Se eliminaron del contenido público precios promedio, rankings, NPS, ratings, tiempos de pago, porcentajes de hurto y comparaciones de aseguradoras que carecían de fuente o metodología.
4. Los títulos evergreen revisados dejaron de usar “2026” cuando el contenido no depende del año.
5. Los enlaces antiguos a `roesan.co` se corrigieron hacia rutas existentes de `roesan.com`.

## Fuentes primarias utilizadas

- Secretaría del Senado: Ley 675 de 2001, artículo 15.
- Fasecolda: seguro de bienes comunes, seguro de hogar y preguntas frecuentes sobre seguro de automóviles.
- Superintendencia Financiera de Colombia: preguntas frecuentes y jurisprudencia sobre contratos de seguro.

Cada guía publicada muestra sus fuentes al final y enlaza la fuente correspondiente junto a las afirmaciones principales.

## Auditoría de enlaces

- `https://www.segurosbolivar.com/autos` respondió 404 durante la auditoría.
- Las URLs `allianz.com.co` redirigen a `allianz.co` y el servidor respondió 403 al verificador automatizado.
- Varias URLs de SURA y Shaio no pudieron comprobarse por restricciones del servidor/TLS; no se consideran verificadas.
- Cinco enlaces internos antiguos apuntaban a `roesan.co`; fueron sustituidos por rutas válidas de `roesan.com`.
- Los enlaces dudosos restantes pertenecen a artículos retirados temporalmente de publicación y deben reemplazarse al revisar cada texto.

## Autoría y revisión humana

Los datos existentes no permiten demostrar qué persona escribió o revisó cada artículo. Para evitar una atribución falsa, los contenidos publicados aparecen como obra del **Equipo editorial de Roesan Seguros**, tanto de forma visible como en Schema.org. El modelo admite `reviewerSlug` y autores de tipo `Person`; Roesan debe confirmar nombre, fotografía, cargo, experiencia y participación real antes de asignar una persona.

## Verificación técnica y visual

- Las tres guías publicadas generan `BlogPosting` y `BreadcrumbList`; las diez páginas en revisión no generan marcado de artículo y usan `noindex, follow`.
- El hub, las páginas temáticas, el perfil editorial, la política editorial, el RSS, el sitemap, `robots.txt` y `llms.txt` fueron incluidos en las pruebas automáticas.
- La compilación de producción genera 82 rutas y la prueba SEO de respuesta HTTP supera 9 de 9 escenarios.
- La revisión visual se realizó en escritorio (1440 px) y móvil (390 px) sobre el build de producción. No se observaron desbordamientos en las tarjetas ni en la tabla de coberturas, y no aparecieron errores de JavaScript en consola.
- El control del menú móvil funcionaba, pero carecía de nombre accesible. Se corrigió con `aria-label`, `aria-expanded` y `aria-controls`.
- No se añadió paginación porque solo hay tres guías verificadas visibles. Debe incorporarse cuando la biblioteca pública crezca lo suficiente para que una sola página perjudique la navegación o el rendimiento.

## Datos internos solicitados para futuras versiones

- Cotizaciones anonimizadas con período, tamaño de muestra, perfiles incluidos y método de cálculo.
- Evidencia de métricas propias como satisfacción, tiempos de respuesta o número de pólizas.
- Condicionados y fichas de producto vigentes para comparaciones.
- Responsable humano de autoría y revisión por tema.
- Metodología pública antes de publicar cualquier ranking de aseguradoras.
