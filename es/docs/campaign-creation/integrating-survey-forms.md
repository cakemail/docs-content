---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4420979608475-Adding-a-survey-to-a-campaign
---

# Integrar formularios de encuesta

## Descripción
Las encuestas integradas en correos electrónicos, también llamadas encuestas de correo electrónico en línea, se integran en los correos electrónicos, y los encuestados pueden responder preguntas directamente en el cuerpo del correo electrónico. Las encuestas de esta naturaleza tienden a ser cortas y no exhaustivas.

## Por qué es importante

Este mecanismo de retroalimentación inmediata es invaluable para recopilar información de los clientes, medir la satisfacción y tomar decisiones basadas en datos sobre tus productos o servicios. El factor de conveniencia también muestra respeto por el tiempo de tus suscriptores, fortaleciendo su relación con tu marca.

## Instrucciones paso a paso

#### Crear un formulario en Typeform
Usa la herramienta gratuita en línea https://www.typeform.com/ para crear una encuesta. Luego, puedes copiar y pegar el código de correo electrónico de la encuesta (código HTML).
**Solo el tipo de formulario Escala de Opinión se puede usar actualmente con este proceso.**


### Procedimiento en Typeform
1. Crear un formulario desde cero
2. En el menú para elegir el tipo de formulario, elige **Escala de Opinión** en la esquina superior derecha. 
3. Edita tu formulario según tus gustos. 
4. Publica tu formulario. 
5. Haz clic en Compartir
6. Haz clic en Insertar en un correo electrónico
7. Selecciona Obtener el código.

<Stepper>

1. Arrastra y suelta el bloque de contenido HTML en tu correo electrónico.
![Screenshot of HTML content block](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-308.png)

1. Arrástralo al contenido del correo electrónico.
![Screenshot of dragging into email content](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-309.png)

1. Pega el código en el menú Propiedades del Contenido que aparecerá en el lado derecho del editor.
![Screenshot of the interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-310.png) 
Puedes usar esto para recopilar datos de tus destinatarios ya que esto se vinculará directamente con tu encuesta creada.
![Screenshot of the interface](/images/campaign-creation/campaigns-adding-a-survey-to-a-campaign-311.png)
</Stepper>

## Solución de problemas

**La encuesta no se muestra correctamente**

- Asegúrate de usar el tipo de formulario Escala de Opinión de Typeform
- Copia el código HTML completo incluyendo todas las etiquetas
- Prueba en múltiples clientes de correo electrónico para compatibilidad

**El código HTML no funciona**

- Usa el bloque de contenido HTML, no un bloque de texto regular
- Pega el código en el panel Propiedades del Contenido, no directamente en el editor
- Verifica que no esté incluido JavaScript (los clientes de correo electrónico lo bloquean)

**Bajas tasas de respuesta**

- Mantén las encuestas cortas (máximo 1-3 preguntas)
- Coloca la encuesta de manera prominente en el correo electrónico
- Usa texto claro y convincente para alentar la participación

**Los datos no se están recopilando**

- Verifica que tu cuenta de Typeform esté activa
- Verifica que el formulario esté publicado y no en modo borrador
- Prueba el enlace de la encuesta independientemente para asegurarte de que funcione

**Problemas de compatibilidad con clientes de correo electrónico**

- Algunos clientes de correo electrónico pueden no soportar formularios integrados
- Proporciona un enlace de respaldo a la versión web
- Prueba en los principales clientes de correo electrónico antes de enviar

## Artículos relacionados

- [Crear campañas](/es/docs/campaign-creation/creating-campaigns) - Configuración básica de campañas
- [Agregar enlaces de anclaje](/es/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Enlazar a encuestas
- [Rastrear actividad de tasa de clics](/es/docs/analytics/tracking-click-rate-activity) - Rastrear clics de encuestas
- [Usar el diseñador de correo electrónico](/es/docs/campaign-creation/using-the-email-designer) - Agregar botones de encuesta
- [Crear enlaces de seguimiento UTM](/es/docs/campaign-creation/create-utm-tracking-links) - Rastrear respuestas de encuestas