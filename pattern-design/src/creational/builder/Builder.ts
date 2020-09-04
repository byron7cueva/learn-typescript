/*
La interfaz constructora especifica métodos para crear las distintas partes
de los objetos del producto.
*/

export interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}