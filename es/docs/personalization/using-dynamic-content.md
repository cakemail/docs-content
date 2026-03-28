---
source: 'https://support.cakemail.com/hc/en-us/articles/4403130193819-Dynamic-Content'
---

# Usar contenido dinámico

## Descripción

Primero: Para usar correctamente la característica de contenido dinámico, necesitará estar cómodo con HTML, trabajar en modo 'código fuente' en el editor HTML y escribir algo de código en el camino.

## Por qué es importante

El contenido dinámico es una herramienta de personalización poderosa que le permite entregar mensajes altamente dirigidos en una sola campaña de correo. Al crear bloques de contenido condicional que cambian basándose en datos del suscriptor, comportamiento o preferencias, puede aumentar significativamente las tasas de engagement y conversiones. Esta característica avanzada permite segmentación sofisticada sin crear múltiples campañas separadas, ahorrando tiempo mientras entrega contenido más relevante. Es particularmente valioso para recomendaciones de productos, ofertas basadas en ubicación y activadores conductuales que requieren diferentes mensajes para diferentes segmentos de audiencia.

## Instrucciones paso a paso

Todo el contenido dinámico se inserta en correos agregando código entre [corchetes]. Su contenido dinámico puede formatearse con HTML, pero todas las instrucciones para contenido dinámico deben estar contenidas en corchetes como estos para funcionar correctamente: [ ]

Esta muestra rápida le dará una idea:
```html
Esto permanecerá aquí exactamente como está escrito.
[El contenido dinámico va aquí]

Esto permanecerá aquí exactamente como está escrito, también.
```

Una expresión básica de contenido dinámico típicamente se configura de la siguiente manera:

```
[IF variable operador constante]
&lt;Código HTML para mostrar el resultado&gt;
[ELSEIF variable operador constante]
&lt;Código HTML para mostrar el resultado alternativo&gt;
[ELSE]
&lt;Código HTML para mostrar cuando ningún resultado coincide&gt;
[ENDIF]
```

Esta documentación rápida describirá las reglas para variables, operadores, constantes y expresiones, lo que le ayudará a comenzar a escribir las suyas. El contenido dinámico soporta una serie de tipos de datos diferentes, lo que significa que hay varias formas en que puede crear expresiones para variables que deciden qué contenido se mostrará.

### Tipos de datos soportados

El contenido dinámico soporta una serie de tipos de datos diferentes, lo que significa que hay varias formas en que puede crear expresiones para variables que deciden qué contenido se mostrará.

#### Los tipos de datos soportados son:

- boolean – TRUE o FALSE
- integer – Cualquier número entero que va desde -8388608 hasta 8388608
- string – Una cadena alfanumérica hasta un máximo de 255 caracteres
- date – Fecha con el formato "YYYY-MM-DD HH-MM-SS"
Los tiempos deben escribirse en reloj de 24 horas (así que 18:30 en lugar de 6:30 PM)

#### Variables

Las variables son los criterios en los que basa su contenido. Esto puede incluir campos de lista como firstname, lastname, o cualquier otro campo de datos para el que sus suscriptores hayan enviado contenido. Esto también puede incluir actividad de campaña, permitiéndole enviar contenido específico solo a aquellos que hicieron clic en un enlace o abrieron una campaña de correo anterior.

#### Campos de lista

