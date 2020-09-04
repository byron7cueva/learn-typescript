import { Builder } from './Builder';
import { Product1 } from './Product1';

/*
Las clases constructoras concretas siguen la interfaz
constructora y proporcionan implementaciones específicas de
los pasos de construcción

Los constructores concretos deben proporcionar sus
propios métodos para obtener resultados. Esto se debe a
que varios tipos de objetos constructores pueden crear
productos completamente diferentes de los cuales no todos
siguen la misma interfaz. Por lo tanto, dichos métodos no
pueden declararse en la interfaz constructora

Builder te permite construir productos que no siguen una interfaz común.
*/

export class ConcreteBuilder1 implements Builder {
  private product!: Product1;

  /**
   * Una nueva instancia de la clase constructora debe
   * contener un objeto de producto en blanco que utiliza en
   * el montaje posterior
   */
  constructor() {
    this.reset();
  }

  // El método reset despeja el objeto en construcción.
  reset(): void {
    this.product = new Product1();
  }

  // Todos los pasos de producción funcionan con la misma
  // instancia de producto.

  producePartA(): void {
    this.product.parts.push('PartA1');
  }

  producePartB(): void {
    this.product.parts.push('PartB1');
  }

  producePartC(): void {
    this.product.parts.push('PartC1');
  }

  /*
  Normalmente, tras devolver el resultado final al cliente,
  una instancia constructora debe estar lista para empezar
  a generar otro producto.
  */
  getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}