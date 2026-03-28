---
source: >-
  https://support.cakemail.com/hc/en-us/articles/14778456102427-Creating-and-Using-UTM-Codes-to-track-click-conversions
---

# Crear enlaces de seguimiento UTM

## Descripción

Los parámetros UTM son una herramienta esencial para rastrear la efectividad de tus campañas de marketing por correo electrónico. Al agregar códigos únicos a las URL en tus campañas, puedes rastrear clics y conversiones a tu sitio web desde campañas específicas. En este artículo, te mostraremos cómo usar efectivamente los parámetros UTM en tus campañas, incluyendo mejores prácticas a tener en cuenta, cómo crear enlaces UTM y cómo agregarlos a tus campañas.

Un enlace UTM es un enlace regular con código adicional agregado para rastrear de dónde vienen los clics. Este código incluye detalles como fuente, medio y nombre de campaña. Al usar enlaces UTM, puedes rastrear la efectividad de tu campaña de marketing y de dónde viene el tráfico de tu sitio web. Por ejemplo, si ves clics provenientes de un enlace UTM con fuente "Facebook" y nombre de campaña "venta", sabrás que tu promoción de venta de Facebook está funcionando.

## Por qué es importante

Al usar enlaces UTM, puedes obtener información valiosa sobre el rendimiento de tu campaña de marketing. Puedes ver qué fuentes y canales generan más tráfico y conversiones, qué variantes de anuncios funcionan mejor y qué palabras clave generan más tráfico de motores de búsqueda. Esta información puede ayudarte a optimizar tus campañas para mejores resultados.

## Proceso paso a paso

Aquí hay un ejemplo de cómo podrías usar enlaces UTM. Digamos que estás lanzando una campaña de correo electrónico para promocionar un nuevo producto. Al agregar parámetros UTM a los enlaces en tus correos electrónicos, puedes rastrear cuántas personas hicieron clic en esos enlaces y cuántas de ellas finalmente se convirtieron en clientes. Aquí te explicamos cómo puedes hacerlo:

<Stepper>

1. Crea tu campaña
Antes de poder agregar enlaces UTM, necesitarás crear tu campaña de correo electrónico.

1. En el último paso del proceso de creación de campaña, selecciona Parámetros UTM de campaña para acceder a los campos de parámetros.
![Screenshot of the add interface](/images/analytics/utm-parameters-1.png)

1. Completa los campos de parámetros UTM
Una vez que hayas accedido a los campos de parámetros UTM, puedes comenzar a completarlos. Los parámetros clave que querrás incluir son:
- **Fuente:** Esto se refiere a la fuente de tráfico o plataforma donde se ejecuta tu campaña. Por ejemplo, dado que estás lanzando una campaña de correo electrónico, tu fuente podría ser "cakemail".
- **Medio:** Esto se refiere al canal de marketing que estás usando. Para una campaña de correo electrónico, tu medio sería "email".
- **Nombre de campaña:** Esto se refiere al nombre de tu campaña. En nuestro ejemplo, esto podría ser "lanzamiento_producto".
- **Contenido:** Esto se refiere al contenido específico o variante de anuncio en la que el usuario hizo clic. Esto puede ser útil para probar diferentes variantes de anuncios para ver cuál funciona mejor.
- **Término:** Esto se refiere a las palabras clave usadas por el usuario en un motor de búsqueda. Esto puede ser útil para rastrear la efectividad de las campañas de búsqueda pagada.
![Screenshot of the creation interface](/images/analytics/utm-parameters-2.png)

1. Crea tu enlace UTM.
</Stepper>

## Siguiendo mejores prácticas

**La consistencia es clave:** Asegúrate de ser consistente con la ortografía y capitalización. Los parámetros UTM son sensibles a mayúsculas y minúsculas, por lo que usar diferentes variaciones de la misma palabra puede causar problemas con el rastreo. Además, no uses espacios en tus parámetros UTM, ya que esto puede romper el enlace.

**Usa nombres descriptivos:** Sé descriptivo en tus convenciones de nomenclatura para que sea fácil entender con qué campaña o canal está asociado un parámetro UTM. Por ejemplo, usa "utm_campaign=venta_primavera" en lugar de "utm_campaign=12345".

**No exageres:** Aunque los parámetros UTM pueden ser beneficiosos, no te excedas. Demasiados parámetros UTM pueden desordenar tus URL y hacer difícil rastrear y analizar datos efectivamente.

**Mantén un ojo en la calidad de datos:** Revisa regularmente tus datos UTM para asegurar que sean precisos y relevantes. Si notas alguna discrepancia o inconsistencia, investiga el problema y haz los ajustes necesarios a tus campañas.

**Acorta enlaces UTM:** Considera usar un acortador de URL para hacer tus enlaces UTM menos visibles. Estos enlaces pueden volverse muy largos, especialmente si agregas múltiples parámetros, por lo que acortar el enlace puede hacer más fácil usarlo en tus campañas de marketing por correo electrónico.

## Solución de problemas

**Los parámetros UTM no se rastrean en analíticas**

- Verifica que los parámetros UTM estén correctamente formateados sin espacios o caracteres especiales
- Verifica que tu plataforma de analíticas (Google Analytics, etc.) esté correctamente configurada
- Asegúrate de que la URL de destino sea válida y que el código de rastreo esté instalado en la página de destino
- Espera 24-48 horas para que los datos aparezcan en los informes de analíticas

**Los enlaces se rompen después de agregar parámetros UTM**

- Usa solo caracteres alfanuméricos: letras y números
- Prueba todos los enlaces antes de enviar la campaña para asegurar que funcionen correctamente
- Usa una herramienta de validación de URL para verificar errores de sintaxis
- Evita usar espacios en valores UTM - usa guiones bajos o guiones en su lugar

**Datos de campaña inconsistentes en informes**

- Mantén un documento de convención de nomenclatura UTM para tu equipo
- Usa minúsculas para todos los parámetros UTM para evitar problemas de sensibilidad a mayúsculas
- Crea una hoja de cálculo para rastrear todas las combinaciones UTM usadas en las campañas
- Audita regularmente tu uso de UTM para asegurar consistencia entre equipos

## Artículos relacionados

- [Rastrear actividad de tasa de clics](/es/docs/analytics/tracking-click-rate-activity) - Monitorear compromiso de enlaces
- [Entender tasas de clics de correo electrónico](/es/docs/analytics/email-click-rates) - Analizar rendimiento de clics
- [Rastrear rendimiento de campaña](/es/docs/analytics/tracking-campaign-performance) - Analíticas comprehensivas
- [Usar integración de Zapier](/es/docs/integrations/connecting-cakemail-with-zapier) - Conectar a herramientas de analíticas
- [Entender estadísticas de campaña](/es/docs/analytics/understanding-campaign-reports) - Resumen de métricas de campaña