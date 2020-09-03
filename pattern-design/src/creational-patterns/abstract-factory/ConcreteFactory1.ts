import { AbstractFactory } from './AbstractFactory';
import { AbstractProductA } from './AbstractProductA';
import { AbstractProductB } from './AbstractProductB';
import { ConcreteProductA1 } from './ConcreteProductA1';
import { ConcreteProductB1 } from './ConcreteProductB1';

/*
Las Fabricas concretas producen una familia de productos que pertenecen a una única variante.
La fabrica garantiza que los producots resultantes sean compatibles.
Las firmas de los métodos de fabricas concretas devuelven un producto abstracto mientras que dentro
del método se instancia un producto concreto.
Cada fabrica concreta tiene una variante de producto correspondiente y todos sus productos
serán compatibles.
*/

export class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}