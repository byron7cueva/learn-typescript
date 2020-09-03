import { Shape } from './Shape';

export class Circle extends Shape {
  radius!: number;

  clone(): Shape {
    const other = new Circle();
    Object.assign(other, this);
    return other;
  }
}