# Abstract Factory

## Propósito

* Es un patron de diseño creacional que nos permite producir familias de objetos relacionados sin especificar sus clases concretas.
* Lo primero que sugiere el patrón es que declaremos de forma explícita interfaces para cada producto diferente de la familia de productos. Después podemos hacer que todas las variantes de los productos sigan esas interfaces.
* El siguiente paso consiste en declarar la Fábrica abstracta: una interfaz con una lista de métodos de creación para todos los productos que son parte de la familia de productos. Estos métodos deben devolver productos abstractos representados por las interfaces que extrajimos previamente.
* Para cada variante de una familia de productos, creamos una clase de fábrica independiente basada en la interfaz FábricaAbstracta. Una fábrica es una clase que devuelve productos de un tipo particular.
* El código cliente tiene que funcionar con fábricas y productos a través de sus respectivas interfaces abstractas. Esto nos permite cambiar el tipo de fábrica que pasamos al código cliente, así como la variante del producto que recibe el código cliente, sin descomponer el propio código cliente.
* Normalmente, la aplicación crea un objeto de fábrica concreto en la etapa de inicialización. Justo antes, la aplicación debe seleccionar el tipo de fábrica, dependiendo de la configuración o de los ajustes del entorno.