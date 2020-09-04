import { AbstractProductB } from './AbstractProductB';
import { AbstractProductA } from './AbstractProductA';

export class ConcreteProductB1 implements AbstractProductB {
  usefulFuntionB(): string {
    return 'The result of product B1';
  }
  anotherUsefulFuntionB(collaborator: AbstractProductA): string {
    const result: string = collaborator.usefulFuntionA();
    return `The result of product B1 collaborating whit the (${result})`;
  }
}