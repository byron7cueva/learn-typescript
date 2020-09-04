import { Product } from './Product';

export abstract class Creator {

  /** 
   * Declara el factory method que retorna un objeto de la interfaz Product
   * El Creator subclase provee la implementación de este método
   * 
  */
  abstract factoryMethod(): Product;

  /**
   * Su responsabilidad principal no es crear productos.
   * Usualmente contiene logica principal del negocio que tiene relación
   * con los productos que retorna el factory method
   * La subclase puede cambiar indirectamente la lógica de negocio, solamente
   * restornando un diferente tipo de producto
   */
  someOperation(): string {
    // Creando el producto
    const product = this.factoryMethod();
    // Utilizando el producto
    return `Creator: The some creator's code has just worked with ${product.operation()}`;
  }
}