Los campos de lista pueden usarse como criterios. El valor de estos campos típicamente cambia con cada suscriptor de lista. Las variables están rodeadas por el carácter de acento grave ( ` )

Los campos de lista pueden ser de cualquier tipo de datos entero, cadena o fecha/hora.

#### Actividad de campaña anterior

También podemos referirnos a la acción que tomó un suscriptor para una campaña de correo anterior incluyendo abrir el mensaje, o hacer clic en cualquier enlace en el correo mismo. Para referirse a una campaña específica, necesitará encontrar el ID de envío y referirse a él usando MAILING(id), donde id es una referencia al número de campaña. Para referirse a un enlace específico, necesitará encontrar el ID del enlace y referirse a él usando LINK(id), donde id es una referencia al número del enlace.

Ejemplo: MAILING(43243) LINK(3245364)

Una campaña de correo tiene dos estados diferentes: CLICKED y OPENED Un enlace puede ser: CLICKED

### Cómo encontrar un id de campaña de correo en su sitio con marca.

#### Seleccione la pestaña Campaigns.
#### Encuentre la campaña específica a la que desea referirse.
#### Vea las estadísticas para esa campaña.
El ID de envío se incluirá en la URL que se muestra en la barra de direcciones de su navegador. Use solo el número de 6 o 7 dígitos que aparece al final de la URL: http://mail.youraccountname.com/ui/mailings/stats/560416

### Cómo encontrar un id de enlace en su sitio con marca.

#### Seleccione la pestaña Campaigns.
#### Encuentre la campaña específica a la que desea referirse.
#### Vea las estadísticas para esa campaña.
#### Acceda al informe de clics para la campaña.
#### Vea las estadísticas detalladas para el enlace que desea usar como variable.
El ID del enlace se incluirá en la URL que se muestra en la barra de direcciones de su navegador. Use solo el número de 7 u 8 dígitos que aparece después del texto "link=": http://mail.youraccount.com/ui/mailings/stats/560416?page=logs&link=7224929

### Operadores

Los siguientes operadores son soportados: Para campos de lista que son cadenas de texto

- LIKE – Coincide
- NOT LIKE – No coincide

Para campos de lista que son enteros o datetime
- = – Igual a
- != – No igual a
- &lt; – Menor que
- &lt;= – Menor que o igual a
- &gt; – Mayor que
- &gt;= – Mayor que o igual a

Para actividad de campaña (enlaces o envíos)
- IS
- IS NOT

Para expresiones
- AND
- OR

#### Constantes

Las constantes deben estar rodeadas por comillas dobles ' " ' si son tipos de datos de cadena de texto, datetime o entero.

Ejemplos:

"NY"
"2010-08-02 10:00:00"
"5"

#### Expresiones

El contenido dinámico soporta expresiones booleanas (TRUE / FALSE). Las expresiones pueden crearse combinando una variable, un operador y una constante.

Ejemplo:

`email` LIKE "%hotmail%"
(su dirección de correo contiene el texto "hotmail")

Ejemplo:

`id` > "1000"
(el ID de lista es mayor que 1000)

Ejemplo:

MAILING(34342) IS OPENED
(el suscriptor abrió la campaña #34342)

La variable y la constante deben ser del mismo tipo de datos.

Las expresiones pueden combinarse para convertirse en expresiones más grandes y complejas usando paréntesis.

Ejemplo:

(`email` LIKE "%hotmail%") AND (MAILING(34342) IS OPENED)
(su dirección de correo contiene el texto "hotmail" Y abrieron la campaña #34342)

### Estructuras de control

Una estructura de control da la declaración inicial para la expresión, y puede anidarse para expresiones más complejas.

#### IF

[IF expresion]
Código HTML para mostrar
Muestra el código HTML si la expresión es TRUE

#### ELSEIF

[ELSEIF expresion]
Código HTML para mostrar
Sigue a una declaración [IF]. Muestra el código HTML especificado si la expresión [IF] anterior es FALSE pero la expresión [ELSEIF] es TRUE. Puede haber múltiples declaraciones [ELSEIF].

#### ELSE

[ELSE]
Código HTML para mostrar
Muestra el código HTML si las expresiones [IF] y [ELSEIF] anteriores (si las hay) son FALSE.

#### ENDIF

[ENDIF]
Cierra una declaración [IF].

### Funciones

Las siguientes funciones son soportadas: MOD

#### MOD(N,M)

Esta es una operación Modulo. Devuelve el resto de N dividido por M.

Ejemplo:
```
[IF MOD(`id`,10) = 5]
<p>¡Eres un ganador!</p>
[ELSE]
<p>¡Lo siento! ¡Inténtalo de nuevo!</p>
[ENDIF]
```

## Solución de problemas

**El contenido dinámico se muestra como texto plano/código**

- Asegúrese de que todo el contenido dinámico esté dentro de corchetes []
- Verifique que esté editando en modo HTML/código fuente
- Verifique que todas las declaraciones IF tengan un ENDIF correspondiente
- Busque corchetes faltantes o desemparejados

**Las condiciones no se evalúan correctamente**

- Confirme que los nombres de variables coincidan exactamente con los nombres de campos (sensible a mayúsculas)
- Use acentos graves (`) alrededor de nombres de variables
- Verifique que los tipos de datos coincidan (no compare texto con números)
- Pruebe con datos de suscriptor conocidos para depurar la lógica

**Los bloques ELSEIF y ELSE no funcionan**

- Asegúrese del anidamiento y orden correcto: IF, ELSEIF, ELSE, ENDIF
- Verifique que cada bloque contenga HTML válido
- Verifique que no haya errores de sintaxis en condiciones anteriores
- Pruebe cada rama de condición por separado

**Fallan las expresiones complejas**

- Comience con condiciones simples y construya complejidad gradualmente
- Use paréntesis para agrupar expresiones booleanas complejas
- Verifique que todos los operadores sean válidos para los tipos de datos usados
- Verifique el espaciado correcto alrededor de operadores

## Artículos relacionados

- [Condiciones de visualización](/es/docs/personalization/display-conditions) - Visualización condicional
- [Agregar etiquetas de combinación a una campaña](/es/docs/personalization/adding-merge-tags-to-a-campaign) - Campos dinámicos
- [Agregar feeds RSS](/es/docs/campaign-creation/adding-rss-feeds) - RSS dinámico
- [Crear segmentos dinámicos](/es/docs/audience/creating-dynamic-segments) - Segmentos dinámicos
- [Crear contenido con IA](/es/docs/ai/creating-content-with-ai) - Contenido de IA dinámico