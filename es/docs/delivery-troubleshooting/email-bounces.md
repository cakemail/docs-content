# Rebotes de correo electrónico

## Descripción
Un rebote ocurre cuando falla un intento de entrega de correo electrónico. Un rebote "suave" es un error temporal que no elimina al destinatario de la lista de correo, pero retrasa la entrega a esa persona. Cuando se ha determinado que una dirección de correo electrónico o dominio es inalcanzable después de un solo intento, el mensaje se considera un "rebote duro".

## Por qué es importante

Hay varios tipos diferentes de notificaciones de rebote como rebotes duros, rebotes suaves, correo electrónico bloqueado, etc. Entender cada uno de estos tipos te ayudará a identificar la mejor manera de manejarlos y tomar el mejor curso de acción para la salud de tus listas.

### Tipos de rebotes y consecuencias.

#### Rebote suave (bounce_sb)
Cuando un mensaje de correo electrónico llega al servidor de correo del destinatario pero es devuelto como no entregado, se considera un rebote suave. En algunos casos, la bandeja de entrada del destinatario podría estar llena, por lo que podría ser entregado más tarde. Tres intentos de entrega resultarán en un rebote duro.

#### Rebote transitorio (bounce_tr)
A menudo, el servidor de correo electrónico del remitente genera un rebote transitorio, informando al remitente que el mensaje no fue entregado pero el servidor está intentando de nuevo; esto continuará hasta que hayan transcurrido dos días desde que el mensaje fue enviado. Sin embargo, generalmente no hay motivo de preocupación con los rebotes transitorios. También, podrías recibir el siguiente mensaje: Advertencia: mensaje aún no entregado después de 4 horas.

#### Cambio de dirección (bounce_ac)
Una respuesta de Cambio de Dirección indica que el destinatario ha cambiado su dirección y notifica a los remitentes del cambio.

#### Respuesta automática (bounce_ar)
El cliente de correo electrónico del destinatario generalmente envía una respuesta automática (usualmente en forma de aviso de fuera de oficina). Estas respuestas indican que un destinatario de correo electrónico está temporalmente no disponible, a diferencia de los rebotes. Estas notificaciones son útiles cuando se envía información sensible al tiempo, ya que te alertan de que el destinatario podría no verla hasta más tarde. De lo contrario, pueden ser ignoradas de manera segura.

#### Desafío/Respuesta (bounce_cr)
Un Desafío/Respuesta es un mensaje enviado por software de filtrado especial que solo permite que sean aceptados mensajes de remitentes conocidos. Este tipo de filtro envía automáticamente una respuesta con un desafío (una pregunta o acción requerida) al remitente del correo electrónico. El mensaje no será entregado si el desafío no se completa correctamente.

#### Falla de DNS (bounce_df)
Esto indica que un problema de DNS ha prevenido temporalmente la entrega de correo electrónico a una dirección.

#### Rebote duro (bounce_hb)
Un rebote duro es un mensaje de correo electrónico devuelto al remitente debido a una dirección de destinatario inválida. El nombre del dominio podría no existir o el destinatario podría no ser conocido, resultando en un rebote duro.

#### Correo bloqueado (bounce_mb)
Esto indica que el servidor de correo electrónico del destinatario está bloqueando tu correo electrónico. Podrías ver los siguientes mensajes:

– 550 Mensaje RECHAZADO por el par

– 552 Bloqueado por filtros.

#### Buzón lleno (bounce_fm)
Un buzón de correo electrónico del destinatario lleno previene que el servidor de correo electrónico entregue el mensaje al destinatario.

#### Sin rebote (bounce_none)
Un tipo de rebote heredado que ya no está en uso. Se usaba cuando el rebote era desconocido.

## Solución de problemas

**Mi tasa de rebotes duros ha aumentado repentinamente**

- Verifica si recientemente importaste una nueva lista que no fue validada apropiadamente
- Busca errores tipográficos en direcciones de correo electrónico ingresadas manualmente
- Verifica que tu lista no haya sido comprometida con direcciones falsas o viejas
- Ejecuta tu lista a través de un servicio de validación de correo electrónico antes de tu próximo envío

**Los rebotes suaves siguen ocurriendo para las mismas direcciones**

- Monitorea si estas direcciones se convierten en rebotes duros después de tres intentos
- Verifica si dominios específicos están rebotando suavemente consistentemente (puede indicar bloqueo)
- Considera eliminar direcciones que reboten suavemente por más de 3-4 campañas
- Verifica que el servidor de correo electrónico del destinatario no te esté tratando como spam

**Estoy recibiendo frecuentemente rebotes de "buzón lleno"**

- Estos destinatarios pueden haber abandonado sus cuentas de correo electrónico
- Considera enviar una campaña de re-compromiso para verificar interés
- Elimina direcciones que muestren consistentemente "buzón lleno" por 30+ días
- Monitorea si esto sucede más con ciertos proveedores de correo electrónico (podría indicar bloqueo)

**Los rebotes de Desafío/Respuesta están previniendo la entrega**

- Completa manualmente desafíos solo para destinatarios de alto valor
- Considera métodos de comunicación alternativos para estos contactos
- Agrega una nota en tu CRM sobre estos requerimientos especiales
- Evalúa si mantener estos contactos vale el esfuerzo manual

## Artículos relacionados

- [Entender quejas, rebotes y cancelaciones de suscripción](/es/docs/analytics/email-bounces) - Métricas de rebote
- [Usar la lista de supresión](/es/docs/account-settings/suppression-lists) - Gestionar contactos que rebotan
- [Dominar conceptos básicos de entregabilidad](/es/docs/delivery-troubleshooting/email-deliverability) - Reducir rebotes
- [Entender estado de contacto](/es/docs/audience/contact-status) - Estado de rebote
- [Importar contactos](/es/docs/audience/importing-contacts-into-your-lists) - Importaciones de listas limpias