import { Implementation } from './Implementation';

export class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}