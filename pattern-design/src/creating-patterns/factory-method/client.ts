import { Creator } from './Creator';

/**
 * El cliente trabaja con la instancia de un concreto creador.
 */
export function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}