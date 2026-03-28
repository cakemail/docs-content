---
source: "https://support.cakemail.com/hc/en-us/articles/1260804575629-Using-merge-tags-and-fallbacks"
---

# Usar etiquetas de combinación y respaldos

## Descripción

Además de las etiquetas de combinación, puede agregar cualquier etiqueta personalizada que pueda haber configurado para una lista de suscriptores. Las empresas usan estas etiquetas personalizadas en correos para ser más relevantes para los clientes y darles una mejor experiencia. Puede especificar una etiqueta de personalización al agregar una etiqueta personalizada. Una vez que agregue las etiquetas a una campaña y la envíe a esa lista, esas etiquetas se llenarán automáticamente con información del suscriptor.

## Por qué es importante

Es crucial personalizar el marketing por correo para asegurar que sus destinatarios sientan que les está hablando auténticamente. Como resultado, puede incluir contenido relevante que hable directamente a cada cliente usando campos de personalización en sus mensajes de correo.

## Instrucciones paso a paso

### Sintaxis básica
```
[nombre del campo,respaldo]
```

- **"nombre del campo"** puede sustituirse con "firstname" para este ejemplo
- **"respaldo"** puede sustituirse con cualquier palabra que elija, en este caso ingresemos la palabra "amigo"

### Ejemplos

**Ejemplo 1:**
```
Hola [firstname,amigo]
```
- Seleccionaría el campo [firstname] y lo llenaría con la información disponible de su lista
- Si está vacío, usaría "amigo" en su lugar
- Así que `Hola [firstname,amigo]` se leería como: **'Hola Julia,'** o **'Hola amigo'**

**Ejemplo 2:**
```
Hola [firstname,estimado cliente]
```
- Seleccionaría la etiqueta [firstname] y la llenaría con la información disponible de su lista
- Si está vacía, usaría "estimado cliente" en su lugar
- Así que `Hola [firstname,estimado cliente]` se leería como: **'Hola Alex,'** o **'Hola estimado cliente,'**

## Beneficios

Si no tiene datos relevantes, se sustituirá una palabra de respaldo. Mientras más las use, más dinámicas serán sus campañas y más enriquecerá su rendimiento en términos de engagement.

## Solución de problemas

**Los valores de respaldo no se muestran cuando el campo está vacío**

- Verifique la sintaxis: asegúrese de que la coma separe el nombre del campo y el respaldo
- Verifique que no haya espacios antes o después de la coma
- Confirme que los corchetes estén cerrados correctamente [campo,respaldo]
- Pruebe con campos vacíos conocidos para verificar la funcionalidad

**Aparece texto de respaldo incorrecto**

- Examine si el nombre del campo está escrito correctamente (sensible a mayúsculas)
- Verifique si el campo realmente contiene datos (podría parecer vacío pero tener espacios)
- Asegúrese de estar usando el nombre de campo correcto de su lista de contactos
- Verifique que no haya caracteres ocultos en su sintaxis de etiqueta de combinación

**Las comas en el texto de respaldo causan problemas**

- Evite usar comas en el texto de respaldo ya que son separadores de sintaxis
- Use puntuación alternativa si es necesario
- Considere usar etiquetas de combinación sin respaldos para texto complejo
- Pruebe exhaustivamente cuando el respaldo contenga caracteres especiales

**Los respaldos funcionan en vista previa pero no en correos enviados**

- Verifique que los datos de contacto no hayan cambiado entre la vista previa y el envío
- Verifique si el proceso de importación está completo para todos los contactos
- Asegúrese de que no hayan actualizaciones de lista de último minuto que hayan afectado los datos
- Pruebe con un segmento pequeño antes del envío completo

## Artículos relacionados

- [Agregar etiquetas de combinación a una campaña](/es/docs/personalization/adding-merge-tags-to-a-campaign) - Guía de implementación
- [Agregar atributos a su lista](/es/docs/audience/adding-attributes-to-your-list) - Crear campos de combinación
- [Agregar su dirección física](/es/docs/campaign-creation/adding-your-physical-address) - Etiqueta de combinación de dirección
- [Importar contactos](/es/docs/audience/importing-contacts-into-your-lists) - Importar datos de combinación
- [Usar el diseñador de correos](/es/docs/campaign-creation/using-the-email-designer) - Insertar etiquetas de combinación