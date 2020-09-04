import { Implementation } from './Implementation';

export class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }

}