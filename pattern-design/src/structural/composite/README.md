# Composite

## Propósito

* Es un patrón de diseño estructural que permite componer objetos en estructuras de árbol y trabjar con esas estructuras como si fueran objetos individuales.
* El patrón Composite te proporciona dos tipos de elementos básicos que  comparten una interfaz común: hojas simples y contenedores complejos. Un contenedor puede estar compuesto por hojas y por otros contenedores.  Esto te permite construir una estructura de objetos recursivos anidados  parecida a un árbol.

## Estrcutura

### Interfaz componente

* Describe operaciones que son comunes a elementos simples y complejos del arbol.

### Hoja

* Es un elemento básico de un árbol que no tiene subelementos.
* Normalmente, los componentes de la hoja acaban realizando la mayoría del trabajo real, ya que no tienen a nadie a quien delegarle el trabajo.

### El contenedor

* Tabién llamado compuesto, es un elemento que tiene subelementos: hojas o otros contenedores.
* Un contenedor no conoce las clases concretas de sus hijos. Funciona con todos los subelementos únicamente a través de la interfaz componente.
* Al recibir una solicitud, un contenedor delega el trabajo a sus subelementos, procesa los resultados intermedios y devuelve el resultado final al cliente.
* Debe tener métodos para añadir y eliminar elementos hijos dentro del contenedor.

### Cliente

* Funciona con todos los elementos a través de la interfaz componente.
* Como resultado, el cliente puede funcionar de la misma manera tanto con  elementos simples como complejos del árbol.

## Aplicabilidad

* Utiliza cuando tengas que implementar una estructura de objetos con forma de árbol.
* Utiliza cuando quieras que el código cliente trate elementos simples y complejos de la misma forma.