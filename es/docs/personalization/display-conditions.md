---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4406840228763-Personalizing-your-campaign-with-display-conditions
---

# Condiciones de visualización

## Descripción

Cualquier contenido personalizado en una campaña que cambie basándose en los datos que tiene sobre sus suscriptores se llama contenido de correo dinámico. Esto puede lograrse agregando atributos a la lista de correo y agrupando personas por características compartidas como ubicación, género y edad, por ejemplo, lo que puede afectar la visualización del contenido del correo para cada destinatario. En este artículo, nos enfocaremos específicamente en cómo configurar condiciones de visualización para sus bloques basándose en atributos del destinatario.

## Por qué es importante

El contenido de correo dinámico proporciona a los suscriptores una experiencia más personalizada. La tendencia hoy es que los usuarios comparten voluntariamente datos personales con las marcas a cambio de una experiencia de usuario altamente personalizada. Al adoptar este enfoque, puede mejorar el engagement de sus usuarios, construir relaciones duraderas con su audiencia, ahorrar tiempo y, por lo tanto, aumentar los ingresos.

## Instrucciones paso a paso

Agregar condiciones de visualización a su lista es tan fácil como seguir estos pasos:

<Stepper>

1. **Agregue un atributo a su lista de contactos**
Para más información sobre agregar atributos a su lista, vea nuestro artículo.
![Agregar atributo a la lista de contactos](/images/campaign-creation/6179a7af34501.jpeg)

1. **Seleccione la pestaña Campaigns**
![Seleccionar pestaña Campaigns](/images/campaign-creation/6179a7b011439.jpeg)

1. **Haga clic en Edit Email** en su menú de campaña (Alternativamente, puede comenzar creando una nueva campaña)
![Hacer clic en Edit Email en el menú de campaña](/images/campaign-creation/6179a7b073ff5.jpeg)

1. **Haga clic en Edit Email** en la pestaña de vista previa del correo para acceder al diseñador de correos
![Hacer clic en Edit Email en la pestaña de vista previa](/images/campaign-creation/6179a7b0d8aee.jpeg)

1. **Seleccione la sección del menú Rows** en el diseñador de correos
![Seleccionar sección del menú Rows](/images/campaign-creation/6179a7b14efde.jpeg)

1. **Arrastre una fila** al contenido del correo y selecciónela
![Arrastrar y seleccionar una fila](/images/campaign-creation/6179a7b19fc8a.jpeg)

1. **Seleccione Add Condition** en el menú de propiedades de fila
![Seleccionar Add Condition](/images/campaign-creation/6179a7b25ca49.jpeg)

1. Configure su condición de visualización en el menú que aparece.
![Configurar condición de visualización](/images/campaign-creation/6179a7b2c01ca.png)

1. Haga clic en Confirm cuando haya terminado la configuración.

1. Previsualice la condición de visualización seleccionando el ícono del ojo.
![Previsualizar condición de visualización con ícono del ojo](/images/campaign-creation/6179a7b33d9e2.jpeg)

1. Seleccione las condiciones de visualización de su fila del menú desplegable en modo Preview.
![Seleccionar condiciones de visualización de fila en vista previa](/images/campaign-creation/6179a7b39e724.jpeg)
</Stepper>

## ¡La condición de visualización ha sido configurada!

Se mostrará en el menú de propiedades de fila.

![Condición de visualización en propiedades de fila](/images/campaign-creation/6179a7b407d23.jpeg)

## Beneficios de las condiciones de visualización

- **Mejor engagement del usuario**: El contenido adaptado a las preferencias individuales aumenta la interacción
- **Mejores relaciones**: Las experiencias personalizadas construyen conexiones más fuertes con los suscriptores
- **Ahorro de tiempo**: La personalización automatizada reduce la creación manual de campañas
- **Aumento de ingresos**: El contenido más relevante conduce a tasas de conversión más altas
- **Experiencia mejorada**: Los suscriptores reciben contenido que les importa

## Casos de uso comunes

### Personalización geográfica
- Mostrar ofertas específicas de ubicación
- Mostrar información de eventos regionales
- Personalizar contenido por zona horaria

### Dirección demográfica
- Recomendaciones de productos apropiadas para la edad
- Mensajería específica de género
- Bloques de contenido basados en intereses

### Segmentación conductual
- Recomendaciones basadas en historial de compras
- Mensajería apropiada para el nivel de engagement
- Contenido de etapa del ciclo de vida del cliente

## Mejores prácticas

- **Comience simple**: Empiece con atributos básicos como ubicación o intereses
- **Pruebe exhaustivamente**: Previsualice campañas para diferentes valores de atributos
- **Proporcione respaldos**: Incluya contenido predeterminado para suscriptores sin atributos específicos
- **Monitoree el rendimiento**: Rastree el engagement a través de diferentes segmentos personalizados
- **Manténgalo relevante**: Solo muestre condiciones que agreguen valor para el destinatario

## Requisitos técnicos

- **Los atributos deben configurarse** en su lista de contactos primero
- **Los suscriptores necesitan datos** en campos de atributos relevantes
- **El contenido predeterminado** debe proporcionarse para valores de atributos vacíos
- **Las pruebas son esenciales** para asegurar la visualización correcta entre segmentos

## Solución de problemas

**Las condiciones de visualización no funcionan como se esperaba**

- Verifique que existan datos del suscriptor para los atributos que está usando
- Verifique si los valores de atributos coinciden exactamente con sus criterios de condición
- Pruebe con múltiples perfiles de suscriptores para identificar patrones
- Asegúrese de que las condiciones se apliquen a los bloques de contenido correctos

**El contenido se muestra para segmentos incorrectos**

- Revise la lógica de su condición (operadores AND vs OR)
- Verifique condiciones conflictivas en elementos anidados
- Verifique que los tipos de datos de atributos coincidan con los requisitos de condición
- Pruebe casos extremos como valores de atributos vacíos o nulos

**Problemas de rendimiento con condiciones complejas**

- Limite el número de condiciones por campaña
- Evite contenido condicional profundamente anidado
- Considere crear campañas separadas para segmentos muy diferentes
- Monitoree la velocidad de envío de campañas para retrasos

**Los suscriptores ven secciones en blanco**

- Siempre incluya contenido de respaldo para cada condición
- Verifique si faltan atributos requeridos para algunos suscriptores
- Verifique que todas las ramas de condición tengan contenido definido
- Pruebe la vista previa con suscriptores que no tengan datos de atributos

## Artículos relacionados

- [Usar contenido dinámico](/es/docs/personalization/using-dynamic-content) - Contenido condicional
- [Crear segmentos dinámicos](/es/docs/audience/creating-dynamic-segments) - Condiciones objetivo
- [Agregar etiquetas de combinación a una campaña](/es/docs/personalization/adding-merge-tags-to-a-campaign) - Etiquetas condicionales
- [Agregar atributos a su lista](/es/docs/audience/adding-attributes-to-your-list) - Campos de condición
- [Crear una automatización con condiciones de ramificación](/es/docs/automations/creating-an-automation-with-branching-conditions) - Flujos condicionales