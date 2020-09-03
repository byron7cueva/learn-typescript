# Factory Method

## Propósito

* Es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras que permite a las subclases alterar el tipo de objeto que crearán.
* Las subcalses pueden alterar la clase de objetos devueltos por el método fábrica.
* Todos los productos deben seguir una misma interface. Los objetos devueltos por el método fábrica se denominan productos.
* El código cliente que utiliza el método fábrica no encuentra diferencia entre los productos devueltos por varias subclases y trata a todos los productos como la clase abstracta.
* El patrón Factory Method separa el código de construcción de producto  del código que hace uso del producto. Haciendo más fácil extender el código de construcción de producto de forma independiente al resto del  código.
* Para añadir un nuevo tipo de producto a la aplicación, sólo tendrás que crear una nueva subclase creadora y sobrescribir el Factory Method que contiene.
* 

## Estructura

### Producto

* Declara la interfaz que es comú a todos los objetos que puede producir la clase creadora y sus subclases.

### Productos concretos

* Son distintas implementaciones de la interfaz producto.

### Clase creadora

* Declara el método fábrica que devuelve nuevos objetos de producto, su retorno debe coincidir con la interface del Producto.
* Se la puede declarar como abstracta, para forzar a todas las subclases a implementars sus propias versiones del método.
* Como alternativa el método fábrica base puede devolver algun tipo de producto por defecto.
* La creación de producto no es la principal responsabilidad de la clase creadora.  Normalmente, esta clase cuenta con alguna lógica de negocios central relaionada con los productos. El patrón ayuda a desacoplar esta lógica de las clases concretas de producto.

### Creadores concretos

* Sobrescriben el Factory Method base, de modo que devuelvan un tipo diferente de producto.
* El método fábrica no tiene que crear nuevas instancias todo el tiempo. También puede devolver objetos existentes de una memoria caché, una agrupación de objetos, u otra fuente.

## Aplicabilidad

* Utiliza este patrón cuando no conozcas de antemano las dependencias y los tipos exactos de los objetos con los que deba funcionar tu código.
* Utiliza cuando quieras ofrecer a los usuarios de tu biblioteca o framework, una forma de extender sus componentes internos.
* Utiliza cuando quieras ahorrar recursos del sistema mediante la reutilización de objetos existentes en lugar de reconstruirlos cada vez.