---
source: "https://support.cakemail.com/hc/es/articles/360056294614-Use-my-own-domain-in-the-sender-email-address-why"
---

# Por qué deberías usar tu propio dominio para enviar correos electrónicos

Al enviar un boletín informativo usando una dirección de correo electrónico que termina en @yahoo.com o @google.com a través de cualquier servicio de marketing por correo electrónico, se ve como suplantar a Yahoo! o Google, incluso si posees esa dirección de correo electrónico legítimamente.

Es importante entender que enviar desde un dominio no autenticado puede llevar a problemas serios de entrega con todos los proveedores de correo electrónico, potencialmente evitando que los destinatarios reciban tus correos electrónicos en su bandeja de entrada.

## El desafío de la autenticación

Fallar en autenticar tu dominio abre la puerta a desafíos de entregabilidad para tus correos electrónicos. Sin protocolos de autenticación como SPF, DKIM y DMARC en su lugar, los spammers pueden explotar tu dominio, empañando la legitimidad de tus correos electrónicos. Los proveedores de correo electrónico, a su vez, pueden ver tales mensajes con escepticismo, aumentando la probabilidad de que sean marcados como SPAM o que no lleguen a las bandejas de entrada de los destinatarios en absoluto.

La autenticación actúa como una capa de verificación crucial, asegurando que tus correos electrónicos sean reconocidos como comunicaciones legítimas y confiables, y mejorando significativamente sus posibilidades de entrega exitosa.

## Usa tu dominio para mejorar tu entregabilidad de correo electrónico

Al emplear una dirección de correo electrónico asociada con un dominio que posees, es crucial autenticarlo. Este proceso de autenticación sirve como prueba de que eres un remitente legítimo, reforzando la credibilidad de tu correo electrónico y aumentando la probabilidad de entrega exitosa. Al tomar este paso, no solo estableces confianza con los proveedores de correo electrónico sino que también aseguras que tus mensajes lleguen a las bandejas de entrada de los destinatarios previstos de manera confiable.

## Usar mi propio dominio en la dirección de correo electrónico del remitente – recomendaciones

Al enviar boletines informativos usando nuestra aplicación, deberías estar usando una dirección de correo electrónico con un dominio que poseas, que hayas autenticado. Aquí hay algunas recomendaciones adicionales para el dominio en sí:

- El dominio en sí debería coincidir con el sitio web donde las personas se suscribieron
- El DNS debería estar configurado para autenticar usando SPF/DKIM
- Tener direcciones postmaster@ abuse@ funcionando
- Información WHOIS pública (no privada)
- No debería tener más de 30 caracteres de longitud
- Estar registrado por un mínimo de 30 días (los dominios nuevos parecen sospechosos y podrían ser incluidos en listas negras en Spamhaus o Spam Eating Monkey)
- No debería contener guiones "-" o puntos "." innecesarios (ej: info@este-correo-es-de-nuestro.marketing.departamento.abc.com)

## Recursos

Hemos reunido algunos recursos para guiarte a través de esto:

- Autenticando mi dominio con protocolos SPF, DKIM y DMARC
- Eligiendo la dirección de correo electrónico del remitente correcta
- Necesitarás autenticación DMARC para enviar correo electrónico a Gmail y Yahoo
- Nuevas protecciones de Gmail para una bandeja de entrada más segura y con menos spam

## Artículos relacionados
- [Elegir la dirección de correo electrónico del remitente correcta](./choosing-the-right-sender-email-address)
- [Reputación del remitente de correo electrónico: cómo construirla y mantenerla](../advanced-strategies/email-sender-reputation-how-to-build-and-maintain)
- [Direcciones IP dedicadas: cuándo y por qué las necesitas](./dedicated-ip-addresses-when-and-why-you-need-one)