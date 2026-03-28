---
source: "https://support.cakemail.com/hc/en-us/articles/360056359394-Information-on-security"
---

# Información sobre seguridad

**Fuente:** [Soporte de Cakemail](https://support.cakemail.com/hc/en-us/articles/360056359394-Information-on-security)  
**Autor:** Alessandro De Civita
**Última actualización:** hace 4 años

## Información sobre seguridad

Nos tomamos la seguridad muy en serio. De hecho, es la consideración más importante en todo lo que hacemos. Hemos decidido usar Stripe como nuestro proveedor de procesamiento de pagos. No almacenamos ninguna información de tarjetas de crédito - Stripe se encarga de esto. Stripe ha sido auditado por un auditor PCI certificado y está certificado como Proveedor de Servicios PCI Nivel 1. Este es el nivel de certificación más estricto disponible.

## ¿Cómo almacena Stripe los números de tarjeta?

Todos los números de tarjeta están cifrados en disco con AES-256. Las claves de descifrado se almacenan en máquinas separadas. Ninguno de los servidores internos y demonios de Stripe puede obtener números de tarjeta en texto plano; solo pueden solicitar que las tarjetas se envíen a un proveedor de servicios en una lista blanca estática. La infraestructura de Stripe para almacenar, descifrar y transmitir números de tarjeta funciona en un centro de datos separado y no comparte credenciales con los servicios principales de Stripe (API, sitio web, etc.).

## ¿Tienes alguna preocupación? ¿Necesitas reportar un incidente?

Contacta al equipo de soporte si has notado abuso, mal uso o has experimentado un incidente con tu cuenta.

## Artículos relacionados

- Gestionar tu facturación
- Bienvenido a la nueva página de estado
- Cumplimiento CAN-SPAM
- Comprender y configurar direcciones de correo electrónico de remitente privadas
- Configurar tu zona horaria

---

*Este contenido ha sido extraído de la documentación de ayuda de Cakemail y formateado para propósitos de referencia.*