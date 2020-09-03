import { Shape } from './Shape';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

export class Application {
  shapes: Shape[] = [];

  constructor() {
    const circle = new Circle();
    circle.x = 10;
    circle.y = 10;
    circle.radius = 20;
    this.shapes.push(circle);

    const anotherCircle = circle.clone();
    this.shapes.push(anotherCircle);

    const rectangle = new Rectangle();
    rectangle.width = 10;
    rectangle.height = 20;
    this.shapes.push(rectangle);
  }

  bussinessLogic(): Shape[] {
    const shapesCopy: Shape[] = [];

    this.shapes.forEach(shape => {
      shapesCopy.push(shape.clone())
    });
    return shapesCopy;
  }
}