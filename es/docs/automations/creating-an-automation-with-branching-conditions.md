---
source: >-
  https://support.cakemail.com/hc/fr/articles/6666175668763-Créer-une-automation-avec-des-conditions-de-branchement
---

# Crear una automatización con condiciones de ramificación

<Callout type="info" title="Función Premium">
  Las condiciones de ramificación en automatizaciones están disponibles exclusivamente con planes Premium. Actualiza tu plan para crear viajes de correo electrónico sofisticados basados en comportamiento.
</Callout>

## Descripción

Al usar condiciones de ramificación en la automatización, puedes seleccionar el contenido a enviar a contactos que hicieron clic en un enlace en un correo electrónico versus contactos que no hicieron clic en ese enlace o hicieron clic en otro. Este artículo te mostrará cómo configurar esta automatización condicional.

## Por qué es importante
Puedes hacer que tus comunicaciones sean más relevantes para tus usuarios enviándoles diferente contenido basado en sus acciones. A cambio, esto resultará en una mejor experiencia para ellos que esté más adaptada a sus necesidades, y puedes usar esto para mejorar tu flujo de automatización.

## Instrucciones paso a paso

Aquí están los pasos que necesitarás seguir para completar esta automatización:

<Stepper>

1. Haz clic en Automatizaciones.

1. Haz clic en el signo + en la parte superior derecha de la página.

1. En el menú **Selecciona un punto de partida**, puedes usar la automatización predefinida, crear una nueva plantilla desde cero, o usar una que ya hayas guardado
![Starting point options](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Elige la lista a la que debe estar vinculada esta automatización
![Select list for automation](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Elige un nombre para tu automatización (este nombre solo aparecerá en la plataforma)
![Name your automation](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. Puedes seleccionar un objetivo de marketing de la lista a continuación (para que podamos hacer mejores recomendaciones para ti)
![Select marketing goal](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. Luego estarás en la página **Creación de flujo**
Se encuentran aquí dos subdivisiones:
- Seleccionar una condición
- Seleccionar una acción
</Stepper>

### Seleccionar una condición.

<Stepper>

1. Haz clic en el signo **+** para seleccionar la condición en el flujo de automatización
![Add condition to automation flow](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Selecciona la opción **Si / Si no** para configurar la automatización con condiciones de ramificación
![Select If/Else branching condition](/images/automations/C90C90CA-E6E4-43EF-BE6A-8185894D0ACD_4_5005_c.jpeg)
Basándose en las condiciones, los contactos pueden seguir un camino diferente en el flujo de automatización.
![Example automation flow with branching](/images/automations/C0B004B3-584F-4282-8609-FB951B82493B.png)
Haz clic en el botón de alternar en la parte superior si estás en un flujo, o ve a la página de Automatizaciones para activar esta automatización.
![Complete automation with branching paths](/images/automations/8BE1A670-0AE2-4891-B40E-1E7C23963F2F_4_5005_c.jpeg)
¡Ahora has completado tu automatización! Se recopilarán estadísticas para cada correo electrónico en tu flujo, las cuales puedes usar para optimizarlo. Visita nuestro artículo de automatización para una descripción completa de la herramienta.
</Stepper>

## Solución de problemas

**Los contactos no siguen la rama esperada**

- Verifica que la lógica de condición esté configurada correctamente (operadores Y vs O)
- Asegúrate de que el seguimiento esté habilitado para enlaces y aperturas
- Permite tiempo suficiente para la interacción del correo electrónico antes de la ramificación

**Ambas ramas se ejecutan**

- Asegúrate de que las ramas sean mutuamente excluyentes
- Verifica la lógica Si/Si no para condiciones superpuestas
- Prueba con un solo contacto para rastrear la ruta del flujo

**Las condiciones no se evalúan correctamente**

- Confirma que los campos de datos existan y estén poblados para los contactos
- Verifica las condiciones de fecha/hora contra la configuración de zona horaria del contacto
- Confirma que los valores de atributos personalizados coincidan con el formato esperado

**Problemas de rendimiento con ramificación compleja**

- Limita las ramas anidadas a 3-4 niveles de profundidad
- Usa convenciones de nomenclatura claras para cada rama
- Considera dividir automatizaciones complejas en múltiples flujos más simples

## Artículos relacionados

- [Entender la automatización de correos electrónicos](/es/docs/automations/understanding-email-automation) - Fundamentos de automatización
- [Crear una automatización en bucle](/es/docs/automations/creating-a-looping-automation) - Flujos de trabajo repetitivos
- [Crear un segmento](/es/docs/audience/creating-dynamic-segments) - Ramificar por segmentos
- [Agregar atributos a tu lista](/es/docs/audience/adding-attributes-to-your-list) - Ramificar por atributos
- [Rastrear viajes del cliente con atributos personalizados](/es/docs/automations/tracking-customer-journeys-with-custom-attributes) - Rastrear rutas de ramificación