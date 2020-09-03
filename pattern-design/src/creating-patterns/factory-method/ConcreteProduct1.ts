import { Product } from './Product';

/**
 * Producto Concreto
 * Provee varias implementaciones de la interfaz del producto
 */
export class ConcreteProduct1 implements Product {
  operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}