import { ConcreteComponent } from './ConcreteComponent';
import { ConcreteDecoratorA } from './ConcreteDecoratorA';
import { ConcreteDecoratorB } from './ConcreteDecoratorB';
import { clientCode } from './client';

console.log('Client: Simple component');
const simple = new ConcreteComponent();
clientCode(simple);
console.log('');

console.log('Decorator component');
const decoratorA = new ConcreteDecoratorA(simple);
const decoratorB = new ConcreteDecoratorB(decoratorA);
clientCode(decoratorB);