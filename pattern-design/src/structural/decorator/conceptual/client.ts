import { Component } from './Component';

/**
 * El código del cliente funciona con todos los objetos que utilizan la interfaz del componente.
 * De esta manera, puede permanecer independiente de las clases concretas de componentes con los que trabaja.
 */
export function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}