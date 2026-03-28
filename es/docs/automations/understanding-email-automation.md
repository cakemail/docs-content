---
source: >-
  https://support.cakemail.com/hc/fr/articles/1260807408129-Comprendre-l-automation-de-email
---

# Comprender la automatización de correos electrónicos

## Descripción

La automatización te permite vincular una acción realizada por tus contactos a una secuencia de tareas predefinidas. Las tareas manuales pueden ejecutarse automáticamente con esta herramienta, mediante una plataforma de trabajo única que se sincroniza con las condiciones y actividades existentes. Con la automatización, por ejemplo, podrías configurar un correo electrónico de bienvenida para que se envíe unos segundos después de que un contacto se suscriba a un formulario de suscripción vinculado a una lista.

Lo que se presenta en esta guía:
- La capacidad de acceder y gestionar automatizaciones
- Una descripción de las funciones de esta herramienta

## Por qué es importante

La automatización es perfecta para tareas repetitivas asíncronas. Puede aumentar la eficiencia, productividad, precisión y reducir errores cuando se realiza correctamente. Podrás gestionar mejor tu sistema de trabajo con ella porque tendrás una visión más clara del mismo.

## Instrucciones paso a paso

### Crear una automatización:

<Stepper>

1. Haz clic en Automatización.

1. Haz clic en el signo + en la parte superior derecha de la página.
También puedes crearla desde el botón Crear
Si ya has creado una automatización, también se encontrará aquí. 
Puedes abrirla, renombrarla o eliminarla.
![Automation list showing existing automations](/images/automations/1B49B1AC-5024-450E-A740-F6853A6B88D9.png)
</Stepper>

### Página de edición de automatización

En esta página, verás cómo fluye tu automatización de arriba hacia abajo de manera estructurada, con cada paso representado por bloques interconectados.

![Automation workflow editor showing interconnected blocks](/images/automations/33FA06AA-A3C9-404D-9B68-19BD7AF5B3B8.png)

Aquí puedes:
- Agregar contactos manualmente a la automatización
- Ver estadísticas de campañas automatizadas durante un período específico
- Editar el flujo de trabajo

![Automation statistics dropdown menu](/images/automations/mceclip0.png)

### Editar una automatización

Hay dos tipos de pasos al editar/crear un flujo:
- Condiciones
- Acciones.

#### Seleccionar una condición

Una condición puede ser:

**Retraso:** Esto te permite establecer un retraso en segundos, minutos, horas, días e incluso semanas.

**Si / Sino:** Dependiendo de si los contactos coinciden con las condiciones, se unirán al camino Sí, de lo contrario irán al camino No.

**División de ruta:** Tus suscriptores pueden dividirse usando esta condición.

#### Seleccionar una acción

La acción predeterminada en una automatización será enviar un correo electrónico automatizado. Puedes editar el correo electrónico con el diseñador de correos electrónicos y determinar la línea de asunto del correo electrónico en el menú de configuración de implementación.

![Email action configuration panel](/images/automations/E97A2994-721A-4A9A-9B0A-4E8F0D52D6D0_4_5005_c.jpeg)

## Activar una automatización

Una vez que estés listo para lanzar esta automatización, puedes revisarla y activarla.

![Automation activation toggle button](/images/automations/mceclip3.png)

Se te notificará si algo necesita ser arreglado antes de que la automatización pueda ser activada.

## Estadísticas de automatización

Haz clic en el botón desplegable para elegir el período y ver las estadísticas de tu automatización.

![Period selector and statistics overview](/images/automations/50891B80-F44A-462E-A398-3DA7E6240367.png)
![Automation flow with performance metrics](/images/automations/4AD7C319-83F1-4E11-8231-FBE41C5FFE9F.png)

Haz clic en el correo electrónico para ver un panel lateral más detallado. Puedes ver las tasas de apertura, clics, cancelación de suscripción, entrega y rebotes para tu correo electrónico.

![Detailed email performance metrics panel](/images/automations/Capture_d_e_cran__le_2022-04-25_a__14.58.34.png)

¡Los engranajes están ahora en movimiento y la automatización está activa! Puedes ajustarla según tus necesidades.

## Duplicar y editar un flujo de automatización

Las automatizaciones existentes deben duplicarse para ser editadas.

Así es como proceder:

1. Haz clic en la flecha hacia abajo en la parte superior derecha

![Automation menu showing rename, delete and duplicate options](/images/automations/mceclip2.png)

2. Usa este menú para Renombrar, Eliminar o Duplicar la automatización

Si eliges duplicarla, tu automatización se recreará como una copia que puedes editar.

## Solución de problemas

**La automatización no inicia**

- Verifica que el botón de alternancia de automatización esté configurado en ENCENDIDO
- Verifica que las condiciones de activación estén configuradas correctamente
- Asegúrate de que la lista conectada tenga suscriptores activos

**No se puede editar la automatización activa**

- Duplica la automatización para crear una copia editable
- Desactiva la automatización original antes de activar la nueva versión
- Prueba los cambios con un segmento pequeño antes del despliegue completo

**Las estadísticas no se muestran**

- Permite 24-48 horas para que se llenen las estadísticas iniciales
- Verifica que el período seleccionado coincida con cuando se enviaron los correos electrónicos
- Verifica que los píxeles de seguimiento no estén bloqueados por los clientes de correo electrónico

**Problemas con el diseñador de correos electrónicos**

- Limpia la caché del navegador si el diseñador no se carga correctamente
- Usa Chrome o Firefox para mejor compatibilidad
- Guarda tu trabajo frecuentemente para evitar perder cambios

**Errores de validación del flujo de trabajo**

- Asegúrate de que todos los bloques de contenido del correo electrónico estén completados
- Verifica que todas las ramas tengan puntos finales definidos
- Verifica que los campos requeridos en las condiciones estén llenos

## Artículos relacionados

- [Crear un correo electrónico de bienvenida automatizado](/es/docs/automations/creating-an-automated-welcome-email) - Tu primera automatización
- [Crear una automatización con condiciones de ramificación](/es/docs/automations/creating-an-automation-with-branching-conditions) - Flujos de trabajo avanzados
- [Crear una automatización en bucle](/es/docs/automations/creating-a-looping-automation) - Campañas recurrentes
- [Primeros pasos](/es/docs/first-steps) - Guía de inicio
- [Crear y gestionar una lista de contactos](/es/docs/audience/managing-contact-lists) - Destinatarios de automatización