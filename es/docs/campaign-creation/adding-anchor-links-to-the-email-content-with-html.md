---
source: >-
  https://support.cakemail.com/hc/en-us/articles/13089282197915-Adding-anchor-links-to-the-Email-Content-with-HTML
---

# Agregar enlaces de anclaje al contenido de correo electrónico con HTML

## Descripción

Este artículo usa código HTML para explicar cómo agregar un enlace de anclaje al final del contenido de correo electrónico. Esta función puede ayudar a los lectores a navegar por el contenido del correo electrónico y tomar medidas, como suscribirse a un boletín informativo o seguir un enlace a un sitio web.

Por ejemplo, agregar un enlace de anclaje al final del contenido de correo electrónico puede involucrar efectivamente a los lectores y dirigirlos a una acción específica. Al proporcionar una llamada a la acción clara y facilitar que los lectores sigan adelante, puedes aumentar la probabilidad de lograr tus objetivos de marketing o comunicación.

## Por qué es importante

Los enlaces de anclaje son esenciales para mejorar la navegación por correo electrónico, especialmente en boletines informativos más largos o correos electrónicos de estilo resumen. Mejoran la experiencia del usuario al permitir a los lectores saltar directamente a las secciones de interés, reduciendo la fatiga del desplazamiento y aumentando la participación con tu contenido. Esta función es particularmente valiosa para correos electrónicos con múltiples temas, exhibiciones de productos o horarios de eventos, ya que ayuda a los lectores a encontrar rápidamente información relevante.

## Instrucciones paso a paso

<Stepper>

1. Crear un bloque HTML
   - Crea un bloque HTML en tu correo electrónico
   - Desplázate hasta la parte inferior del contenido de tu correo electrónico.

1. Insertar la etiqueta de anclaje
   Inserta una etiqueta de anclaje escribiendo el siguiente código HTML:
   ```html
   <a name="bottom"></a>
   ```
   Este código crea una ubicación a la que el enlace navegará cuando se haga clic.

1. Crear el texto del enlace
   - Escribe el texto que quieres usar como enlace, por ejemplo, "Haz clic aquí para más información."
   - Resalta el texto que escribiste y haz clic en el botón "Insertar enlace" en tu editor HTML.

1. Establecer el destino del enlace
   - En el campo "URL" del cuadro de diálogo del enlace, escribe "#bottom"
   - Esto creará un enlace y navegará a la ubicación que creaste con la etiqueta de anclaje
   - Haz clic en "Aceptar" para crear el enlace.

1. Guardar y enviar
   - Guarda el contenido de tu correo electrónico y envía el correo electrónico a tus destinatarios.

</Stepper>

### Ejemplo de código HTML

Aquí hay un ejemplo de cómo podría verse el código HTML para el contenido de correo electrónico con un enlace al final:

```html
<p>Este es el contenido de tu correo electrónico.</p>
<p>Haz clic <a href="#bottom">aquí</a> para más información.</p>
<a name="bottom"></a>
```

En este ejemplo, la etiqueta de anclaje crea la ubicación a la que el enlace navegará, y el atributo href en la etiqueta del enlace apunta a esa ubicación. Cuando el lector hace clic en el enlace, los lleva al final del contenido del correo electrónico, donde se encuentra la etiqueta de anclaje.

## Solución de problemas

**Los enlaces de anclaje no funcionan**

- Asegúrate de que los nombres de anclaje no contengan espacios o caracteres especiales
- Usa nombres de anclaje únicos para cada destino de enlace
- Prueba en múltiples clientes de correo electrónico ya que algunos pueden no soportar anclajes

**Los enlaces saltan a la ubicación incorrecta**

- Verifica que href="#nombreanclaje" coincida exactamente con el nombre del anclaje
- Verifica si hay nombres de anclaje duplicados en tu correo electrónico
- Coloca los anclajes antes del contenido al que quieres enlazar

**Compatibilidad del cliente de correo electrónico**

- Algunos clientes de correo electrónico (como Gmail) pueden eliminar la funcionalidad de anclaje
- Proporciona métodos de navegación alternativos para clientes incompatibles
- Prueba exhaustivamente en los clientes de correo electrónico principales de tu audiencia objetivo

**El código HTML no se muestra**

- Usa el bloque de contenido HTML, no un bloque de texto
- Asegúrate de tener la sintaxis HTML correcta con etiquetas de cierre
- Previsualiza en el editor de correo electrónico antes de enviar

**Problemas de navegación móvil**

- Prueba los enlaces de anclaje en dispositivos móviles
- Considera el tamaño de pantalla reducido al planificar puntos de anclaje
- Mantén el texto del enlace de anclaje lo suficientemente grande para toques móviles

## Artículos relacionados

- [Usar el diseñador de correo electrónico](/es/docs/campaign-creation/using-the-email-designer) - Modo de edición HTML
- [Importar tu código HTML](/es/docs/email-templates/importing-your-html-code) - Trabajar con HTML
- [Agregar una encuesta a una campaña](/es/docs/campaign-creation/integrating-survey-forms) - Enlazar a secciones
- [Crear campañas](/es/docs/campaign-creation/creating-campaigns) - Conceptos básicos de campañas
- [Probar tu campaña](/es/docs/campaign-creation/testing-your-campaign) - Probar enlaces de anclaje