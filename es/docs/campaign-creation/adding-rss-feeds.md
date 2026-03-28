---
source: "https://support.cakemail.com/hc/en-us/articles/36116222346651-Add-an-RSS-Feed-to-Your-Email-Campaign"
---

# Agregar feeds RSS

## Descripción
Mantén a tu audiencia actualizada automáticamente con contenido fresco integrando un feed RSS en tu boletín. Si ya tienes un feed RSS, agregarlo a tu campaña de correo electrónico es simple y efectivo.

## Por qué es importante

La integración de feeds RSS es un cambio radical para el marketing por correo electrónico basado en contenido, permitiéndote poblar automáticamente tus boletines con contenido fresco y dinámico sin actualizaciones manuales. Esta función ahorra tiempo considerable a editores, bloggers y creadores de contenido que regularmente comparten actualizaciones con su audiencia. Al automatizar la distribución de contenido, te aseguras de que los suscriptores siempre reciban tus últimos artículos, publicaciones de blog o noticias, manteniendo el compromiso y generando tráfico constante a tu sitio web mientras reduces el riesgo de enviar información desactualizada.

## Instrucciones paso a paso
Sigue estos pasos para insertar actualizaciones RSS en tu contenido de correo electrónico:

#### Agregar un bloque de contenido
En el editor de correo electrónico, inserta un bloque de contenido de párrafo donde quieras que aparezca el contenido RSS.

#### Insertar código RSS
Copia y pega la plantilla de código RSS en tu bloque de contenido.

#### Reemplazar URL de marcador de posición
Reemplaza yourWebsiteRSSURL en el código con la URL real de tu feed RSS.

#### Vista previa y prueba
Después de insertar tu feed RSS, previsualiza el correo electrónico antes de enviarlo. También puedes enviarte un correo electrónico de prueba para confirmar que el contenido aparece como se espera.

💡 **Nota:** El contenido RSS se mostrará al salir del diseñador de correo electrónico o en la vista previa del correo de prueba.

## Sintaxis y explicación del código RSS

El contenido RSS comienza con:
```
[RSS=yourWebsiteRSSURL]
```

El contenido RSS termina con:
```
[ENDRSS]
```

Dentro de la sección RSS, cada elemento del feed se referencia usando un índice:

- `[RSS-0-*]` se refiere al elemento más reciente
- `[RSS-1-*]` se refiere al segundo elemento más reciente, y así sucesivamente

Puedes incluir los siguientes elementos de tu feed:

| Etiqueta | Descripción |
|----------|-------------|
| `[RSS-0-title]` | Título del artículo |
| `[RSS-0-description]` | Resumen o texto de vista previa |
| `[RSS-0-link]` | Enlace directo al artículo |
| `[RSS-0-dc:creator]` | Autor del artículo |
| `[RSS-0-pubDate]` | Fecha de publicación |
| `[RSS-0-media:content]` o `[RSS-0-media:content-attributes:url]` | Imagen del artículo |
| `[RSS-0-media:credit]` | Crédito de imagen |
| `[RSS-0-media:description]` | Descripción de imagen |

Usamos las etiquetas más comunes, pero debes verificar tu propio código de feed RSS para asegurar que las etiquetas tengan los nombres correctos.

Por ejemplo:
- `<title>` se convierte en `[RSS-#-title]`
- `<link>` se convierte en `[RSS-#-link]`

## Dar estilo a tu contenido de feed RSS

Puedes personalizar cómo aparece el contenido RSS en tu correo electrónico:

- Poner texto en negrita o cursiva usando las opciones de formato en el editor
- Combinar colores de marca ajustando los colores de texto y enlaces
- Para resaltar títulos, usa un bloque de contenido de título para aumentar el tamaño y peso de la fuente
- Para agregar una imagen, usa un bloque de contenido de imagen, selecciona imagen dinámica, e inserta este código en el campo: `[RSS-0-media:content-attributes:url]`

