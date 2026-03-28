---
source: >-
  https://support.cakemail.com/hc/fr/articles/4405267001371-Créer-un-email-de-bienvenue-automatisé
---

# Crear un correo electrónico de bienvenida automatizado

<iframe src="https://player.vimeo.com/video/739075809" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Descripción

Un correo electrónico de confirmación o bienvenida es un mensaje enviado a una persona después de que realiza una acción específica, como suscribirse a una lista de correo. Nuestra aplicación te permite automatizar esta acción y personalizarla según la imagen de tu marca.

## Por qué es importante

Tus correos de bienvenida formarán la primera impresión que tus suscriptores tengan de tu boletín. También es un buen lugar para saludar a los clientes y pedirles que agreguen tu dirección de correo electrónico a su lista de remitentes seguros. Además, personalizar tu correo de confirmación ayudará a que tu comunicación parezca más humana.

## Instrucciones paso a paso

Puedes automatizar tu correo de confirmación, lo que permitirá un contacto inmediato y fluido con tus suscriptores. Aquí te explicamos cómo proceder:

<Stepper>

1. Haz clic en Automatizaciones.

1. Haz clic en el signo + en la parte superior derecha de la página.
   - También puedes crearlo desde el botón Crear

1. Selecciona una lista existente y haz clic en **Continuar** para conectar la nueva automatización
![2712CFD6-BF46-436D-8A15-5D1BAB67B6BD_4_5005_c.jpeg](/images/automations/89EC9C8B-AF4C-4392-A6B8-E576420E1C6A.png)

1. En la pestaña **Automatizaciones predefinidas**, selecciona el panel **Dar la bienvenida a nuevos contactos**. Luego serás dirigido a la página de edición de automatización
![Screenshot 1](/images/automations/2712CFD6-BF46-436D-8A15-5D1BAB67B6BD_4_5005_c.jpeg)

1. Especifica el retraso para la acción en la condición de edición
![9850B35A-8AE0-4494-8A79-B119DB6065BC_4_5005_c.jpeg](/images/automations/Automation_Delay.gif)

1. Selecciona la acción **Enviar un correo electrónico** en la vista del flujo de trabajo

1. Haz clic en **Editar** para personalizar el correo electrónico
![89EC9C8B-AF4C-4392-A6B8-E576420E1C6A.png](/images/automations/Automate%20Edit%20Email.gif)
![89EC9C8B-AF4C-4392-A6B8-E576420E1C6A.png](/images/automations/59EE30EF-6DA5-4A68-A351-104179BCE48D_4_5005_c.jpeg)

1. Usa el diseñador de correos electrónicos para personalizar tu correo de confirmación. Encuentra una descripción de esta herramienta aquí.

1. Cuando termines de editar el correo electrónico, haz clic en **Guardar y salir**
![Automate_Edit_Email.gif](/images/automations/9850B35A-8AE0-4494-8A79-B119DB6065BC_4_5005_c.jpeg)

1. Activa la automatización seleccionando el botón en la parte superior derecha imagen: Activación de automatización
![Automation_Turn_On.gif](/images/automations/Automation_Turn_On.gif)
![Automation_Delay.gif](/images/automations/8BE1A670-0AE2-4891-B40E-1E7C23963F2F_4_5005_c.jpeg)

1. Selecciona **Guardar y salir**
Un correo electrónico con tu mensaje de bienvenida personalizado se enviará automáticamente a tu nuevo destinatario cada vez que se suscriba a tu contenido después del retraso determinado.
</Stepper>

## Solución de problemas

**El correo de bienvenida no se envía**

- Confirma que la automatización esté activada (el botón de alternar debe estar EN ACTIVADO)
- Verifica que el disparador esté configurado en "El contacto se suscribe a la lista"
- Asegúrate de que los nuevos contactos se agreguen a la lista correcta

**El correo va a spam**

- Incluye instrucciones de autenticación en tu correo de bienvenida
- Pide a los suscriptores que agreguen tu dirección de remitente a sus contactos
- Evita palabras que activen spam en las líneas de asunto y contenido

**Problemas de temporización**

- Verifica la configuración de retraso en el flujo de trabajo de automatización
- Configura el retraso como "inmediatamente" para correos de bienvenida instantáneos
- Considera las zonas horarias si usas retrasos programados

**La personalización no funciona**

- Asegúrate de que las etiquetas de combinación estén formateadas correctamente (ej., `[firstname]`)
- Verifica que los datos del suscriptor incluyan los campos que intentas personalizar
- Prueba con un contacto de muestra que tenga todos los campos requeridos completados

## Artículos relacionados

- [Entender la automatización de correos electrónicos](/es/docs/automations/understanding-email-automation) - Conceptos básicos de automatización
- [Configurar correo de confirmación de suscripción](/es/docs/audience-building/subscription-confirmation-email) - Confirmación previa a la bienvenida
- [Crear una automatización en bucle](/es/docs/automations/creating-a-looping-automation) - Automatización avanzada
- [Primeros pasos](/es/docs/first-steps) - Guía de inicio