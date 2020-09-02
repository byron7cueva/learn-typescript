import { AbstractProductA } from './AbstractProductA';
import { AbstractProductB } from './AbstractProductB';

/*
La interface de fabrica absracta declara un grupo de métodos para
crear productos, pero devuelve los productos abstractos, dejando la propia
creación de productos a clases de fabrica concretas.

Estos productos se denominan familia y estan relacionados por un tema o concepto de
alto nivel.
*/

export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}