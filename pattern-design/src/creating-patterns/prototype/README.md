# Prototype

## Propósito

* Es un patrón de diseño creacional que permite la clonación de objetos,  incluso los complejos, sin acoplarse a sus clases específicas.
* Delega el proceso de clonación a los propios objetos que están siendo clonados.
* Declara una interfaz común para todos los objetos que soportan la clonación. Esta interfaz nos permite clonar un objeto sin acoplar el código a la clase de ese objeto. Normamente esta clase tiene un único método clonar.
* El método clonar crea un objeto a partir de una clase actual y lleva todos los valores de campo del viejo objeto al nuevo. Se puede incluso copiar campos privados, porque la mayoría de los  lenguajes de programación permite a los objetos acceder a campos  privados de otros objetos que pertenecen a la misma clase.
* Un objeto que soporta la clonación se denomina prototipo.

## Estructura

### Implementación básica

#### Interfaz Prototipo

* La interface protoripo declara los métodos de clonación. En la mayoría de los casos se trata de un único método clonar.

#### Clase prototipo concreto

* Implementa el método de clonación.
* Además de copiar la información del objeto original al clon, este método también puede gestionar algunos casos extremos del proceso de clonación, como por ejemplo: clonar objetos vinculados, deshacer dependencias recursivas, etc.
* Una subclase puede invocar el método de clonación padre antes de copiar sus propios valores de campo al objeto resultante.

#### Cliente

* Puede producir una copia de cualquier objeto que siga la interfaz del prototipo.

### Implementación del registro de prototipos

#### Registro de prototipos

* Ofrece una manera sencilla de acceder a prototipos de uso frecuente.
* Almacena un grupo de objetos prefabricados listos para ser copiados.
* El registro de prototipos más sencillo es una tabla *hash* con los pares `name → prototype`. Pero, si necesitas un criterio de búsqueda más preciso que un  simple nombre, puedes crear una versión mucho más robusta del registro.

## Aplicabilidad

* Utiliza cuando tu código no deba depender de las clases concretas de objetos que necesites copiar.
* Utiliza cuando quieras reducir la cantidad de subclases que solo se diferencian  en la forma en que inicializan sus respectivos objetos. Puede ser que  alguien haya creado estas subclases para poder crear objetos con una  configuración específica.