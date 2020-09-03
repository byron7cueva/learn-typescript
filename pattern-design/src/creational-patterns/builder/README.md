# Builder

## Propósito

* Es un patron de diseño creacional que nos permite construir objetos complejos paso a paso.
* Nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.
* Este sugiere que saques el código de construcción del objeto de su propia clase y lo coloques dentro de objetos independientes llamados constructores.
* Este no permite a otros objetos acceder al producto mientras se construye.
* El patrón organiza la construcción de objetos en una serie de pasos, estos pasos se ejecuta en un objeto constructor. No necesitas invocar todos los pasos, puedes invocar sólo aquellos que sean necesarios para producir una configuración particular de un objeto.
* Puede ser que algunos pasos de la construcción necesiten una implementación diferente cuando tengamos que construir distintas representaciones del producto. En este caso, podemos crear varias clases constructoras distintas que implementen la misma serie de pasos de construcción, pero de forma diferente. Entonces podemos utilizar estos constructores en el proceso de construcción para producir distintos tipos de objetos.
* Los distintos constructores ejecutan la misma tarea de formas distintas.
* Sin embargo, esto sólo funcionaría si el código cliente que invoca los pasos de construcción es capaz de interactuar con los constructores mediante una interfaz común.
* El patrón Builder se puede aplicar cuando la construcción de varias representaciones de un producto requiera de pasos similares que sólo varían en los detalles.
* Podrás aplazar la ejecución de ciertos pasos sin descomponer el producto final. Puedes incluso invocar pasos de forma recursiva.
* No necesita que los productos tengan una interfaz común. Esto hace posible crear distintos productos utilizando el mismo proceso de construcción.

## Artefactos

### Interfaz Constructora

* Declara los pasos de construcción de producto que todos los tipos de objetos constructores tienen en común.
* Define todos los pasos de construcción posibles.

### Constructores Concretos

* Ofrecen distintas implementaciones de los pasos de construcción .
* Pueden crear productos que no siguen la interfaz común.
* Implementan los pasos para construir representaciones particulares del producto.
* No expone el producto incompleto mientras ejecuta los pasos de construcción. Esto evita que el código cliente extraiga un resultado incompleto.
* Deben implementar un método para extraer el resultado de la construcción. La razón por la que este método no se puede declarar dentro de la interfaz constructora es que varios constructores pueden construir productos sin una interfaz común. No obstante, si trabajas con productos de una única jerarquía, el método de extracción puede añadirse sin problemas a la interfaz base.

### Productos

* Son los objetos resultantes.
* Los productos construidos por distintos objetos constructores no tienen que pertenecer a la misma jerarquía de clases o interfaz.

### Clase directora

* Define el orden en el que se deben ejecutar los pasos de construcción, mientras que el constructor proporciona la implementación de dichos pasos. Por lo que puedes crear y reutilizar configuraciones específicas de los productos.
* La clase directora sabe qué pasos de construcción ejecutar para lograr un producto que funcione.
* La clase directora esconde por completo los detalles de la construcción del producto al código cliente. El cliente sólo necesita asociar un objeto constructor con una clase directora, utilizarla para iniciar la construcción, y obtener el resultado del objeto constructor.
* Guía el orden de la construcción.

### Cliente

* Debe asociar uno de los objetos constructores con la clase directora. Normalmente, se hace una sola vez mediante los parámetros del constructor de la clase directora, que utiliza el objeto constructor para el resto de la construcción. No obstante, existe una solución alternativa para cuando el cliente pasa el objeto constructor al método de producción de la clase directora. En este caso, puedes utilizar un constructor diferente cada vez que produzcas algo con la clase directora.
* Crea tanto el objeto constructor como el director. Antes de que empiece la construcción, el cliente debe pasar un objeto constructor al director. Normalmente, el cliente hace esto sólo una vez, mediante los parámetros del constructor del director. El director utiliza el objeto constructor para el resto de la construcción. Existe una manera alternativa, en la que el objeto constructor se pasa directamente al método de construcción del director.
* El resultado de la construcción tan solo se puede obtener directamente del director si todos los productos siguen la misma interfaz. De lo contrario, el cliente deberá extraer el resultado del constructor.