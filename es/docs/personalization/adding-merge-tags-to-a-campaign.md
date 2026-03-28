---
source: "https://support.cakemail.com/hc/en-us/articles/360058069693-Adding-merge-tags-to-a-campaign"
---

# Agregar etiquetas de combinación a una campaña

## Descripción

Las etiquetas de combinación se usan para insertar datos únicos del usuario, vinculados a un valor único, de su lista de correo en los correos. Por ejemplo, podría incluir los nombres de sus contactos en su correo usando la etiqueta de combinación *[FirstName]* en su contenido. También se conocen como cadenas de sustitución, campos de personalización o etiquetas de personalización. En resumen, cada vez que inserte una etiqueta de combinación en una campaña, será reemplazada por los datos almacenados en el campo.

## Campos predeterminados

Los siguientes campos predeterminados se crean automáticamente con todas las listas y no pueden modificarse o eliminarse:
- **ID de contacto**
- **Dirección de correo**
- **Fecha de suscripción**

Estos son los campos predeterminados disponibles de nuestro sistema. Esta información predeterminada proviene de información de cuenta o información que se incluye automáticamente en una lista de contactos.

En la configuración de lista, se pueden agregar atributos, y también puede recopilar información a través de su formulario vinculado a esa lista. Estos atributos serán visibles en el formulario generado después de agregarlos. Aprenda cómo agregar atributos a su lista.

## Por qué es importante

Incluir campos personalizados en sus campañas le ayudará a dirigirse a su audiencia más directa y efectivamente para mantener su atención. Tenga en cuenta que las personas quieren ser tratadas como individuos, razón por la cual la personalización es esencial para las prácticas de marketing. Como resultado, los correos que están personalizados tienen más probabilidades de ser abiertos y se les haga clic. En resumen, enviar correos personalizados al cliente correcto en el momento correcto fortalece las experiencias del cliente.

## Instrucciones paso a paso

### Agregar campos personalizados

<Stepper>

1. Seleccione Contacts del menú superior
   ![Navegue a la pestaña Contacts](/images/personalization/Contacts.png)

1. En Contacts, acceda a la lista que desea usar
   ![Seleccione su lista de contactos](/images/personalization/My_default_list.png)

1. Haga clic en la rueda dentada en el menú derecho
   ![Haga clic en la rueda dentada de configuración](/images/personalization/Cogwheel.png)

1. Ahora verá el menú de opciones Manage Contact Attributes
   Al registrarse, los campos predeterminados (ID de contacto, Correo, Fecha de registro) se crean automáticamente y se agregan aquí basándose en la información de registro de su cuenta. El sistema los usa para rastrear información del suscriptor y no pueden eliminarse o modificarse.

1. También hay un campo que se creó cuando se hizo la lista
   ![Vista de atributos de lista predeterminados](/images/personalization/Screen_Shot_2021-04-13_at_3.33.29_PM.png)

1. Cree un nuevo campo haciendo clic en Enter attribute name y seleccionando el Value Type

1. Haga clic en save
   (Los campos personalizados no pueden contener signos de puntuación, caracteres especiales o espacios.)
   ![Guardar el nuevo atributo](/images/personalization/Attributes.png)

1. Dependiendo del tipo de campo, puede nombrar y seleccionar un tipo de campo:
   - **Text** – Nombres y otra información de texto (El nombre del campo y el contenido del campo no pueden exceder 255 caracteres, incluyendo espacios), números de teléfono, etc.
   - **Number** – Número de ID, edad, etc.
   - **DateTime** – Cumpleaños, aniversario de bodas, etc.
</Stepper>

### Usar un campo personalizado en una campaña

Su campo personalizado puede usarse como contenido personalizado en su campaña una vez que se crea. Puede incluirse en la línea de asunto o en el contenido. Si desea agregar campos personalizados a su campaña, necesitará escribirlos manualmente.

**Por favor recuerde hacer coincidir la etiqueta exactamente con el nombre del campo.**

```"Hola [FirstName], ¡Aquí está tu actualización semanal!"```

se convertiría en:

```"Hola John, ¡Aquí está tu actualización semanal!"```

También puede usar la etiqueta [email], que tomará la dirección de correo del destinatario y la insertará en la campaña:

```"Este correo fue enviado a [email], como se solicitó."```
se convertiría en:
```"Este correo fue enviado a email@domain.com, como se solicitó."```

También puede usar campos de respaldo si no hay datos disponibles actualmente.

#### Información de campaña

La información para estas etiquetas proviene de la información de campaña que ingresó al crear su campaña.

Las siguientes etiquetas pueden usarse:

```[SUBJECT] "Hola, Este correo es sobre [SUBJECT]"```

#### Información del remitente

La información para estas etiquetas proviene de los detalles completados en la sección de cuenta.

```"Este correo fue enviado por [SENDER_NAME]" [SENDER_EMAIL]```

```"Para más información, por favor envíe un correo a [SENDER_EMAIL]"```

#### Información del cliente

La información para estas etiquetas proviene de los detalles completados al crear su cuenta. Para modificar la información, vaya a su pestaña Settings > Company Profile

Las siguientes etiquetas pueden usarse:

[CLIENTS.COMPANY_NAME]

[CLIENTS.ADDRESS]

Su dirección física debe aparecer en todos los correos enviados a través de un proveedor de servicios de marketing por correo para cumplir con CAN SPAM.

[CLIENTS.CITY]

[CLIENTS.PROVINCE]

[CLIENTS.POSTAL_CODE]

