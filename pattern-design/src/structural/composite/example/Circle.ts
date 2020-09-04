import { Dot } from './Dot';

/**
 * Todas las clases de componente pueden extender otros
 * componentes.
 */
export class Circle extends Dot {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x,y);
    this.radius = radius;
  }

  draw(): void {
    console.log(`Draw circle with {x: ${this.x}, y: ${this.y}, radio: ${this.radius}}`);
  }
}