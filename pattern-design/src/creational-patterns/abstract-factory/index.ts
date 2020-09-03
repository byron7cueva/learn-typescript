import { ConcreteFactory1 } from './ConcreteFactory1';
import { ConcreteFactory2 } from './ConcreteFactory2';
import { clientCode } from './client';

/*
La aplicacion elige el tipo de fábrica dependiendo de la configuración
actual o los ajustes del entorno
Y la crea durante el tiempo de ejecución, normalmente en la etapa
de inicialización.
*/
console.log('Client testing with the first factory');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client testing with the second factory');
clientCode(new ConcreteFactory2());