# Bridge

## Propósito

* Es un patrón de diseño estructural que permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) que puede desarrollarse independientemente la una de la otra.
* Una de estas jerarquías (a menudo denominada Abstracción) obtendrá una  referencia a un objeto de la segunda jerarquía (Implementación). La  abstracción podrá delegar algunas (en ocasiones, la mayoría) de sus  llamadas al objeto de las implementaciones. Como todas las  implementaciones tendrán una interfaz común, serán intercambiables  dentro de la abstracción.
* La *Abstracción* (también llamada *interfaz*) es una capa  de control de alto nivel para una entidad. Esta capa no tiene que hacer  ningún trabajo real por su cuenta, sino que debe delegar el trabajo a la capa de *implementación* (también llamada *plataforma*).  No estamos hablando de las *interfaces* o las *clases abstractas* de un lenguaje de programación. Son cosas diferentes. Cuando hablamos de aplicación reales, la abstracción puede representarse por una interfaz gráfica de usuario (GUI), y la implementación puede  ser el código del sistema operativo subyacente (API) a la que la capa  GUI llama en respuesta a las interacciones del usuario.

## Estructura

### Abstracción

* Ofrece lógica de control de alto nivel.
* Depende de que el objeto de implementación haga el trabajo de bajo nivel.

### Implementación

* Declara la interfaz común a todas las implementaciones concretas.
* Una abstracción sólo se puede comunicar con un objeto de implementación a través de los métodos que se declaran aquí.
* La abstracción declara funcionalidades complejas que dependen de una  amplia variedad de operaciones primitivas declaradas por la  implementación.

### Implementaciones concretas

* Contiene código específico de plataforma.

### Abstracciones refinadas

* Proporcionana variantes de lógica de control

### Cliente

* Solo esta interasado en trabajar con la abstracción.
* El cliente tiene que vincular el objeto de la abstracción con uno de los objetos de la implementación.

## Aplicabilidad

* Utiliza cuando quieras dividir y organizar una clase monolítica que tenga muchas variantes de una sola funcionalidad (por ejemplo, si la clase puede  trabajar con diversos servidores de bases de datos).
* Utiliza cuando necesites extender una clase en varias dimensiones ortogonales (independientes).
* Utiliza cuando necesites poder cambiar implementaciones durante el tiempo de ejecución.
* El patrón Bridge es de especial utilidad a la hora de tratar con  aplicaciones multiplataforma, soportar varios tipos de servidores de  bases de datos, o trabajar con varios proveedores de API de un cierto  tipo (por ejemplo, plataformas en la nube, redes sociales, etc.).