import { Graphic } from './Graphic';

/**
 * La clase hoja representa objetos finales de una composición.
 * Un objeto hoja no puede tener ningún subobjeto. Normalmente,
 * son los objetos hoja los que hacen el trabajo real, mientras
 * que los objetos compuestos se limitan a delegar a sus
 * subcomponentes.
 */
export class Dot implements Graphic {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`Draw dot in {x: ${this.x}, y: ${this.y}}`);
  }
}