import { AbstractProductB } from './AbstractProductB';
import { AbstractProductA } from './AbstractProductA';

export class ConcreteProductB2 implements AbstractProductB {
  usefulFuntionB(): string {
    return 'The result of product B2';
  }
  anotherUsefulFuntionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFuntionA();
    return `The result of product B2 collaborating with (${result})`;
  }

}