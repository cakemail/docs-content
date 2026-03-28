---
source: "https://support.cakemail.com/hc/en-us/articles/360058233633-Complaints-bounces-and-unsubscribes"
---

# Rebotes de correo electrónico

## Descripción
Las quejas, rebotes y cancelaciones de suscripción indican la salud general y calidad de tu lista.
## Por qué es importante
Son una representación directa de la satisfacción de tus destinatarios al recibir tus correos electrónicos y afectan tu reputación como remitente.

Si envías regularmente contenido atractivo a una lista de personas que esperan abrir tu correo, estos números deberían ser 0 (o muy cercanos). Cada queja o rebote duro que generas es una marca en tu contra.

## Dónde encontrar esta información
Encontrarás esta información representada como totales o porcentajes en tu reporte de campaña, pero también junto a cada uno de tus contactos.

## Rebotes

**Un rebote "duro":** la dirección ya no existe (peor aún, tal vez nunca existió... ¿Enviaste un correo de confirmación?). Si no se aborda, esto puede tener consecuencias dramáticas para tu cuenta, a veces incluso suspenderla. Como resultado, todos los rebotes duros serán removidos de la lista.

**Un rebote "suave":** el correo electrónico no está disponible actualmente por una razón "temporal". **Si hay 4 rebotes suaves en una sola dirección de correo electrónico, la dirección será automáticamente removida de la lista.**

Tus reportes te proporcionarán información muy detallada sobre los rebotes de correo electrónico, incluyendo varios tipos diferentes de rebotes como: Buzón lleno, correo bloqueado o falla de DNS.

### Fórmula de tasa de rebote:
```
Total de rebotes / Número total de personas a las que enviaste tu correo
```

**Resultados esperados:** 0% – 1%

**La tasa de rebote duro siempre debe estar por debajo del 1%**

### Variables:
- Tipo de industria
- ¿Qué tan actualizada está tu lista?
- ¿Con qué frecuencia envías a tu lista? Mientras más frecuentemente envíes, menor será la tasa para cada campaña

## Cancelaciones de suscripción

```
Número total de cancelaciones de suscripción / Número total de personas a las que se envió el correo
```

Puedes esperar cierto número de cancelaciones de suscripción cada vez que envías una campaña. El problema es un pico repentino. Entiende que es mucho mejor que alguien cancele su suscripción a que te reporte como spam. Esto tiene menos consecuencias para tu reputación.

**Deberías esperar una tasa de cancelación de suscripción por debajo del 1%.**

## Quejas de spam

```
Número total de quejas / Número total de correos enviados a proveedores de servicios de internet específicos
```

Tan pronto como alguien te marca como spam, son permanentemente removidos de la lista.

**Resultados esperados:** 0% – 0.1%

Usa mejores prácticas para evitar quejas y envía una prueba a ti mismo (ve dónde llega) antes de enviar tu campaña. Nunca debe exceder 0.25% (1 de cada 400 correos enviados).

Ten en cuenta que los ISP también miran estos números. Si consistentemente tienes niveles promedio a críticos de rebotes/spam, es solo cuestión de tiempo antes de que tus correos sean enviados a la carpeta de correo basura del destinatario y/o sean bloqueados permanentemente.

## Solución de problemas

**Tasa alta de rebote duro (por encima del 1%)**

- Revisa inmediatamente la fuente de tu lista - las listas compradas a menudo tienen altas tasas de rebote
- Implementa confirmación doble para verificar direcciones de correo al registrarse
- Usa un servicio de validación de correos para limpiar tu lista antes de enviar
- Remueve suscriptores inactivos que no han interactuado en 6-12 meses

**Pico repentino en quejas de spam**

- Revisa cambios recientes en el contenido o frecuencia de tus correos
- Asegúrate de que tu enlace de cancelación de suscripción sea claramente visible y funcione
- Verifica si estás siguiendo prácticas apropiadas de marketing basado en permisos
- Considera campañas de reactivación antes de incrementar la frecuencia de envío

**Rebotes suaves convirtiéndose en rebotes duros**

- Monitorea las razones para rebotes suaves (buzón lleno, problemas del servidor, etc.)
- Intenta reenviar a rebotes suaves en diferentes horas del día
- Verifica si ciertos dominios están consistentemente rebotando de forma suave
- Revisa tu reputación de envío con los ISP principales

**Enlace de cancelación de suscripción no funciona**

- Prueba la etiqueta de combinación [UNSUBSCRIBE] en modo vista previa
- Verifica que la página de cancelación de suscripción sea accesible y funcione
- Confirma si las URL personalizadas de cancelación de suscripción están configuradas apropiadamente
- Asegúrate de que la cancelación de suscripción con un clic esté habilitada para una mejor experiencia de usuario

## Artículos relacionados

- [Uso de la lista de supresión](/es/docs/account-settings/suppression-lists) - Gestionar contactos que cancelaron suscripción
- [Entendiendo correos basados en roles](/es/docs/delivery-troubleshooting/role-based-emails) - Evitar activadores de quejas
- [Dominando fundamentos de entregabilidad](/es/docs/delivery-troubleshooting/email-deliverability) - Mejorar la entrega de correos
- [Gestionando rebotes de correo](/es/docs/delivery-troubleshooting/email-bounces) - Manejar problemas de rebote
- [Incluyendo un enlace de cancelación de suscripción](/es/docs/campaign-creation/adding-unsubscribe-links) - Requisitos de cumplimiento