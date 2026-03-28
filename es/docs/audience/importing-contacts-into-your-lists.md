---
source: 'https://support.cakemail.com/hc/en-us/articles/360057252894-Importing-contacts'
---

# Importar contactos a tus listas

<iframe src="//www.youtube-nocookie.com/embed/km1j1Xwi4Bs" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>

## Descripción

Puedes importar contactos desde un archivo CSV (Valores Separados por Comas) o agregarlos manualmente a tu lista de contactos. Como siempre, cumplimos con una política anti-spam estricta, lo que significa que debes tener el consentimiento de los contactos antes de agregarlos a tu lista de contactos.

## Por qué es importante

Nuestra aplicación te permite enviar correos electrónicos a una lista que has adquirido a través de tu arduo trabajo y prospección. Puedes usar esta función para importar fácilmente la valiosa lista que has compilado a nuestro sistema. En este artículo cubriremos cómo agregar contactos a tus listas.

## Instrucciones paso a paso

### Importar un archivo CSV

<Stepper>

1. **Convertir Excel a CSV** (si es necesario):
   - Para importar una lista de contactos de Excel a nuestro sistema, primero debes convertirla usando el software instalado en tu computadora
   - Abre el archivo de lista de contactos con Excel
   - Haz clic en **Archivo** y luego en **Guardar como**
   - Elige un nombre para tu lista de contactos. En la lista **Tipo de archivo**, elige **CSV (Delimitado por comas)**
   - Haz clic en **Guardar**

1. Ve a **Contactos**
![Navigate to Contacts tab](/images/audience/6179a82c226f1.jpeg)
Haz clic en el botón circular con el **signo +**
![Contact add button](/images/audience/6179a82c7aea0.jpeg)

1. Si tienes múltiples listas, selecciona la lista apropiada para importar
Sigue el asistente de importación para mapear los campos de tu CSV a los atributos de contacto.

1. Selecciona Importar contactos
![Contact list selection](/images/audience/6179a82cd61ab.jpeg)

1. Selecciona Importar archivo CSV

1. Haz clic en Examinar para buscar un archivo para cargar y encontrar el archivo de lista de contactos en tu computadora
![CSV file import option](/images/audience/6179a82d3b4fa.png)

1. Una vez que el archivo esté seleccionado, puedes desmarcar los campos que deseas eliminar de tu importación de lista
Si los campos personalizados no están ya en tu lista, puedes crear nuevos campos en este paso y copiar sus nombres de las columnas de encabezado de tu CSV. Haz clic en Continuar.
![Contact import option](/images/audience/6179a82de54fd.jpeg)

1. Haz clic en Continuar para confirmar que tienes consentimiento para agregar esta lista
![File browser dialogue](/images/audience/6179a82e7f2f0.jpeg)
Serás alertado una vez que el proceso esté completo. Una vez terminado, podrás ver tus nuevos contactos bajo la lista de suscriptores activos. Por ahora, los campos que incluyen fechas/horas deben agregarse en formato yyyy-mm-dd hh:mm:ss, de lo contrario el campo será reemplazado con N/A.
![Field mapping interface](/images/audience/6179a82f2d3ec.jpeg)
![Consent confirmation dialogue](/images/audience/6179a82fc8157.png)
</Stepper>

### Importar un contacto individual

![Individual contact import process](/images/audience/import_a_contact.gif)

<Stepper>

1. Ve a Contactos

1. Haz clic en el botón circular con el signo +

1. Haz clic en Agregar un contacto
![Navigate to Contacts](/images/audience/6179a83108dc6.jpeg)

1. Completa la información del contacto a continuación y haz clic en Guardar. Todos los atributos que estén en la lista estarán disponibles para completar
![Single contact add option](/images/audience/6179a8316584b.png)

1. Alternativamente, haz clic en Guardar y agregar otro, para importar un nuevo contacto
</Stepper>

## Consejos y recomendaciones
No queremos exagerar, pero esto no se puede enfatizar lo suficiente; tus destinatarios deben haberse suscrito a tu lista en línea y haber elegido recibir uno o más tipos de correos electrónicos. Con todo en orden, ¡es hora de comenzar a enviar correos electrónicos a tus contactos!

