---
source: >-
  https://support.cakemail.com/hc/en-us/articles/360056294574-Authenticating-my-domain-with-SPF-DKIM-and-DMARC-protocols
---

# Autenticación de dominios

<iframe src="//player.vimeo.com/video/740494345" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Descripción

Se acabaron los días de enviar correos sin preocuparse si serán entregados. El SPAM ha existido durante tanto tiempo como el correo mismo, haciendo difícil para los destinatarios distinguir lo que es real. ¿Qué pasaría si los remitentes legítimos pudieran destacarse y asegurar que sus correos lleguen a la bandeja de entrada? Ahí es donde entra la autenticación de correo.

Es importante notar que algunos proveedores como Gmail y Yahoo ahora requieren que los usuarios de un dominio estén autenticados para poder enviar a sus dominios. En este artículo, le guiaremos sobre cómo asegurar que sus correos lleguen de forma segura a donde pertenecen.

## Por qué es importante

La autenticación previene que los spammers usen su dominio para enviar correos sin su permiso empleando protocolos como SPF, DKIM y DMARC para validar la legitimidad de sus correos y mejorar la confiabilidad de entrega. Es crucial notar que enviar desde un dominio no autenticado es conocido por causar problemas significativos de entrega con todos los proveedores de correo, previniendo que muchos destinatarios reciban sus correos en su bandeja de entrada.

Si no autentica su dominio, el siguiente mensaje aparecerá para destinatarios de Gmail:

![Advertencia de remitente no autenticado de Gmail](/images/delivery-troubleshooting/delivery-troubleshooting-authenticating-my-domain-with-spf-dkim-and-dmarc-protocols-124.png)

## Instrucciones paso a paso

Para hacer esto, necesitará acceder a los registros DNS para su dominio con su proveedor de alojamiento y agregar la configuración DNS correcta. Puede seguir esta guía para configurar la autenticación.

Para descubrir dónde se gestiona su dominio, contacte a la persona o equipo que gestiona su sitio web o dirección de correo.

<Stepper>

1. Haga clic en el nombre de su empresa/dirección de correo en la esquina superior derecha (esto abre un menú desplegable), luego haga clic en Senders

1. Asegúrese de haber ingresado su dominio remitente.
Debería aparecer en una barra amarilla, significando que NO está autenticado. Si aún no ha ingresado su remitente, es hora de elegir e ingresarlo.

1. Haga clic en Authenticate domain en el menú.

1. Las instrucciones aparecerán en la página.
También puede copiar/pegar las instrucciones para compartir con su administrador de TI.

1. Usted, o el administrador de TI, debe ingresar el código en los campos relevantes del servidor donde está alojado su dominio.
Esta es una operación delicada. Asegúrese de que el código sea **EXACTAMENTE** lo que se requiere. Cualquier espacio o "." o cambio irrelevante hará que no funcione.

1. Espere unas horas para que se propague.
A veces toma hasta 24 horas.

1. Regrese y verifique su código.
La barra debería estar azul. Si aún está amarilla, por favor contacte al equipo de soporte con una captura de pantalla del servidor donde ingresó las entradas.
</Stepper>

## Más información sobre SPF, DKIM y DMARC

### SPF (Sender Policy Framework)

El Sender Policy Framework (SPF) es un estándar de autenticación que ha existido desde 2003 y funciona publicando una lista de direcciones IP que están autorizadas para enviar en nombre de su dominio. Los servidores de correo receptores usarán SPF para verificar que los mensajes enviados desde su dominio fueron enviados por una de estas direcciones IP.

### DKIM (Domain Keys Identified Mail)

DKIM proporciona una forma de validar que el contenido del mensaje no ha sido alterado y que realmente fue enviado por el dominio del que dice provenir.

### DMARC (Domain-based Message Authentication, Reporting & Conformance)

La principal ventaja de DMARC es que es el remitente quien controla lo que pasa con el spam enviado usando su dominio, no el receptor. Así que puede decirle al receptor que bloquee el correo que no envió, y mejor aún, obtiene un informe del correo que usa su dominio sin su permiso - así que DMARC es muy poderoso y es el estándar de oro en uso hoy.

## Resúmenes rápidos

- [Haga clic aquí para un resumen rápido de cómo funciona SPF por DMARCIAN](https://dmarcian.com/spf-explained/)
- [Haga clic aquí para un resumen rápido de cómo funciona DKIM por DMARCIAN](https://dmarcian.com/dkim-explained/)
- [Haga clic aquí para un resumen rápido de cómo funciona DMARC por DMARCIAN](https://dmarcian.com/dmarc-explained/)

## Solución de problemas

**La validación del registro SPF falla**

- Verifique registros SPF duplicados (solo se permite un registro SPF por dominio)
- Asegúrese de que el registro SPF comience con "v=spf1" y termine con "-all" o "~all"
- Verifique que no haya errores de sintaxis o espacios adicionales en el registro SPF
- Confirme que no esté excediendo el límite de 10 búsquedas DNS
- Use herramientas de validación SPF para probar su configuración

**La firma DKIM no se verifica**

- Asegúrese de que el registro DKIM esté publicado en el subdominio correcto
- Verifique saltos de línea o espacios al copiar la clave DKIM
- Verifique que el nombre del selector coincida con lo configurado en Cakemail
- Espere 24-48 horas para la propagación DNS después de agregar registros
- Pruebe con validadores DKIM para identificar problemas específicos

**La política DMARC no es reconocida**

- Confirme que el registro DMARC se agregue a "_dmarc.sudominio.com"
- Comience con la política p=none antes de pasar a cuarentena o rechazo
- Asegúrese de la sintaxis correcta: "v=DMARC1; p=none; rua=mailto:..."
- Verifique que las direcciones de correo en el registro DMARC sean válidas
- Use analizadores DMARC para validar su política

**La autenticación pasa pero los correos aún van a spam**

- La autenticación es un factor; el contenido y la reputación también importan
- Revise sus prácticas de envío e higiene de lista
- Verifique si su IP o dominio está en listas de bloqueo
- Asegúrese de seguir las mejores prácticas de correo
- Monitoree informes DMARC para uso no autorizado de su dominio

**Los cambios DNS no toman efecto**

- Permita hasta 48 horas para la propagación DNS completa
- Limpie su caché DNS o use diferentes servidores DNS para probar
- Verifique cambios con múltiples herramientas de búsqueda DNS
- Verifique si su proveedor DNS tiene capas de caché adicionales
- Asegúrese de haber guardado cambios correctamente en su panel de gestión DNS

**Múltiples dominios necesitan autenticación**

- Cada dominio de envío requiere su propia configuración de autenticación
- Los subdominios pueden necesitar configuración separada dependiendo de la configuración
- Considere usar declaraciones include en SPF para múltiples dominios
- Planifique selectores DKIM cuidadosamente para configuraciones multi-dominio
- Implemente DMARC gradualmente a través de todos los dominios

## Artículos relacionados

- [Configurar y gestionar correos de remitente](/es/docs/senders/managing-senders) - Configurar remitentes
- [Construir reputación de remitente](/es/docs/delivery-troubleshooting/sender-reputation) - Por qué autenticar
- [Dominar conceptos básicos de entregabilidad](/es/docs/delivery-troubleshooting/email-deliverability) - Guía de entregabilidad
- [Arreglar correos que van a spam](/es/docs/delivery-troubleshooting/spam-and-promotions-tab) - La autenticación ayuda
- [Primeros pasos](/es/docs/first-steps) - Configuración inicial