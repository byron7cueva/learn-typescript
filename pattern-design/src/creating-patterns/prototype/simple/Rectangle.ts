import { Shape } from './Shape';

export class Rectangle extends Shape {
  width!: number;
  height!: number;

  clone(): Shape {
    const other = new Rectangle();
    Object.assign(other, this);
    return other;
  }
}