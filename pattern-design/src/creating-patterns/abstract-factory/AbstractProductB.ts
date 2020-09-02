import { AbstractProductA } from './AbstractProductA'

export interface AbstractProductB {
  usefulFuntionB(): string;

  /*
  Todos los productos pueden interactuar entre si, pero solo entre productos de la misma variante concreta
  */
  anotherUsefulFuntionB(collaborator: AbstractProductA): string;
}