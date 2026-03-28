---
source: >-
  https://support.cakemail.com/hc/fr/articles/9064415975707-Déterminer-le-parcours-client-par-les-attributs-personnalisés-d-automation
---

# Rastrear viajes del cliente con atributos personalizados

<Callout type="info" title="Función Premium">
  Los atributos personalizados en automatizaciones están disponibles exclusivamente con planes Premium. Para desbloquear esta poderosa función, haz clic en **Actualizar plan** en el menú de tu cuenta.
</Callout>

## Descripción

Usando la herramienta de automatización, puedes configurar acciones que actualicen automáticamente el atributo personalizado de un destinatario cuando se tome otro paso, como hacer clic en un enlace o abrir un correo electrónico. Te mostraremos cómo hacer esto en este artículo.

## Por qué es importante
Puedes usar esta acción para determinar qué camino deben tomar tus suscriptores durante tu proceso de incorporación y crear segmentos en tu lista. También puedes agregar esto a una automatización existente para cambiar el atributo de un cliente basándose en una acción específica en el flujo.

*Guías relacionadas:*
- [Crear una automatización con condiciones de ramificación](/es/docs/automations/creating-an-automation-with-branching-conditions)
- [Crear un segmento de lista de contactos](/es/docs/audience/creating-dynamic-segments)

## Instrucciones paso a paso

<Stepper>

1. Haz clic en Automatizaciones.

1. Haz clic en el signo + en la parte superior derecha de la página.
También puedes crearlo desde el botón Crear

1. En el menú **Selecciona un punto de partida**, puedes usar la automatización predefinida, crear una nueva plantilla desde cero, o usar una que ya hayas guardado
![Select automation starting point](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Elige la lista a la que debe estar vinculada esta automatización
![Choose list for automation](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Elige un nombre para tu automatización (este nombre solo aparecerá en la plataforma)
![Name your automation](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. Puedes seleccionar un objetivo de marketing de la lista a continuación (para que podamos hacer mejores recomendaciones para ti)
![Select marketing goal](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. Luego estarás en la página **Creación de flujo**. Haz clic en el signo **+** para seleccionar la condición en el flujo de automatización
![Click plus sign in automation flow](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Agrega condiciones de ramificación
![Add branching condition to flow](/images/automations/A1E2044B-629A-4B0B-A1DC-C691A43D1560.png)
*Referencia: Crear una automatización con condiciones de ramificación*

1. Agrega la acción **Actualizar atributo personalizado**
![Select Update custom attribute action](/images/automations/934BB99B-18DC-4E82-BFA8-3ACA98EE38EE.png)

1. Selecciona el atributo personalizado y especifica su nuevo valor
![Configure custom attribute update settings](/images/automations/917CF07D-5A47-49E9-A144-44EC5D180009.png)

1. El atributo determinado se actualizará si el contacto coincide con la condición de ramificación
![Complete automation flow with attribute updates](/images/automations/DAA530AE-A20D-4625-92EF-A0F9FD584CD9.png)

1. Revisa tu campaña y actívala
![Activate automation toggle button](/images/automations/EE3B04B5-9975-4D99-A90B-ECD93F39152D_4_5005_c.jpeg)
¡La automatización de atributos personalizados ahora está configurada correctamente; ya puedes salir del editor!
![Exit editor view](/images/automations/E01EE1C0-31F2-4597-BA57-911EBFC77E8E_4_5005_c.jpeg)
Usa esta función para crear y rastrear viajes del cliente y utilizar esta información para crear segmentos que te permitirán dirigir mejor y personalizar tus campañas.
</Stepper>

## Solución de problemas

**Los atributos personalizados no se actualizan**

- Verifica que el atributo personalizado exista en la configuración de tu lista de contactos
- Confirma que el tipo de datos del atributo coincida con el valor que se está configurando
- Asegúrate de que la automatización esté activada y se cumplan las condiciones de activación

**Se configuran valores incorrectos**

- Verifica la lógica de ramificación que lleva a la acción de actualización
- Prueba con contactos de muestra para verificar que se siga la ruta correcta
- Verifica si hay automatizaciones en conflicto actualizando el mismo atributo

**La segmentación no funciona después de las actualizaciones**

- Permite tiempo para que las actualizaciones de atributos se propaguen (usualmente instantáneo)
- Actualiza tus criterios de segmento después de hacer cambios
- Verifica que las condiciones del segmento coincidan con los valores exactos del atributo

**Problemas de rendimiento con listas grandes**

- Procesa las actualizaciones de atributos por lotes durante horas de menor actividad
- Limita el número de actualizaciones simultáneas de atributos por contacto
- Considera usar la API para actualizaciones masivas de atributos en lugar de automatización

## Artículos relacionados

- [Crear una automatización con condiciones de ramificación](/es/docs/automations/creating-an-automation-with-branching-conditions) - Construir rutas de viaje
- [Agregar atributos a tu lista](/es/docs/audience/adding-attributes-to-your-list) - Crear marcadores de viaje
- [Entender la automatización de correos electrónicos](/es/docs/automations/understanding-email-automation) - Descripción general de automatización
- [Crear un segmento](/es/docs/audience/creating-dynamic-segments) - Segmentar por etapa del viaje
- [Rastrear el rendimiento de campañas](/es/docs/analytics/tracking-campaign-performance) - Medir el éxito del viaje