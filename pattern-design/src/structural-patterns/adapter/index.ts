import { clientCode } from './client';
import { Target } from './Target';
import { Adaptee } from './Adaptee';
import { Adapter } from './Adapter';

console.log('Client: I can work just fine with the Target object:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);