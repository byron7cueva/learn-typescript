# Adapter

## Propósito

* Es un patrón de diseño estrctural que permite la colaboración entre objetos con interfaces incompatibles.
* Se trata de un objeto especial que convierte la interfaz de un objeto, de forma que otro objeto pueda comprenderla.
* Permite crear una clase intermedia que sirva como traductora entre tu  código y una clase heredada, una clase de un tercero o cualquier otra  clase con una interfaz extraña.

## Funcionamiento

1. El adaptador obtiene una interfaz compatible con uno de los objetos existentes.

2. Utilizando esta interfaz, el objeto existente puede invocar con seguridad los métodos del adaptador.

3. Al recibir una llamada, el adaptador pasa la solicitud al segundo objeto, pero en un formato y orden que ese segundo objeto espera.

En ocasiones se puede incluso crear un adaptador de dos direcciones que pueda convertir las llamadas en ambos sentidos.

## Estructura

### Adaptador de objetos

Esta implementación utiliza el principio de composición de objetos: el  adaptador implementa la interfaz de un objeto y envuelve el otro. Puede  implementarse en todos los lenguajes de programación populares.

#### Clase cliente

* Contiene la lógica de negocio existente del programa.
* El código cliente no se acopla a la clase adaptadora concreta siempre y cuando funcione con la clase adaptadora a través de la interfaz con el cliente. Gracias a esto, puedes introducir nuevos tipos de adaptadores en el programa sin descomponer el código cliente existente. Esto puede resultar útil cuando la interfaz de la clase de servicio se  cambia o sustituye, ya que puedes crear una nueva clase adaptadora sin  cambiar el código cliente.

#### Interfaz con el cliente

* Describe un protocolo que otras clases deben seguir para poder colaborar con el código del cliente.

#### Servicio

* Es una clase útil (normalmente una tercera parte o heredada).
* El cliente no puede utilizar directamente esta clase porque tiene una interfaz incompatible.

#### Clase adaptadora

* Es capaz de trabajar tanto con la clase cliente como con la clase de servicio.
* Implementa la interfaz con el cliente, mientras envuelve el objeto de la clase de servicio.
* La clase adaptadora recibe llamadas del cliente a través de la interfaz adaptadora y las traduce en llamadas al objeto envuelto de la clase de servicio, pero en un formato que pueda comprender.

### Clase adaptadora

Esta implementación utiliza la herencia, porque la clase adaptadora  hereda interfaces de ambos objetos al mismo tiempo. Ten en cuenta que  esta opción sólo puede implementarse en lenguajes de programación que  soporten la herencia múltiple, como C++.

#### Clase adaptadora

* No necesita envolver objetos porque hereda comportamientos tanto de la clase cliente como de la clase de servicio.
* La adaptación tiene lugar dentro de los métodos sobrescritos.
* La clase  adaptadora resultante puede utilizarse en lugar de una clase cliente  existente.

## Aplicabilidad

* Utiliza cuando quieras usar una clase existente, pero cuya interfaz no sea compatible con el resto del código.
* Utiliza cuando quieras reutilizar varias subclases existentes que carezcan de  alguna funcionalidad común que no pueda añadirse a la superclase.