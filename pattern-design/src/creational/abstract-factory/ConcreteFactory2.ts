import { AbstractFactory } from './AbstractFactory';
import { AbstractProductA } from './AbstractProductA';
import { AbstractProductB } from './AbstractProductB';
import { ConcreteProductA2 } from './ConcreteProductA2';
import { ConcreteProductB2 } from './ConcreteProductB2';

export class ConcreteFactory2 implements AbstractFactory {

  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}