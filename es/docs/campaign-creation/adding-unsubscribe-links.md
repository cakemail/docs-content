---
source: >-
  https://support.cakemail.com/hc/en-us/articles/1260806670909-Including-an-unsubscribe-link-into-a-campaign
---

# Agregar enlaces de cancelación de suscripción

## Descripción

Las campañas deben incluir un enlace de cancelación de suscripción, que permite a tus destinatarios dejar de recibir tus correos electrónicos. Obviamente, esto no es de tu interés, pero puede suceder, así que asegúrate de seguir el procedimiento apropiado sobre cómo manejar estas situaciones y recuerda: enviar correos electrónicos a alguien que se ha dado de baja es ilegal y constituye spam.

## Por qué es importante

Es posible que los destinatarios decidan que ya no quieren recibir correos electrónicos de ti - eso está bien, pero debes darles la opción de cancelar la suscripción, de lo contrario podrían marcar tus correos electrónicos como spam. Aún puedes mantener una buena reputación cuando los suscriptores se eliminan de tu lista a través de un enlace válido de cancelación de suscripción en tu mensaje, razón por la cual es mejor incluirlo como un enlace de **"cancelación de suscripción instantánea"** que requiere solo un clic para que los destinatarios cancelen la suscripción.

## Instrucciones paso a paso

Puedes hacer esto en el diseñador de correo electrónico o en el editor HTML. Dos opciones están disponibles:

### Agregar tu enlace de cancelación de suscripción con el diseñador de correo electrónico
Cuando el sistema no reconoce el campo de fusión del enlace de cancelación de suscripción en la campaña, lo agregará automáticamente en la parte inferior. Es mejor resaltar y agregar `[UNSUBSCRIBE]` como un hipervínculo para evitar esto.

<Stepper>

1. Selecciona tu campaña.
![Highlight unsubscribe text in HTML editor](/images/campaign-creation/DD222A1A-C2FC-4946-97D9-77F6BB8BD302_4_5005_c.jpeg)

1. Ve al editor.
![Select Campaign from Create menu](/images/campaign-creation/9D032549-76D6-42DB-8D33-48BF1A4A9B71_4_5005_c.jpeg)

1. Selecciona tu texto de cancelación de suscripción.
![Add UNSUBSCRIBE URL in link dialog box](/images/campaign-creation/F6C73565-D275-4B35-8A26-D58AF41FA57A_4_5005_c.jpeg)

1. Selecciona la opción Insertar enlace del menú del editor.
![HTML code editor interface](/images/campaign-creation/D9B97767-9A59-40A7-B9E0-5A332A42E0F9_4_5005_c.jpeg)

1. Vincula tu campo de cancelación de suscripción a la URL [UNSUBSCRIBE]
![Start from scratch tab](/images/campaign-creation/AF9F3BF5-2D0E-4EA0-A4BF-BC26A44EE74D.png)

1. Alternativamente, podrías agregarlo y formatearlo directamente desde la barra de herramientas pequeña como se muestra aquí:
![Start from scratch tab](/images/campaign-creation/GIF%20UNSUBSCRIBE.gif)
En la barra de herramientas de texto pequeña, selecciona Enlaces especiales > Suscripción > Cancelar suscripción
</Stepper>

### Agregar tu enlace de cancelación de suscripción en el editor HTML 

Al seleccionar la opción empezar desde cero, puedes crear tu plantilla desde tu propio código HTML. Para agregar correctamente el campo de cancelación de suscripción con esta opción, sigue estos pasos:

 
<Stepper>

1. Selecciona Crear del menú superior.
![Enter UNSUBSCRIBE in URL field](/images/campaign-creation/6208D820-32F4-4547-B8CA-5D9F75C2FE29_4_5005_c.jpeg)

1. Haz clic en "Campaña" en el nuevo menú que aparece.
![Special links menu showing unsubscribe option](/images/campaign-creation/7D56F11C-29E9-40E3-9D83-03F10FF6AC93_4_5005_c.jpeg)

1. Selecciona la pestaña Empezar desde cero.
![Select campaign from list](/images/campaign-creation/2234E183-9EA0-4A50-BC6D-5759A1CB5159_4_5005_c.jpeg)

1. Haz clic en Seleccionar bajo la opción Empezar con tu propio código.
![Highlight unsubscribe text in editor](/images/campaign-creation/37BA470F-8AD5-4FBF-A1A3-DC4257B920E8.png)

1. Pega/escribe tu código en el lado izquierdo de la página.

1. En la parte superior derecha, haz clic en Subir y editar.
![Insert Link button in toolbar](/images/campaign-creation/354BF584-D33E-4725-B566-F5CCE03BCEF2.png)

1. Resalta el campo Cancelar suscripción.
![Click Edit Email button](/images/campaign-creation/0982228B-E876-422A-97FE-32ABEB639811_4_5005_c.jpeg)

1. Vincula tu campo de cancelación de suscripción a la URL [UNSUBSCRIBE] usando la opción de enlace en el menú de edición.
![Select Start with your own code option](/images/campaign-creation/C2D6A986-9FA7-4012-997B-874A70DEE32F_4_5005_c.jpeg)
</Stepper>

## La opción ya está disponible

Evitarás la inconveniencia de que tu contenido sea marcado como spam si tu destinatario decide dejar de recibir tu contenido. Como siempre, nuestro equipo de soporte estará más que feliz de sugerir formas de mejorar tus prácticas y contenido si lo necesitas.

## Solución de problemas

**El enlace de cancelación de suscripción no funciona**

- Verifica que la etiqueta de fusión [UNSUBSCRIBE] esté correctamente formateada
- Prueba el enlace antes de enviar la campaña
- Asegúrate de que la etiqueta de fusión se convierta en un hipervínculo

**La campaña no se enviará sin cancelación de suscripción**

- El sistema requiere un enlace de cancelación de suscripción para cumplimiento
- Verifica el pie de página para un enlace de cancelación de suscripción agregado automáticamente
- Agrega manualmente la etiqueta [UNSUBSCRIBE] si falta

**Enlace agregado dos veces**

- Elimina el enlace manual de cancelación de suscripción si el sistema agrega uno automáticamente
- Verifica tanto el encabezado como el pie de página para enlaces duplicados
- Usa el modo vista previa para verificar solo una instancia

**Problemas de formato**

- Mantén el enlace de cancelación de suscripción visible y fácil de encontrar
- Usa colores contrastantes para la visibilidad del enlace
- Asegura un tamaño de fuente mínimo de 10px para legibilidad

## Artículos relacionados

- [Agregar tu dirección física](/es/docs/campaign-creation/adding-your-physical-address) - Requisitos legales
- [Usar la lista de supresión](/es/docs/account-settings/suppression-lists) - Gestionar cancelaciones de suscripción
- [Entender quejas, rebotes y cancelaciones de suscripción](/es/docs/analytics/email-bounces) - Métricas de cancelación de suscripción
- [Configurar tu centro de preferencias de suscriptor](/es/docs/audience-building/subscriber-preference-center) - Preferencias avanzadas
- [Crear campañas](/es/docs/campaign-creation/creating-campaigns) - Cumplimiento de campañas