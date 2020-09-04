import { Abstraction } from './Abstraction';
import { ExtendedAbstraction } from './ExtendedAbstraction';
import { ConcreteImplementationA } from './ConcreteImplementationA';
import { ConcreteImplementationB } from './ConcreteImplementationB';
import { clientCode } from './client';

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
