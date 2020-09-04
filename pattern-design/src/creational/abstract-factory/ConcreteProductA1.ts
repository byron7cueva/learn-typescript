import { AbstractProductA } from './AbstractProductA';

/*
Los productos concretos son creados por fabricas concretas correspondientes
*/

export class ConcreteProductA1 implements AbstractProductA {
  usefulFuntionA(): string {
    return 'The result of product A1';
  }
}