# Decorator

## Propósito

* Es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales (wrapper) que contienen estas funcionalidades.
* Un *wrapper* es un objeto que puede vincularse con un objeto *objetivo*. El wrapper contiene el mismo grupo de métodos que el objetivo y le delega todas las solicitudes que recibe. No obstante, el wrapper puede  alterar el resultado haciendo algo antes o después de pasar la solicitud al objetivo.
* Utilizando decoradores puedes envolver objetos innumerables veces, ya  que los objetos objetivo y los decoradores siguen la misma interfaz. El  objeto resultante obtendrá un comportamiento de apilado de todos los *wrappers*.

## Estrcutura

### Componente

* Declara la interfaz común tanto para wrappers como para objetos envueltos.

### Componente concreto

* Es una clase de objetos envueltos.
* Define el comportamiento básico, que los decoradores pueden alterar.

### Decorador base

* Tiene un campo para referenciar un objeto envuelto. El tipo del campo debe declararse como interfaz del componente para que pueda contener tanto los componentes concretos como los decoradores.
* La clase decoradora base delega todas las operaciones al objeto envuelto.

### Decoradores concretos

* Definen funcionalidades adicionales que se pueden añadir dinámicamente a los componentes.
* Los decoradores concretos sobrescriben métodos de la clase decoradora  base y ejecutan su comportamiento, ya sea antes o después de invocar al  método padre.

### Cliente

* Puede envolver componentes en varias capas de decoradores, siempre y  cuando trabajen con todos los objetos a través de la interfaz del  componente.

## Aplicabilidad

* Utiliza cuando necesites asignar funcionalidades adicionales a objetos durante  el tiempo de ejecución sin descomponer el código que utiliza esos  objetos.
* Utiliza cuando resulte extraño o no sea posible extender el comportamiento de un objeto utilizando la herencia.