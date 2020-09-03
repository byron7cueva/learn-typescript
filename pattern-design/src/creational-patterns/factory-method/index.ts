import { ConcreteCreator1 } from './ConcreteCreator1';
import { ConcreteCreator2 } from './ConcreteCreator2';
import { clientCode } from './client';

/**
 * La aplicacion selecciona el creador dependiendo de la configuracion del
 * ambiente
 */
console.log('App: Lunched with ConcreteCreator1');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Lunched with ConcreteCreator2');
clientCode(new ConcreteCreator2());