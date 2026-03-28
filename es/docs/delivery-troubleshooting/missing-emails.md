---
source: "https://support.cakemail.com/hc/en-us/articles/28333683831067-Troubleshooting-Missing-Emails-A-Step-by-Step-Guide"
---

# Correos electrónicos perdidos

## Descripción

Los correos electrónicos que no llegan a la bandeja de entrada pueden ser frustrantes, ya seas el remitente o el destinatario. Hay varios factores que podrían evitar que un correo electrónico sea entregado o visto. Esta guía te llevará a través de los pasos para solucionar problemas y resolver el problema.

## Por qué es importante

Los correos electrónicos necesitan ser entregados eficientemente, por lo que necesitas saber qué puede evitar que lleguen a sus destinatarios pretendidos. Esencialmente, el marketing por correo electrónico involucra más que simplemente escribir un correo electrónico y hacer clic en enviar. Para que funcione, depende mucho de la reputación, contenido valioso, una lista de suscriptores comprometidos, y una plataforma de marketing interactiva que pueda facilitar la entrega, todos los cuales son elementos que influyen en la efectividad de la entrega.

**Nota adicional:** Un factor común que afecta la entregabilidad es la autenticación del dominio. Asegúrate de que tu dominio esté autenticado para evitar posibles problemas de entrega. Aprende más aquí.

## Proceso de solución de problemas paso a paso.

<Stepper>

1. Confirmar que el correo electrónico fue enviado
Primero, verifica que el correo electrónico fue realmente enviado revisando si el contacto es realmente parte de tu lista y cuál es su estado. Si no están marcados como Activo, esto significa que no se les puede enviar.
**Cómo verificar:**
- Navega a tu **Campaña > Actividad de contactos > Enviado a** 
- Verifica si el contacto está presente en tu lista
- Si el correo electrónico no fue enviado, probablemente se deba a un problema de estado del contacto
![Captura de pantalla de la interfaz de solución de problemas de correos electrónicos perdidos](/images/delivery-troubleshooting/contact-activity-status.png)

1. Revisar el estado del contacto
Si el contacto no recibió tus correos electrónicos, verifica su estado en tu lista. Si el estado es diferente a activo, entonces probablemente no estén recibiendo tus correos electrónicos:
**Problemas de estado comunes:**
- **Canceló suscripción**: Si el contacto canceló su suscripción, obtén prueba escrita de que quieren reactivar su suscripción, luego escálalo a tu proveedor de servicios
- **Rebote duro**: Un rebote duro indica que la dirección es inválida y ya no existe
- **Queja de spam**: Si el estado muestra "FBL", entonces es una queja de SPAM. Obtén prueba escrita de que el contacto quiere reactivar su suscripción, y escálalo a nuestro equipo de soporte
![captura de pantalla](/images/delivery-troubleshooting/contact-status-issues.png)
</Stepper>

### 3. Verificar tu lista de supresión

Es posible que el contacto esté en tu lista de supresión. **Cómo verificar:**
- Ve a **Cuenta > Lista de supresión** 
- Mira si la dirección está listada
- Si tienes prueba de que la persona quiere recibir correos electrónicos pero fue suprimida por error, simplemente elimínala de la lista de supresión

![captura de pantalla](/images/delivery-troubleshooting/suppression-list-view.png)

![captura de pantalla](/images/delivery-troubleshooting/remove-from-suppression.png)

### 4. Determinar si el contacto ha recibido correos electrónicos antes

Si el destinatario ha recibido correos electrónicos de ti en el pasado, pero no esta vez, esto puede ayudar a reducir el problema:
- **Éxito previo**: Indica que la dirección de correo electrónico es válida
- **Problemas recientes**: Puede apuntar a problemas de entrega o filtrado de spam
- **Análisis de patrones**: Verifica si múltiples contactos están afectados

## Causas comunes de correos electrónicos perdidos

- **Direcciones de correo electrónico inválidas**: Los rebotes duros indican direcciones inexistentes
- **Filtrado de spam**: Correos electrónicos atrapados por filtros de spam
- **Problemas de autenticación de dominio**: Los dominios no autenticados pueden ser bloqueados
- **Lista de supresión**: Contactos agregados erróneamente a la supresión
- **Estado del contacto**: Los contactos que cancelaron suscripción o se quejaron no recibirán correos electrónicos

## Próximos pasos

Si los correos electrónicos siguen perdidos después de seguir estos pasos:
1. **Contactar soporte**: Proporciona detalles específicos sobre los correos electrónicos perdidos
2. **Autenticación de dominio**: Asegúrate de que tu dominio de envío esté apropiadamente autenticado
3. **Higiene de lista**: El mantenimiento regular de la lista previene problemas de entrega
4. **Pruebas de entrega**: Envía correos electrónicos de prueba para identificar patrones

## Contenido relacionado

## Solución de problemas

**El contacto aparece como "enviado a" pero afirma que no lo recibió**

- Pídeles que revisen las carpetas de spam/basura y otras pestañas de correo electrónico (Promociones, Actualizaciones)
- Verifica que la dirección de correo electrónico esté escrita correctamente sin espacios o caracteres extra
- Verifica si su proveedor de correo electrónico tiene filtrado agresivo (especialmente correos electrónicos corporativos)
- Envía un correo electrónico de prueba desde un correo personal para confirmar que su dirección funciona

**Múltiples contactos del mismo dominio no están recibiendo correos electrónicos**

- El dominio podría estar bloqueando o filtrando tus correos electrónicos a nivel del servidor
- Contacta a su departamento de TI para que pongan en lista blanca tu dominio de envío
- Verifica si estás en listas negras específicas del dominio
- Considera usar una dirección FROM diferente o subdominio para este cliente

**Los correos electrónicos se entregaban antes pero se detuvieron repentinamente**

- Revisa si tus patrones de envío han cambiado (volumen, frecuencia, contenido)
- Verifica si tu autenticación de dominio ha expirado o cambiado
- Busca altas tasas recientes de rebote o quejas que dañaron la reputación
- Verifica que tu cuenta no esté bajo revisión o suspendida

**El contacto está activo pero aún no recibe correos electrónicos**

- Verifica doblemente que no estén en tu lista de supresión
- Confirma que no hayan creado reglas de correo electrónico que automáticamente eliminen o muevan tus correos electrónicos
- Verifica si tienen tu dominio bloqueado a nivel del cliente de correo electrónico
- Considera que su bandeja de entrada podría estar llena o sobre cuota

## Artículos relacionados

- [Experimentar retrasos en la entrega de correos electrónicos](/es/docs/delivery-troubleshooting/delivery-delays) - Retrasado vs. perdido
- [Arreglar correos electrónicos que van al spam](/es/docs/delivery-troubleshooting/spam-and-promotions-tab) - Verificar carpeta de spam
- [Probar tu campaña](/es/docs/campaign-creation/testing-your-campaign) - Probar entrega
- [Entender reportes de campaña](/es/docs/analytics/understanding-campaign-reports) - Verificar estadísticas de entrega
- [Gestionar rebotes de correo electrónico](/es/docs/delivery-troubleshooting/email-bounces) - Problemas de rebote