---
source: "https://support.cakemail.com/hc/en-us/articles/1260804535049-Adding-a-DATE-merge-tag"
---

# Agregar una etiqueta de combinación de fecha

## Descripción

Los campos de combinación de correo insertan datos únicos del usuario, vinculados a un valor único, en los correos; se discuten con mayor detalle aquí. Se puede insertar una fecha en una línea de asunto o campaña usando el campo de combinación [DATE]. Debe tenerse en cuenta que no puede usar el campo de combinación [DATE] como parte de un enlace.

## Por qué es importante

Este elemento dinámico ayuda a mantener el engagement haciendo que los correos sean personalizados y oportunos, mientras reduce el esfuerzo manual requerido para actualizar contenido relacionado con fechas en campañas recurrentes. Es particularmente valioso para anuncios de eventos, ofertas por tiempo limitado y comunicaciones programadas regularmente.

## Sintaxis básica:
```
[DATE|0|formato]
```

Hay dos parámetros: **Un número** y **un formato**.

### El parámetro de número:
- **'0'** representa la fecha actual
- La fecha puede ajustarse agregando o restando segundos
- Números positivos = fechas futuras
- Números negativos = fechas pasadas

### El parámetro de formato:
Esto determina cómo se muestra la fecha. La fecha se formatea según la **convención PHP**. PHP proporciona una lista de todos los formatos en línea.

**Nota:** Las fechas usando la forma larga (Monday, June 10) solo están disponibles en inglés.

## Ejemplos

Si la fecha actual es 10 de junio de 2013:

### Ejemplos de fechas futuras:
- `[DATE|86400|m.d.y]` mostrará **06.11.13** (ya que 86,400 segundos equivale a 24 horas)

### Ejemplos de fechas pasadas:
- `[DATE|-259200|F j,Y]` mostrará **June 07, 2013** (ya que 259,200 segundos equivale a 3 días)

![Interfaz de campo](/images/campaign-creation/campaigns-adding-a-date-merge-tag-333.png)

## Opciones de formato comunes

| Formato | Salida de muestra | Descripción |
|---------|------------------|-------------|
| `Y-m-d` | 2013-06-10 | Año-Mes-Día (numérico) |
| `F j, Y` | June 10, 2013 | Nombre completo del mes, día, año |
| `M d, Y` | Jun 10, 2013 | Nombre corto del mes, día, año |
| `m/d/Y` | 06/10/2013 | Mes/Día/Año |
| `l, F j` | Monday, June 10 | Día de la semana, mes, día |

## Cálculos de tiempo

- **1 día** = 86,400 segundos
- **1 semana** = 604,800 segundos
- **1 mes (30 días)** = 2,592,000 segundos

## Casos de uso

- **Fechas de boletín**: Mostrar fecha actual en encabezados de correo
- **Recordatorios de eventos**: Referenciar fechas de eventos próximos
- **Avisos de fecha límite**: Mostrar cuenta regresiva para fechas importantes
- **Contenido estacional**: Actualizar automáticamente referencias estacionales
- **Contenido dinámico**: Crear mensajes sensibles al tiempo

## Notas importantes

- No puede usarse como parte de un hipervínculo
- Las fechas en forma larga están solo en inglés
- Usa convenciones de formato de fecha PHP
- Calcula desde el momento en que se envía el correo

## Solución de problemas

**La fecha se muestra incorrectamente o no aparece**

- Verifique que la sintaxis siga [DATE|segundos|formato] exactamente
- Verifique que los caracteres de tubería (|) separen los parámetros
- Asegúrese de que la cadena de formato use códigos de formato de fecha PHP válidos
- Pruebe con formatos simples primero (Y-m-d) antes que los complejos

**Se muestra la zona horaria incorrecta**

- Note que las fechas usan la zona horaria del servidor, no la del destinatario
- Considere agregar información de zona horaria en su contenido
- Tenga en cuenta los cambios de horario de verano
- Pruebe campañas en diferentes momentos para verificar consistencia

**Los cálculos de fecha no funcionan**

- Verifique sus cálculos de segundos (86400 = 1 día)
- Use números negativos para fechas pasadas, positivos para futuras
- Verifique que no esté excediendo rangos de fecha razonables
- Pruebe cálculos con conversores epoch en línea

**El formato de fecha se muestra como código**

- Asegúrese de que el parámetro de formato use caracteres de fecha PHP válidos
- Verifique errores tipográficos en la cadena de formato (sensible a mayúsculas)
- Evite espacios dentro de los corchetes de la etiqueta de combinación
- Recuerde que las fechas en forma larga solo funcionan en inglés

## Artículos relacionados

- [Agregar etiquetas de combinación a una campaña](/es/docs/personalization/adding-merge-tags-to-a-campaign) - Otras etiquetas de combinación
- [Usar etiquetas de combinación y respaldos](/es/docs/personalization/using-merge-tags-and-fallbacks) - Conceptos básicos de etiquetas de combinación
- [Agregar atributos a su lista](/es/docs/audience/adding-attributes-to-your-list) - Atributos de fecha
- [Usar contenido dinámico](/es/docs/personalization/using-dynamic-content) - Fechas dinámicas
- [Crear campañas](/es/docs/campaign-creation/creating-campaigns) - Usar en campañas