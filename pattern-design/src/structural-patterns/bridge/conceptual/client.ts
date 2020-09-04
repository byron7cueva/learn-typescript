import { Abstraction } from './Abstraction';

export function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}