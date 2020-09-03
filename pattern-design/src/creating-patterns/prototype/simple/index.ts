import { Application } from './Application';

const app = new Application();
console.log(app.shapes);
const shapes = app.bussinessLogic();
console.log(shapes);

if (shapes[0] === app.shapes[0]) {
  console.log('Son los mismos objetos');
} else {
  console.log('Son objetos distintos');
}