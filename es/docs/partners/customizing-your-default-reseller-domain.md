---
source: >-
  https://support.cakemail.com/hc/en-us/articles/22433306396443-Customize-your-default-reseller-domain
---

# Personalización del dominio de revendedor predeterminado

## Descripción

Siguiendo los nuevos requisitos anunciados por Gmail y Yahoo, que entrarán en vigencia en febrero, Cakemail ha tenido que integrar nuevas características para asegurar la entrega de correos para clientes que aún no han completado la autenticación DMARC, incluyendo aquellos enviados con una dirección de remitente proporcionada por un servicio gratuito (por ejemplo, gmail.com).

## Por qué es importante

Cakemail proporciona a sus clientes un dominio autenticado genérico: cmtd1.com.
Pero si su dominio de revendedor ya está autenticado, los correos se enviarán con ese dominio. Le recomendamos encarecidamente que autentique su dominio. Esto le permitirá ofrecer un dominio de envío más personalizado a sus clientes que aún no se han autenticado.

## Instrucciones paso a paso

<Stepper>

1. Vaya al portal de revendedor y haga clic en la pestaña Next-gen App Toolset.
También puede conectarse directamente a https://app.wbsrvcx.com (use sus credenciales de cuenta de socio).

1. Haga clic en la pestaña Senders and Domains en su menú.

1. Tendrá un informe sobre el estado de validación de sus enlaces de retorno y rebotes que ahora deben configurarse.
Nota: debido a los nuevos requisitos, un dominio que se indicaba como verificado puede que ya no esté verificado porque el nuevo proceso de verificación es más elaborado.
![](/images/partners/78e7d017-3ec6-40c9-85ae-e2056394b2b0.png)

1. Si su enlace está en amarillo, su dominio no está completamente o parcialmente autenticado.
Haga clic en Authenticate Domain a la derecha para mostrar los códigos que debe copiar y pegar en su servidor. También puede hacer clic para descargar las instrucciones y enviarlas por correo a su administrador.

1. Una vez que haya ingresado toda la información en su servidor, su dominio debería identificarse como autenticado.
Esto puede tomar desde unos minutos hasta 24 horas. NOTA: la mayoría de los errores ocurren durante el paso de copiar y pegar. Evite agregar espacios e ingrese exactamente lo que se requiere.
Las instrucciones para validar dominios para todos los usuarios finales de sus clientes están disponibles en sus cuentas bajo Senders.
</Stepper>

## Solución de problemas

**La autenticación del dominio sigue fallando**

- Verifique los registros DNS para detectar errores tipográficos o espacios adicionales
- Asegúrese de agregar registros a la zona DNS correcta
- Espere 24-48 horas para la propagación DNS antes de verificar nuevamente
- Use herramientas de búsqueda DNS para confirmar que los registros están publicados correctamente

**El dominio de retorno no funciona para clientes**

- Verifique que su dominio de revendedor esté completamente autenticado
- Verifique si las cuentas de clientes están vinculadas correctamente a su cuenta de revendedor
- Asegúrese de que la configuración del dominio de retorno esté habilitada en el portal de revendedor
- Contacte al soporte si aún se está usando el dominio genérico cmtd1.com

**Los registros DNS copiados se muestran como inválidos**

- Elimine cualquier espacio o salto de línea al final al copiar
- Verifique que los registros TXT no excedan los límites de caracteres
- Verifique si se necesitan comillas alrededor de los valores de registros TXT
- Asegúrese de que los registros CNAME no tengan puntos al final a menos que sea requerido

**Los clientes aún experimentan problemas de entrega**

- Confirme que los registros SPF y DKIM estén configurados correctamente
- Verifique si la política DMARC está configurada correctamente
- Revise si las direcciones de remitente del cliente coinciden con dominios autenticados
- Monitoree los informes de autenticación para mensajes de error específicos

## Artículos relacionados

- [Personalización de correos del sistema](/es/docs/partners/system-email-customization) - Correos del sistema con marca
- [Configuración de su marca](/es/docs/account-settings/configuring-your-brand) - Marca completa
- [Compartir plantillas con clientes](/es/docs/partners/client-template-sharing) - Plantillas con marca
- [Autenticación de dominios](/es/docs/senders/authenticating-domains) - Configuración de dominio
- [Actualización del perfil de empresa](/es/docs/account-settings/updating-my-company-profile) - Perfil de socio