import { Creator } from './Creator';
import { ConcreteProduct1 } from './ConcreteProduct1';
import { Product } from './Product';

/**
 * Sobrescribe el factory method cambiando el tipo de producto
 */
export class ConcreteCreator1 extends Creator {

  /**
   * La firma del método retorna la interfaz del producto, pero desde el
   * método se retorna un producto concreto
   */
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }

}