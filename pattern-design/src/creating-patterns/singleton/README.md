# Singleton

## Propósito

* Es un patrón de diseño creacional que nos permite asegurarnos que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia, también evita que otro código sobreescriba esa instancia.

## Estructura

* Hacer privado el constructor por defecto para evitar que otros objetos utilicen el operador `new` con la clase Singleton.
* Crear un método de creación estático que actúe como constructor. Tras  bambalinas, este método invoca al constructor privado para crear un  objeto y lo guarda en un campo estático. Las siguientes llamadas a este  método devuelven el objeto almacenado en caché.
* Si tu código tiene acceso a la clase Singleton, podrá invocar su método  estático. De esta manera, cada vez que se invoque este método, siempre  se devolverá el mismo objeto.

## Aplicabilidad

* Utiliza cuando una clase de tu programa tan solo deba tener una instancia  disponible para todos los clientes; por ejemplo, un único objeto de base de datos compartido por distintas partes del programa.
* Utiliza cuando necesites un control más estricto de las variables globales.

## Desventajas.

* Vulnera el *Principio de responsabilidad única*. El patrón resuelve dos problemas al mismo tiempo.
* El patrón requiere de un tratamiento especial en un entorno con  múltiples hilos de ejecución, para que varios hilos no creen un objeto  Singleton varias veces.
* Puede resultar complicado realizar la prueba unitaria del código cliente del Singleton porque muchos *frameworks* de prueba dependen de la herencia a la hora de crear objetos simulados (mock objects).
* Rompen la modularidad de tu código.
* Muchos desarrolladores consideran el patrón Singleton un antipatrón. Por este motivo, su uso está en declive en el código TypeScript