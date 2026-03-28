---
source: "https://support.cakemail.com/hc/en-us/articles/4473616161307-Using-a-private-email-address-domain"
---

# Reputación del remitente

## Descripción

La parte de una dirección de correo electrónico que sigue al símbolo @ se conoce como el dominio. Los proveedores de correo electrónico más populares para correos electrónicos personales son Gmail, Outlook y Yahoo. Las organizaciones y marcas, sin embargo, generalmente tienen sus propios dominios de correo electrónico en un contexto empresarial o institucional.

## Por qué es importante

Desde la perspectiva de tu destinatario, la primera impresión que das con una dirección de correo electrónico como "@gmail.com" no es valiosa para tu organización o marca. De manera similar, es difícil reconocer al remitente del mensaje de un vistazo con un correo electrónico como este. Adicionalmente, no puedes probar tu identidad, haciendo difícil para ti construir confianza con tu audiencia.

Una dirección de Gmail o Outlook puede ser creada por cualquiera en cualquier momento. Entonces, en esencia, es claramente impráctico para un cliente potencial verificar que eres quien dices ser sin ver una dirección de correo electrónico que pruebe tu identidad. Por ejemplo, si usas una dirección de remitente que termina con @yahoo.com para enviar un boletín informativo a través de un servicio de marketing por correo electrónico, Yahoo! considera que estás suplantando a la empresa, incluso si eres el propietario legítimo.

## Problemas de entregabilidad causados al usar direcciones de correo electrónico gratuitas

Yahoo! y AOL han pedido a los destinatarios rechazar cualquier correo electrónico que no sea enviado a través de su propio cliente de correo electrónico o por sus empleados, causando que los correos electrónicos que envías reboten. De manera similar, otras direcciones de correo web gratuitas podrían redirigir correos electrónicos que no son enviados por sus empleados a carpetas de SPAM y Basura.

## Usar tu propio dominio de dirección de correo electrónico privado

1. **Decidir sobre un dominio y registrarlo**

Mantén una identidad consistente con tus destinatarios asegurándote de que se relacione con tu marca y sitio web. Mejorarás tu entregabilidad de correo electrónico usando una dirección de correo electrónico con un dominio que poseas.

2. **Elegir el proveedor de dominio correcto al comprar una dirección de correo electrónico de dominio**

Encuentra uno que te convenga. Aquí hay algunos consejos que podrían ser útiles al elegir dónde registrarlo:

- Debes buscar un dominio con soporte al cliente útil para ayudarte a configurar tu dominio y dirección de correo electrónico
- Asegúrate de que incluya privacidad WHOIS para que tu información de contacto esté segura
- Asegúrate de tener control total sobre tu nombre de dominio, en caso de que quieras cambiar servicios

3. **Autenticar tu dominio**

Para probar quién eres, asegúrate de autenticar tu dirección de correo electrónico.

4. **Cambiar tu dominio de remitente**

Con un dominio reconocible y autenticado que te pertenece, ahora puedes cambiar de manera segura la dirección de correo electrónico del remitente para las campañas.

## Solución de problemas

**No puedo verificar la propiedad del dominio**

- Verifica doblemente que hayas agregado los registros DNS exactamente como se proporcionaron (sin espacios o caracteres extra)
- Permite 24-48 horas para la propagación DNS antes de reintentar la verificación
- Usa herramientas de búsqueda DNS para confirmar que tus registros sean visibles
- Contacta al soporte de tu registrador de dominio si los registros no se están guardando correctamente

**Mis correos electrónicos están rebotando después de cambiar de Gmail a mi dominio**

- Asegúrate de que los registros SPF, DKIM y DMARC estén configurados apropiadamente
- Calienta gradualmente tu nuevo dominio de envío con volúmenes pequeños
- Verifica que tu dirección "from" realmente exista y pueda recibir respuestas
- Verifica que tu dominio no sea completamente nuevo (menos de 30 días de antigüedad)

**La autenticación del dominio sigue fallando**

- Confirma que estés agregando registros a la zona DNS correcta
- Verifica errores tipográficos en los registros de autenticación
- Asegúrate de no tener registros SPF en conflicto
- Elimina cualquier registro de autenticación viejo o duplicado

**Mi proveedor de dominio no soporta hospedaje de correo electrónico**

- Usa un servicio de hospedaje de correo electrónico separado (Google Workspace, Microsoft 365, etc.)
- Configura redirección de correo electrónico a otra dirección que controles
- Considera usar un subdominio específicamente para marketing por correo electrónico
- Asegúrate de que los registros MX estén configurados apropiadamente para tu host de correo electrónico

## Artículos relacionados

- [Autenticar mi dominio con SPF DKIM y DMARC](/es/docs/senders/authenticating-domains) - Configuración completa
- [Configurar y gestionar correos electrónicos de remitente](/es/docs/senders/managing-senders) - Configurar remitentes
- [Dominar los conceptos básicos de entregabilidad](/es/docs/delivery-troubleshooting/email-deliverability) - Visión general de entregabilidad
- [Arreglar correos electrónicos que van al spam](/es/docs/delivery-troubleshooting/spam-and-promotions-tab) - Mejorar reputación
- [Primeros pasos](/es/docs/first-steps) - Configuración inicial