#### Consejo de Excel #1
Algunos programas importarán tus datos y combinarán campos como nombre y apellido en la misma columna. Si esto te sucede, asegúrate de seleccionar los separadores "espacio" y "coma" en las opciones proporcionadas al abrir un CSV desde una fuente externa. Esto separará tus datos en diferentes columnas en lugar de agrupar toda la información en un solo campo.

#### Consejo de Excel #2
Reemplazar (Ctrl + h para usuarios de Windows, CMD+SHIFT+H para usuarios de Mac). A veces las importaciones pueden atascarse porque tus archivos están llenos de puntuación no deseada. Piensa en Reemplazar como buscar y destruir caracteres extraviados. En el menú Editar, selecciona Reemplazar o presiona Ctrl + h en tu teclado (CMD+SHIFT+H para Mac), en el campo "Buscar:" escribe lo que quieres reemplazar masivamente, deja el campo "Reemplazar con" vacío y haz clic en "Reemplazar todo".

#### Consejo de Excel #3
Guarda tu archivo CSV en formato Unicode UTF-8, ya que este es el predeterminado para la mayoría de las bases de datos en línea.

## Notas importantes
- **Cumplimiento anti-spam**: Debes tener consentimiento explícito de todos los contactos antes de agregarlos a tu lista
- **Calidad de datos**: Asegúrate de que tu archivo CSV esté correctamente formateado con direcciones de correo electrónico correctas
- **Mapeo de campos**: Asegúrate de mapear correctamente las columnas de tu CSV a los campos de contacto apropiados durante la importación

## Solución de problemas

**La importación CSV falla o muestra errores**

- Asegúrate de que el archivo esté guardado como CSV, no en formato Excel
- Verifica si hay caracteres especiales o saltos de línea en los datos
- Confirma que las direcciones de correo electrónico estén correctamente formateadas
- Elimina cualquier fila o columna en blanco del archivo

**La importación se queda atascada en el procesamiento**

- Los archivos grandes pueden tardar más de 30 minutos en procesarse
- Verifica si el tamaño del archivo excede el límite de 10 MB
- Intenta dividir las importaciones grandes en lotes más pequeños
- Asegúrate de tener una conexión a internet estable durante la carga

**Los contactos no aparecen después de la importación**

- Verifica si los correos electrónicos ya existen como cancelados
- Confirma que la importación se completó exitosamente
- Busca contactos en la lista de supresión
- Revisa el reporte de importación para contactos omitidos

**Problemas de mapeo de campos**

- Asegúrate de que los encabezados CSV coincidan con los nombres de atributos
- Verifica si hay espacios extra en los encabezados de columnas
- Crea atributos faltantes antes de la importación
- Usa encabezados simples sin caracteres especiales

**Se crean contactos duplicados**

- Las direcciones de correo electrónico distinguen entre mayúsculas y minúsculas
- Verifica si hay espacios al final en la columna de correo electrónico
- Asegúrate de un formato consistente entre importaciones
- Revisa los contactos existentes antes de importar

**Los campos de fecha no se importan correctamente**

- Usa el formato YYYY-MM-DD para fechas
- Verifica que la configuración regional no esté en conflicto
- Asegúrate de que las columnas de fecha estén correctamente mapeadas
- Confirma que las fechas sean válidas (sin fechas de nacimiento futuras)

## Artículos relacionados

- [Crear y administrar una lista de contactos](/es/docs/audience/managing-contact-lists) - Crear listas para importaciones
- [Agregar atributos a tu lista](/es/docs/audience/adding-attributes-to-your-list) - Importar campos personalizados
- [Crear y usar etiquetas](/es/docs/audience/using-tags-to-track-engagement) - Etiquetar contactos importados
- [Configurar un correo de confirmación de suscripción](/es/docs/audience-building/subscription-confirmation-email) - Confirmar contactos importados
- [Primeros pasos](/es/docs/first-steps) - Guía de primeros pasos