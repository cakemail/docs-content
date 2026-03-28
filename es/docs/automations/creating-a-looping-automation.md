---
source: >-
  https://support.cakemail.com/hc/fr/articles/9323601859867-Créer-une-automation-en-boucle
---

# Crear una automatización en bucle

<Callout type="info" title="Función Premium">
  Las automatizaciones en bucle están disponibles exclusivamente con planes Premium. Desbloquea esta función para crear secuencias de correo electrónico repetitivas poderosas que maximizan el engagement.
</Callout>

## Descripción

Un bucle te permite repetir una acción múltiples veces. Puedes usar esto para varios propósitos, como enviar un correo electrónico no abierto tres veces al mismo cliente o enviarlo hasta que se abra. Adicionalmente, podrías enviar recordatorios sobre eventos próximos o cualquier otra comunicación que requiera entrega repetida. Finalmente, los bucles también pueden combinarse con diferentes condiciones y acciones para iterarlas. Te mostraremos cómo automatizar esto con nuestra aplicación, que puede usarse según tus necesidades.

## Por qué es importante

Las automatizaciones en bucle son esenciales para maximizar las tasas de engagement y conversión al alcanzar persistentemente a los suscriptores en intervalos óptimos. Esta característica te permite crear secuencias de seguimiento sofisticadas que se adaptan al comportamiento del suscriptor, asegurando que no se pierdan mensajes importantes mientras se respetan las preferencias de engagement. Esta persistencia estratégica a menudo lleva a tasas de conversión más altas y mejor retención de clientes.

## Instrucciones paso a paso

<Stepper>

1. Haz clic en Automatizaciones.

1. Haz clic en el signo + en la parte superior derecha de la página.
   - También puedes crearlo desde el botón Crear
![886286E1-6A3E-4E01-A15E-9E08E9D1081F_4_5005_c.jpeg](/images/automations/886286E1-6A3E-4E01-A15E-9E08E9D1081F_4_5005_c.jpeg)

1. En el menú **Seleccionar un punto de partida**, puedes usar la automatización predefinida, crear una nueva plantilla desde cero o usar una que ya hayas guardado
![D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg](/images/automations/D06F7CA4-4612-4DC1-A104-827B55CA90B8_4_5005_c.jpeg)

1. Elige la lista a la que esta automatización debe estar vinculada
![Screen_Shot_2021-05-31_at_2.30.21_PM.png](/images/automations/Screen_Shot_2021-05-31_at_2.30.21_PM.png)

1. Elige un nombre para tu automatización (este nombre solo aparecerá en la plataforma)
![0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png](/images/automations/0B86F3D8-AE38-435B-8F3F-56D59535DDF5.png)

1. Puedes seleccionar un objetivo de marketing de la lista a continuación (para que podamos hacer mejores recomendaciones para ti)
![Screen_Shot_2021-05-31_at_2.31.10_PM.png](/images/automations/Screen_Shot_2021-05-31_at_2.31.10_PM.png)

1. Luego estarás en la página **Creación de flujo**. Haz clic en el signo **+** para crear un nuevo paso y seleccionar la condición o acción en el flujo de automatización
![53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg](/images/automations/53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg)

1. Para este ejemplo, crearemos una acción de correo electrónico en bucle. Elige la opción **Enviar un correo electrónico** en la pestaña Seleccionar una acción
![53E04532-3F6B-4402-AD64-BE15CE5DB172_4_5005_c.jpeg](/images/automations/017E6AE4-F6F3-4E94-B79D-822E7C609FAE.png)

1. Personaliza el correo electrónico a tu gusto.

1. Haz clic en el signo **+** para crear un nuevo paso después de la acción Enviar un correo electrónico en el flujo de automatización
![Loop action screenshot](/images/automations/D207D69D-7797-47A9-BD51-F1B2C41ACA50.png)

1. En la pestaña seleccionar una acción, elige la acción **Bucle**
![Loop action screenshot](/images/automations/83E82569-10A5-4BC8-9E94-085324249D9B.png)

1. Haz clic en **Seleccionar un tipo de evento** y elige **Enviar un correo electrónico**
![Loop action screenshot](/images/automations/B2C3AF36-2847-46ED-AB7F-2A8B92077D22.png)

1. Selecciona la configuración **Repetición del bucle**
Puedes hacer el bucle del correo electrónico continuamente o un número específico de veces
![Loop action screenshot](/images/automations/6E946072-2C90-42AB-B941-83B482059E10.png)

1. En la última configuración del bucle, define el **retraso entre cada repetición**
![Loop action screenshot](/images/automations/6B111329-2BE5-4BAB-AF63-EC873AE42031.png)

1. Haz clic en **Revisar y activar** para activar tu automatización
![Loop action screenshot](/images/automations/5ABCC781-FD80-4E3A-96BC-94AEBB839303.png)
¡Tu automatización en bucle ya está activada! Deberías probarla suscribiéndote a tu lista de contactos o agregando manualmente un contacto a la automatización.
</Stepper>

## Solución de problemas

**La automatización no se activa**

- Verifica que la automatización esté activada (revisa el botón de alternar estado)
- Asegúrate de que los contactos cumplan las condiciones de activación para la automatización
- Confirma que la lista seleccionada tenga suscriptores activos

**Los correos electrónicos se envían con demasiada frecuencia**

- Verifica el retraso entre repeticiones en la configuración del bucle
- Considera agregar condiciones para verificar el engagement antes de enviar
- Usa condiciones de «abierto» o «hizo clic» para evitar abrumar a los suscriptores

**El bucle no se detiene**

- Verifica que el conteo de repetición del bucle esté configurado correctamente (no «continuo»)
- Agrega condiciones de salida basadas en acciones del suscriptor (aperturas, clics, conversiones)
- Verifica si hay condiciones en conflicto que estén impidiendo que el bucle termine

**Problemas de rendimiento con listas grandes**

- Considera segmentar tu lista en grupos más pequeños
- Escalonar los tiempos de inicio de automatización para distribuir la carga del servidor
- Monitorea tus límites de envío y ajusta la frecuencia del bucle en consecuencia

## Artículos relacionados

- [Entender la automatización de correo electrónico](/es/docs/automations/understanding-email-automation) - Conceptos básicos de automatización
- [Crear una automatización con condiciones de ramificación](/es/docs/automations/creating-an-automation-with-branching-conditions) - Lógica avanzada de automatización
- [Crear un correo electrónico de bienvenida automatizado](/es/docs/automations/creating-an-automated-welcome-email) - Ejemplo simple de automatización
- [Rastrear viajes del cliente con atributos personalizados](/es/docs/automations/tracking-customer-journeys-with-custom-attributes) - Rastrear progreso de automatización
- [Crear un segmento](/es/docs/audience/creating-dynamic-segments) - Dirigirse a destinatarios de automatización