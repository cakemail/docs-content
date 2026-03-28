---
source: "https://support.cakemail.com/hc/es/articles/360058100213-Dedicated-sending-IP-address"
---

# Direcciones IP dedicadas: cuándo y por qué las necesitas

## Descripción

Una dirección IP dedicada se asigna exclusivamente a un remitente. Por lo tanto, dicha empresa sería la única marca que puede enviar desde esa dirección IP. Como resultado, una dirección IP dedicada no se verá afectada por otros remitentes y tendrán control sobre su reputación.

## Por qué esto es útil

La ventaja principal de usar tu propia dirección IP (o direcciones) es que tienes control de tu reputación y en última instancia tu entrega. Los ISP tienen una tendencia a dar tratamiento "preferencial" si el correo electrónico que se origina de una dirección IP es estático, esa IP ha estado enviando por mucho tiempo y tiene una buena reputación. Si ven múltiples remitentes usando la misma dirección IP, no tienen más opción que mirar más de cerca el correo electrónico que se está enviando ya que el remitente sigue cambiando.

## Cómo configurar tu dirección IP de envío dedicada

### Requisitos de IP dedicada

Para que un cliente califique para una dirección IP dedicada, deben cumplirse ciertos criterios. Las IP dedicadas pueden no ser adecuadas para todos. Si el remitente no cumple con los criterios (abajo), su reputación será pobre, probablemente no podrá entregar correos electrónicos efectivamente, y probablemente será colocado de vuelta en el pool compartido.

### Requisitos de envío

- Tasa de apertura de al menos 15%
- Tasa de rebotes duros de no más del 5%
- Tasa de spam de no más del 0.1%
- Tasa de cancelación de suscripción de no más del 1%

### Requisitos de volumen

- Un volumen mensual mínimo de 30,000 correos electrónicos
- Un volumen diario máximo de 1,000,000 correos electrónicos (por IP)
- El cliente debe enviar de manera consistente (al menos una vez por semana)

### Costo

- Costo de configuración: $0
- $99 USD por IP / por mes

### Configuración

Se necesitará crear un registro A y MX en el DNS del dominio del cliente que redirija a la IP (proporcionada por nosotros).

Manejaremos la configuración inicial, confirmación de DNS, pruebas, configuración de FBL, lista blanca, calentamiento de IP y limitación. El proceso de configuración toma un mínimo de 7 días hábiles y la IP necesitará ser calentada por un período de aproximadamente 2-4 semanas antes de que pueda enviar a volumen completo. La fase de calentamiento puede acelerarse si el cliente envía todos los días y mantiene una buena reputación.

Si el cliente envía regularmente, cumple con las mejores prácticas y tiene un alto nivel de participación junto con un número bajo de rebotes y quejas - su entrega siempre será mejor en su propia IP y el período de calentamiento será más corto.

## Direcciones IP dedicadas: mejores prácticas

Enviar regularmente, adherirse a las mejores prácticas, y tener un alto nivel de participación con una baja tasa de rebotes y tasa de quejas asegurará mejor entrega en tu propia IP.

## Artículos relacionados
- [Reputación del remitente de correo electrónico: cómo construirla y mantenerla](../advanced-strategies/email-sender-reputation-how-to-build-and-maintain)
- [Optimización de entregabilidad de correos electrónicos: guía completa](./email-deliverability-optimization-complete-guide)
- [Por qué deberías usar tu propio dominio para enviar correos electrónicos](./why-you-should-use-your-own-domain-for-sending)