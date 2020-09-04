/* 
El código clente funciona con fabricas y productos
únicamente a través de tipos abstractos.
El cliente invoca los métodos de creación de un objeto fabrica
en lugar de crearlos directamente llamando al constructor con new.
*/

import { AbstractFactory } from './AbstractFactory';

export function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFuntionB());
  console.log(productB.anotherUsefulFuntionB(productA));
}