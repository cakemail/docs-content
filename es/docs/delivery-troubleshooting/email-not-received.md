---
title: "Mi correo electrónico no fue recibido por..."
lang: es
content_type: docs
source: en/docs/delivery-troubleshooting/email-not-received.md
source_version: bc98ea8
---

# Mi correo electrónico no fue recibido por...

## Descripción

En ocasiones, un contacto puede reportar que no recibió su correo electrónico. Antes de escalar el problema a nuestro equipo de soporte, siga los pasos a continuación para identificar y resolver rápidamente los problemas de entrega más comunes.

## Por qué es importante

La entrega de correos electrónicos puede fallar por muchas razones diferentes: desde un estado de contacto incorrecto hasta el filtrado por parte de los proveedores de buzones. Al revisar primero estos puntos clave, usted puede resolver el problema de inmediato y ayudar a garantizar que sus mensajes lleguen consistentemente a la bandeja de entrada.

## Instrucciones paso a paso

<Stepper>

1. Verifique si el contacto está **activo** en la lista
2. Confirme si el correo electrónico fue enviado:
   Campaña > Actividad del contacto > Enviado a > Verifique si el contacto está en la lista

3. Pida al destinatario que revise el correo electrónico en la carpeta de spam, en las pestañas de Promociones o Actualizaciones de Gmail, y en la Papelera

4. Verifique en su lista de supresión

   Cuenta > Lista de supresión

**Agregado manualmente:** Si usted tiene prueba de que la persona desea suscribirse y fue agregada manualmente a la lista de supresión, simplemente elimínela de dicha lista.

**FBL:** Esto significa que el suscriptor presentó una queja de spam al recibir su correo electrónico. Si desea volver a suscribirse, usted debe obtener una prueba escrita del contacto indicando que desea hacerlo y escalar la solicitud a su proveedor de servicios junto con dicha prueba.

5. ¿El contacto ha recibido correos electrónicos de usted antes, o es la primera vez que no los recibe?

6. ¿Alguna vez ha presentado una queja, cancelado su suscripción o reenviado un correo electrónico recibido de usted?

   Si no es así: verifique el estado del contacto en su lista: si es cancelación de suscripción o rebote duro.

   **Si canceló la suscripción:** obtenga una prueba escrita de que el contacto desea volver a suscribirse y escale el caso a su proveedor de servicios.

   **Si tuvo un rebote duro:** significa que la dirección es inválida y ya no existe.

7. ¿Es una cuenta de rol? (Las cuentas de rol son correos electrónicos que no pertenecen a una persona, sino generalmente a un grupo o departamento, como sales@, support@, marketing@, etc. Estos correos electrónicos se suprimen de forma predeterminada porque tienen mayor probabilidad de activar una inclusión en listas negras, dado que son de dominio público. Si usted puede demostrar una suscripción confirmada para estos correos electrónicos, deberá solicitar que se agreguen a la lista blanca.)
8. Si está utilizando su propio dominio: asegúrese de haber **autenticado su dominio**, ya que esto puede causar que los correos electrónicos sean bloqueados por proveedores como Gmail, Yahoo, Hotmail, etc.

   Si no está autenticado: comience por realizar la autenticación; esto marcará una gran diferencia.

9. ¿Todos los correos electrónicos que no se reciben están siendo enviados a la misma empresa o dominio? Esto puede indicar que están siendo bloqueados por una herramienta interna de monitoreo o antivirus. Deberá pedirles que soliciten a su departamento de TI o proveedor de correo electrónico que incluya su dominio de remitente en la lista blanca.

</Stepper>

## Resolución de problemas

-

## Artículos relacionados

- [Autenticar mi dominio con SPF, DKIM y DMARC](/es/docs/senders/authenticating-domains) - Mejorar la reputación
- [Dominar los conceptos básicos de entregabilidad](/es/docs/delivery-troubleshooting/email-deliverability) - Posicionamiento en la bandeja de entrada
- [Lista negra de dominios](/es/docs/delivery-troubleshooting/domain-blacklisting) - Verificar listas negras
- [Comprensión de quejas, rebotes y cancelaciones de suscripción](/es/docs/analytics/email-bounces) - Quejas de spam
- [Probar su campaña](/es/docs/campaign-creation/testing-your-campaign) - Probar puntuaciones de spam
