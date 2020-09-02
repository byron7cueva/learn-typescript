import { Builder } from './Builder';

// El director sólo es responsable de ejecutar los pasos de
// construcción en una secuencia particular. Resulta útil cuando
// se crean productos de acuerdo con un orden o configuración
// específicos. En sentido estricto, la clase directora es
// opcional, ya que el cliente puede controlar directamente los
// objetos constructores.

export class Director {
  private builder!: Builder;

  // El director funciona con cualquier instancia de
  // constructor que le pase el código cliente. De esta forma,
  // el código cliente puede alterar el tipo final del
  // producto recién montado
  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  // El director puede construir multitud de variaciones de
  // producto utilizando los mismos pasos de construcción.

  buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  buildFullFeatureProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}