![Screenshot of the add interface](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-246.png)
## Ejemplo: Integrar los 3 artículos más recientes

Puedes copiar y pegar el siguiente código para usar como una plantilla simple para mostrar tu RSS:

```
Descubre las 3 últimas noticias de nuestro sitio web:

[RSS=yourWebsiteRSSURL]
 
[RSS-0-title]
[RSS-0-description]
[RSS-0-link]
[RSS-0-media:content:url]
 
[RSS-1-title]
[RSS-1-description]
[RSS-1-link]
 
[RSS-2-title]
[RSS-2-description]
[RSS-2-link]
 
[ENDRSS]
```

Reemplaza yourWebsiteRSSURL con la URL real de tu feed (por ejemplo, https://rss.nytimes.com/services/xml/rss/nyt/World.xml).

## Entender las etiquetas RSS (con ejemplo)

Aquí hay un ejemplo RSS del feed RSS del New York Times:

```xml
<item>
<title>Europe Seeks a Direct Line to Trump</title>
<link>https://www.nytimes.com/.../europe-trump-trade-defense.html</link>
<description>Despite Europe's size...</description>
<dc:creator>Steven Erlanger</dc:creator>
<pubDate>Thu, 17 Apr 2025 10:19:39 +0000</pubDate>
<media:content url="https://static01.nyt.com/..." />
<media:credit>Eric Lee/The New York Times</media:credit>
<media:description>In President Trump's White House...</media:description>
</item>
```

Usarías el siguiente código:

```
[RSS=yourWebsiteRSSURL]
[RSS-0-title]
[RSS-0-link]
[RSS-0-description]
[RSS-0-dc:creator]
[RSS-0-pubDate]
[RSS-0-media:content-attributes:url]
[RSS-0-media:credit]
[RSS-0-media:description]
[ENDRSS]
```

![Screenshot of the add interface](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-247.png)

![An Rss Feed To Your Email Campaign 248](/images/campaign-creation/campaigns-add-an-rss-feed-to-your-email-campaign-248.png)
## Solución de problemas

**El feed RSS no se muestra**

- Verifica que la URL RSS sea correcta y esté públicamente accesible
- Verifica que el feed esté en formato XML válido usando un validador RSS
- Asegúrate de que las etiquetas RSS coincidan con la estructura real de tu feed

**El contenido se muestra como código**

- Sal del diseñador de correo electrónico para ver el contenido renderizado
- Envía un correo electrónico de prueba para previsualizar el contenido RSS real
- Verifica que no falten etiquetas de cierre como [ENDRSS]

**Las imágenes no se cargan**

- Verifica que tu feed RSS incluya etiquetas de contenido multimedia
- Verifica el formato de URL de imagen en tu feed
- Usa la sintaxis de etiqueta correcta: [RSS-0-media:content-attributes:url]

**Aparece contenido desactualizado**

- Limpia el caché de tu navegador y actualiza
- Verifica si el feed RSS en sí se está actualizando correctamente
- Permite tiempo para que las actualizaciones del feed se propaguen (generalmente 15-30 minutos)

**Problemas de formato**

- Usa bloques de contenido separados para encabezados y texto del cuerpo
- Aplica formato después de insertar las etiquetas RSS
- Prueba diferentes combinaciones de etiquetas RSS para una visualización óptima

## Artículos relacionados

- [Usar contenido dinámico](/es/docs/personalization/using-dynamic-content) - Contenido RSS dinámico
- [Crear campañas](/es/docs/campaign-creation/creating-campaigns) - Conceptos básicos de creación de campañas
- [Crear una automatización en bucle](/es/docs/automations/creating-a-looping-automation) - Automatizar campañas RSS
- [Usar el diseñador de correo electrónico](/es/docs/campaign-creation/using-the-email-designer) - Diseñar diseños RSS
- [Probar tu campaña](/es/docs/campaign-creation/testing-your-campaign) - Probar feeds RSS