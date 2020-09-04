import { Director } from './Director';
import { ConcreteBuilder1 } from './ConcreteBuilder1';

// El código cliente crea un objeto constructor, lo pasa al
// director y después inicia el proceso de construcción. El
// resultado final se extrae del objeto constructor.

export function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  // El producto final a menudo se extrae de un objeto
  // constructor, ya que el director no conoce y no
  // depende de constructores y productos concretos.
  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product');
  director.buildFullFeatureProduct();
  builder.getProduct().listParts();


  //El Patron builder puede ser utilizado sin ningun director
  console.log('Custom product');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}