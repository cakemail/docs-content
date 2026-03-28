---
source: "https://support.cakemail.com/hc/en-us/articles/360056250714-Feedback-loops"
---

# Bucles de retroalimentación

**Extracto:** 2025-06-12

---

## Descripción

Un bucle de retroalimentación es un flujo de datos establecido por los proveedores de servicios de Internet (ISP) que transmite quejas de sus usuarios al remitente del mensaje original. Estos datos de quejas son luego procesados por el remitente para que puedan eliminar y/o cancelar permanentemente la suscripción del usuario de la(s) lista(s) en cuestión. Esto ayuda a evitar futuras quejas, lo que puede afectar seriamente la entrega.

## Por qué es importante

Los bucles de retroalimentación dan a los ESP (proveedores de servicios de correo electrónico) la capacidad de rastrear cuántas quejas se reciben para un cliente dado (o campaña) para que puedan tomar las medidas apropiadas.

Las personas que generan muchas quejas pueden causar muchos problemas con la entrega, especialmente si son parte de un grupo de IP compartida usado por múltiples clientes.

## Umbral de tasa de quejas

**En promedio, una tasa de quejas superior al 0.25% (1 de cada 400) a cualquier ISP dado para cualquier envío dado, se considera un problema.**

## Monitorear bucles de retroalimentación

Bajo tus actividades de contacto en tu campaña entregada, podrás filtrar FBL por proveedores. Estos incluyen:

### ISP principales con bucles de retroalimentación:
- **Microsoft**
- **Comcast** 
- **Hotmail**
- **Yahoo!**
- **AOL**
- **Gmail**
- **Google Apps**
- **Verizon**
- **Office 365**

### Proveedores internacionales:
- **LaPoste**
- **Yahoo! UK**
- **Mail.ru**
- **Terra Brasil**
- **Seznam.cz**
- **Yahoo! HK**
- **Libero.it**
- **Yandex**
- **Ziggo**
- **Free.fr**
- **Globo**
- **Yahoo! TW**
- **Videotron**

### Otros proveedores:
- **Rackspace**
- **United Online**
- **Rogers**
- **Hover**
- **FastMail**
- **Tucows (OpenSRS)**
- **BOL**
- **Earthlink**
- **Cox**
- **ItaliaOnLine**
- **WindStream**
- **BlueTie**
- **USA.net**
- **BigPond**
- **RCN**
- **WOW!**
- **Cincinnati Bell**
- **Cable ONE**
- **Virgin**
- **Synacor**
- **Spam Experts**
- **EdgeWave**
- **McAfee**
- **GoDaddy**
- **Barracuda**
- **Symantec**
- **ATT**

## Mejores prácticas

- **Monitorear las tasas de quejas** regularmente en todos los ISP
- **Mantener las tasas de quejas por debajo del 0.25%** (1 de cada 400 correos electrónicos)
- **Eliminar automáticamente a los quejosos** de futuros envíos
- **Analizar patrones de quejas** para identificar problemas de contenido o tiempo
- **Mantener la higiene de la lista** para prevenir altas tasas de quejas
- **Usar doble suscripción** para asegurar que los suscriptores quieran tus correos electrónicos

## Impacto en la entregabilidad

Las altas tasas de quejas pueden resultar en:
- **Correos electrónicos bloqueados** a nivel de ISP
- **Colocación reducida en la bandeja de entrada** 
- **Daño a la reputación de IP compartida** afectando a otros usuarios
- **Suspensión de cuenta** en casos severos
- **Lista negra permanente** de ISP principales

## Solución de problemas

**Mi tasa de quejas ha aumentado repentinamente**

- Revisa el contenido de la campaña que desencadenó las quejas
- Verifica si has cambiado tu estilo de línea de asunto o nombre del remitente
- Confirma que no hayas incluido accidentalmente contactos no comprometidos o antiguos
- Analiza si el aumento es de un ISP específico o todos los proveedores

**No puedo ver datos de FBL para ciertos proveedores**

- No todos los ISP participan en bucles de retroalimentación (algunos usan otros métodos)
- Gmail usa su propio sistema de reportes a través de Google Postmaster Tools
- Algunos proveedores solo reportan a ESP, no a remitentes individuales
- Verifica si el proveedor requiere registro FBL por separado

**La tasa de quejas es alta pero el contenido parece correcto**

- Verifica que los suscriptores recuerden haber dado su consentimiento (usa doble suscripción)
- Verifica si tu frecuencia de envío ha aumentado recientemente
- Revisa si las expectativas establecidas durante el registro coinciden con tu contenido
- Considera enviar una campaña de reactivación para confirmar el interés

**Cómo reducir futuras tasas de quejas**

- Haz que los enlaces de cancelar suscripción sean prominentes y fáciles de usar
- Establece expectativas claras durante el proceso de registro
- Segmenta tu lista para enviar contenido más relevante
- Monitorea la participación y elimina regularmente suscriptores inactivos

## Artículos relacionados

- [Entender quejas, rebotes y cancelación de suscripciones](/es/docs/analytics/email-bounces) - Gestión de quejas
- [Lista negra de dominios](/es/docs/delivery-troubleshooting/domain-blacklisting) - FBL previene la lista negra
- [Dominar los conceptos básicos de entregabilidad](/es/docs/delivery-troubleshooting/email-deliverability) - Importancia de FBL
- [Usar la lista de supresión](/es/docs/account-settings/suppression-lists) - Supresiones FBL
- [Incluir un enlace de cancelar suscripción](/es/docs/campaign-creation/adding-unsubscribe-links) - Reducir quejas