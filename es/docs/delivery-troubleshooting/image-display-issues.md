---
source: "https://support.cakemail.com/hc/en-us/articles/360058152913-Understanding-image-display-in-emails"
---

# Problemas de visualización de imágenes

## Descripción

En el panorama actual del marketing por correo electrónico, las imágenes visuales son fundamentales para captar la atención de tu destinatario. En este artículo, te mostraremos:
- Cómo elegir el formato de imagen correcto para tus campañas
- Por qué las imágenes podrían no mostrarse, y cómo detectar la fuente de este problema

## Por qué es importante

La mayoría de los destinatarios solo navegan los correos electrónicos por unos segundos, por lo que si solo ven párrafo tras párrafo de contenido, podrían simplemente ignorarlo. Debido a esto, es importante entender qué puede causar que tus imágenes no se muestren en tu correo electrónico.

En el lado más técnico de las cosas, específicamente para tus estadísticas, las aperturas se calculan cuando se muestran las imágenes, por lo que si las imágenes no se muestran, tus estadísticas serán inexactas.

## Formatos de imagen

### Formato JPEG
El formato de archivo JPEG es el más ampliamente usado en Internet. Este formato puede comprimirse muy fácilmente, permitiéndote enviar fotografías con un tamaño de archivo más pequeño, por lo que tu correo electrónico cargará más rápido. La compresión de imagen también puede causar una pérdida de calidad de imagen.

### Formato PNG
El formato PNG no se ve afectado por la compresión y puede soportar imágenes con fondos transparentes. El tamaño del archivo puede ser significativamente más grande que una imagen formato JPG.

## Problemas comunes y soluciones

### Las imágenes están bloqueadas
Es posible que el cliente de correo electrónico haya bloqueado la carga de imágenes; esto no cambiará hasta que el destinatario haga clic para mostrar siempre o te agregue a sus remitentes seguros, lista de contactos o libreta de direcciones. Asegúrate de hacer saber a tus suscriptores que hagan clic para permitir siempre la visualización de tu contenido o anímalos a agregar tu dirección de remitente para evitar este problema en el futuro.

### Correos electrónicos compuestos solo de imágenes
Incluye texto (no solo imágenes) en tu correo electrónico. Los correos electrónicos compuestos solo de imágenes no se abrirán correctamente y serán marcados como spam casi el 100% del tiempo. Según la ley anti-spam, todos los correos electrónicos deben contener alguna forma de texto (incluso si es un simple "hola"), pero debes apuntar a incluir más texto que imágenes.

### Problemas de URL
Asegúrate de usar URL absolutas. Las URL relativas son el equivalente de decir "calle abajo, lado izquierdo, camina unas casas más, no puedes perdértelo" cuando alguien te pide una dirección.

Las URL absolutas son el equivalente de decir "Calle Emily 31, Chicago, Illinois, Estados Unidos, América del Norte, Planeta Tierra" en su lugar. Para que todos vean las imágenes en tu correo electrónico, debes usar la URL absoluta (y las imágenes deben estar almacenadas en algún lugar en línea que sea accesible para todos, también).

**Ejemplos:**
- URL relativa: `/image.jpg`
- URL absoluta: `http://www.mydummyaccount.com/images/image.jpg`

### Imágenes de fondo
Las imágenes de fondo no se muestran en algunos clientes de correo electrónico: Siempre usa un color de fondo sólido como respaldo.

## Contenido relacionado

## Solución de problemas

**Las imágenes se muestran como enlaces rotos o X roja**

- Verifica que las URL de las imágenes sean absolutas, no relativas (deben incluir http:// o https://)
- Verifica si el servidor de hospedaje de imágenes es accesible y no está bloqueando solicitudes
- Asegúrate de que los archivos de imagen no hayan sido movidos o eliminados del servidor
- Prueba las URL de imagen directamente en un navegador para confirmar que funcionen

**Las imágenes se muestran en vista previa pero no en correos electrónicos enviados**

- Confirma que no estés usando rutas de archivos locales (C:\\ o file://)
- Verifica si tu hospedaje de imágenes requiere autenticación o tiene protección de hotlinking
- Confirma que las imágenes estén hospedadas en un servidor público, no localhost o red interna
- Asegúrate de que tu hospedaje no tenga límites de ancho de banda que bloqueen imágenes

**Las imágenes de fondo no se muestran**

- Usa un color sólido de respaldo ya que muchos clientes de correo electrónico no soportan imágenes de fondo
- Considera usar celdas de tabla con colores de fondo en su lugar
- Prueba en múltiples clientes de correo electrónico ya que el soporte varía ampliamente
- Usa CSS en línea para mejor compatibilidad con clientes

**Las imágenes son muy grandes y lentas para cargar**

- Comprime las imágenes antes de subirlas (apunta a menos de 100KB por imagen)
- Usa dimensiones apropiadas - no confíes en HTML para redimensionar
- Elige el formato correcto: JPEG para fotos, PNG para gráficos con transparencia
- Considera usar herramientas de optimización de imagen antes de subir

## Artículos relacionados

- [Usar el diseñador de correos electrónicos](/es/docs/campaign-creation/using-the-email-designer) - Agregar imágenes correctamente
- [Crear versiones de campaña móvil y escritorio](/es/docs/campaign-creation/creating-mobile-and-desktop-campaign-versions) - Imágenes responsivas
- [Probar tu campaña](/es/docs/campaign-creation/testing-your-campaign) - Probar visualización de imágenes
- [Subir contenido a tu biblioteca](/es/docs/campaign-creation/uploading-to-the-file-manager) - Hospedaje de imágenes
- [Agregar un video a una campaña](/es/docs/campaign-creation/adding-a-video-to-a-campaign) - Miniaturas de video