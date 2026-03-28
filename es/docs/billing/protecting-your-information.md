---
source: "https://support.cakemail.com/hc/fr/articles/360056359394-Information-on-security"
---

# Proteger tu información

## Descripción

Nuestra plataforma se asocia con Stripe, un procesador de pagos certificado PCI Service Provider Level 1, para manejar todas las transacciones de tarjetas de crédito de forma segura. Este artículo explica nuestra infraestructura de seguridad integral, incluyendo protocolos de cifrado, prácticas de separación de datos y las medidas que tomamos para asegurar que tu información financiera permanezca protegida en todo momento.

## Por qué es importante

Nos tomamos la seguridad muy en serio. De hecho, es la consideración más importante en todo lo que hacemos. Usamos Stripe como nuestro proveedor de procesamiento de pagos. No almacenamos ninguna información de tarjetas de crédito – Stripe lo hace. Stripe ha sido auditado por un auditor PCI certificado y está certificado como PCI Service Provider Level 1. Este es el nivel de certificación más estricto disponible.

## ¿Cómo almacena Stripe los números de tarjetas de crédito?

Todos los números de tarjeta están cifrados en disco con AES-256. Las claves de descifrado se almacenan en máquinas separadas. Ninguno de los servidores internos y demonios de Stripe puede obtener números de tarjeta en texto plano; en su lugar, solo pueden solicitar que las tarjetas se envíen a un proveedor de servicios en una lista blanca estática. La infraestructura de Stripe para almacenar, descifrar y transmitir números de tarjeta opera en un centro de datos separado y no comparte credenciales con los servicios principales de Stripe (API, sitio web, etc.).

## ¿Tienes alguna preocupación? ¿Necesitas reportar un incidente?

Contacta al equipo de soporte si has notado abuso, mal uso o has experimentado un incidente con tu cuenta.

## Solución de problemas

**Notificaciones de alerta de seguridad**

- Revisa inmediatamente los detalles de la alerta
- Cambia tu contraseña si se sospecha acceso no autorizado
- Habilita la autenticación de dos factores para seguridad adicional

**No se puede actualizar la información de pago**

- Limpia las cookies y caché del navegador
- Prueba usando un navegador o dispositivo diferente
- Asegúrate de que JavaScript esté habilitado para la integración con Stripe

**Actividad sospechosa en la cuenta**

- Contacta soporte inmediatamente para reportar el incidente
- Documenta cualquier cambio o transacción no autorizada
- Revisa el historial de inicio de sesión reciente y sesiones activas

**Preocupaciones de seguridad de pago**

- Verifica que la URL muestre HTTPS y el ícono de candado
- Verifica que estés en el dominio oficial de Cakemail
- Nunca compartas detalles de pago por correo electrónico o canales no seguros

**Respuesta a violación de datos**

- Cambia tu contraseña inmediatamente
- Revisa toda la configuración de la cuenta y actividad reciente
- Contacta soporte para reportar el incidente y obtener asistencia

## Artículos relacionados

- [Gestionar tu facturación](/es/docs/billing/update-your-billing-information) - Gestión de facturación segura
- [Configurar autenticación multifactor (MFA)](/es/docs/account-settings/multi-factor-authentication-mfa) - Seguridad de cuenta
- [Solicitud de eliminación de cuenta](/es/docs/account-settings/canceling-your-account) - Eliminación de datos
- [Agregar y editar usuarios](/es/docs/account-settings/adding-and-editing-users) - Control de acceso
- [Primeros pasos](/es/docs/first-steps) - Conceptos básicos de seguridad