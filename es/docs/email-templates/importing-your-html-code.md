---
source: >-
  https://support.cakemail.com/hc/en-us/articles/4406228554523-Importing-your-HTML-code
---

# Importar tu código HTML

## Descripción

Si quieres importar código HTML escrito fuera de nuestra herramienta, puedes pegarlo en nuestro editor con esta opción. El correo electrónico puede ser modificado usando un editor HTML.

## Por qué es importante

Puedes diseñar tu propia plantilla HTML e importarla al editor para darte más opciones sobre cómo se ven tus correos electrónicos. Una vez que hayas importado una plantilla personalizada, puedes modificarla y usarla en futuras campañas para mantener esa apariencia familiar que quieres para tu marca.

## Proceso paso a paso:

<Stepper>

1. **Selecciona la opción "Comenzar con tu propio código"** al crear una nueva campaña.

1. **Pega tu código** en la sección negra de la página.

1. **Haz clic en "Subir y editar"**
![](/images/email-templates/Paste_your_code.png)
</Stepper>

## Beneficios de la importación HTML

- **Control completo del diseño**: Usa tus propias plantillas HTML personalizadas
- **Consistencia de marca**: Mantén una apariencia familiar en todas las campañas
- **Características avanzadas**: Incluye CSS personalizado y elementos HTML avanzados
- **Plantillas profesionales**: Importa plantillas diseñadas profesionalmente
- **Reutilización del código**: Guarda y reutiliza plantillas personalizadas para futuras campañas

## Mejores prácticas

- **Prueba tu HTML** antes de importar para asegurar compatibilidad
- **Usa HTML limpio y válido** para mejores resultados
- **Incluye elementos de diseño responsivo** para compatibilidad móvil
- **Valida la compatibilidad CSS** con clientes de correo electrónico
- **Mantén tamaños de archivo razonables** para carga más rápida

## Después de la importación

Una vez que tu HTML esté importado:
- Puedes modificarlo usando el editor HTML
- Hacer ajustes necesarios
- Guardar como plantilla para uso futuro
- Probar en diferentes clientes de correo electrónico

## Solución de problemas

**Mi HTML se ve diferente después de la importación**

- Verifica si tu CSS está en línea - muchos clientes de correo electrónico no soportan hojas de estilo externas
- Confirma que no estés usando características no soportadas de HTML5 o CSS3
- Elimina JavaScript ya que no está soportado en correos electrónicos
- Prueba con una herramienta de CSS en línea antes de importar

**El botón de importar está deshabilitado o no funciona**

- Asegúrate de que tu código HTML no esté vacío
- Verifica etiquetas HTML no cerradas que podrían romper el analizador
- Confirma que el código no exceda los límites de tamaño (típicamente 100KB)
- Intenta eliminar caracteres especiales o codificación no estándar

**Las imágenes están rotas después de la importación**

- Usa URL absolutas para todas las imágenes (https://... no /images/...)
- Asegúrate de que el servidor de hospedaje de imágenes permita hotlinking
- Verifica que las URL de imágenes no requieran autenticación
- Confirma que las imágenes estén en formatos compatibles con web (JPG, PNG, GIF)

**El diseño responsivo no funciona**

- Confirma que las consultas de medios estén formateadas apropiadamente
- Verifica si el cliente de correo electrónico soporta consultas de medios
- Usa diseños basados en tablas como respaldo
- Prueba en dispositivos reales, no solo en modo responsivo del navegador

## Artículos relacionados

- [Usar el diseñador de correos electrónicos](/es/docs/campaign-creation/using-the-email-designer) - Modo de edición HTML
- [Agregar enlaces de anclaje](/es/docs/campaign-creation/adding-anchor-links-to-the-email-content-with-html) - Técnicas HTML
- [Guardar campañas como plantillas](/es/docs/email-templates/saving-campaigns-as-templates) - Guardar plantillas HTML
- [Trabajar con plantillas inteligentes](/es/docs/email-templates/working-with-smart-templates) - Alternativa al HTML
- [Probar tu campaña](/es/docs/campaign-creation/testing-your-campaign) - Probar renderizado HTML