[CLIENTS.COUNTRY]

[CLIENTS.WEBSITE]

[CLIENTS.PHONE]

Estas etiquetas pueden usarse como parte del pie de página de su correo para proporcionar al destinatario información sobre quién les está enviando correos (esto es obligatorio como parte de nuestros Términos de Uso):

```"Este mensaje fue enviado desde [CLIENTS.COMPANY_NAME],[CLIENTS.ADDRESS]"```
que se leería como:
```"Este mensaje fue enviado desde Mi Empresa, 123 Michigan Avenue, Detroit, MI, USA"```

#### Información de lista

Agrega información de lista a la campaña. Para modificar, acceda a su lista y cambie los detalles.

Las siguientes etiquetas pueden usarse:

[LISTNAME]

```"Está recibiendo este correo porque es parte de nuestra lista [LISTNAME]"```

#### Acciones

Estas etiquetas permiten a los lectores compartir su campaña con otros, ver el correo en una ventana del navegador y usar varias opciones de suscripción y cancelación de suscripción. Estas etiquetas pueden agregarse como parte del encabezado o pie de página de su correo.

Las siguientes etiquetas pueden usarse:

[FORWARD]

Permite a un suscriptor reenviar la campaña a un amigo

[SUBSCRIBE]

Permite a alguien suscribirse a su lista – útil para correos reenviados

[UNSUBSCRIBE]

Permite a un suscriptor cancelar la suscripción de su lista

[GLOBAL_UNSUBSCRIBE]

Permite a un suscriptor cancelar la suscripción de todas las listas en su cuenta

[SHOWEMAIL]

Usado en un correo donde desea permitir a los suscriptores ver una versión HTML del correo en una ventana del navegador. Esto es a menudo útil para situaciones donde las imágenes podrían no mostrarse, o las personas podrían recibir un correo de texto por defecto.

#### Fecha

Puede insertar una fecha dinámica en su campaña o línea de asunto usando el campo de combinación [DATE]. Así es como puede usarse.

[DATE|0|formato]

Para más información, consulte el artículo dedicado.

### Usar campos de combinación como parte de un enlace

Puede usar campos de combinación como parte de un enlace personalizado de Google Analytics que incorpora información del usuario. De esta manera, su departamento de marketing obtiene resultados de seguimiento altamente específicos.

Así es como:

- Tome su enlace de seguimiento de Google Analytics, por ejemplo: http://www.mydomain.com/?utmsource=newsletter&utmmedium=email&utm_campaign=septembernews
- Para rastrear tráfico basado en el nombre de la empresa, tomaría la etiqueta [CLIENTS.COMPANY_NAME] y la insertaría en su enlace: http://www.domain.com/?utmsource=**[CLIENTS.COMPANYNAME]**&utmmedium=email&utmcampaign=septembernews
- Cuando se envíe esta campaña, la URL se verá como: http://www.domain.com/?utmsource=MyCompanyName&utmmedium=email&utm_campaign=septembernews
- Si desea ver fuentes de tráfico del sitio por dirección de correo individual: http://www.domain.com/?utmsource=[email]&utmmedium=email&utm_campaign=septembernews
- Cuando se envíe esta campaña, la URL se verá como: http://www.domain.com/?utmsource=hello@myemail.com&utmmedium=email&utm_campaign=septembernews

Estos datos aparecerán en su cuenta de Google Analytics bajo "Traffic Sources."

## Solución de problemas

**Las etiquetas de combinación se muestran como texto plano en lugar de datos**

- Verifique que la sintaxis de la etiqueta de combinación coincida exactamente (sensible a mayúsculas)
- Verifique que los corchetes se usen correctamente [TagName]
- Asegúrese de que no haya espacios o caracteres especiales dentro de los corchetes
- Confirme que el atributo existe en su lista de contactos

**Algunos contactos muestran espacios en blanco en lugar de datos personalizados**

- Verifique si esos contactos tienen datos en el campo especificado
- Agregue valores de respaldo para manejar campos vacíos
- Verifique que los datos se importaron correctamente para todos los contactos
- Revise si ciertos caracteres en los datos están causando problemas

**Las etiquetas de combinación no funcionan en líneas de asunto**

- Confirme que su plan soporta etiquetas de combinación en líneas de asunto
- Use la misma sintaxis exacta que en el cuerpo del correo
- Pruebe con vista previa antes de enviar a toda la lista
- Verifique si los caracteres especiales en los datos afectan la visualización de la línea de asunto

**Los atributos personalizados no aparecen como etiquetas de combinación**

- Asegúrese de que los atributos se guarden después de la creación
- Verifique que los nombres de atributos no contengan espacios o caracteres especiales
- Verifique que esté usando el nombre del campo interno, no el nombre de visualización
- Actualice el editor de campaña después de agregar nuevos atributos

## Artículos relacionados

- [Usar etiquetas de combinación y respaldos](/es/docs/personalization/using-merge-tags-and-fallbacks) - Guía de etiquetas de combinación
- [Agregar atributos a su lista](/es/docs/audience/adding-attributes-to-your-list) - Crear campos de combinación
- [Agregar una etiqueta de combinación de fecha](/es/docs/personalization/adding-a-date-merge-tag) - Formato de fecha
- [Usar el diseñador de correos](/es/docs/campaign-creation/using-the-email-designer) - Insertar etiquetas de combinación
- [Usar contenido dinámico](/es/docs/personalization/using-dynamic-content) - Personalización avanzada