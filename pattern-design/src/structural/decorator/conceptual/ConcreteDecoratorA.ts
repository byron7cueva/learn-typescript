import { Decorator } from './Decorator';

/**
 * Los decoradores concretos llaman al objeto envuelto
 * y alteran su resultado de alguna manera.
 */
export class ConcreteDecoratorA extends Decorator {
  operation(): string {
    /**
     * Los decoradores pueden llamar a la implementación principal de la operación,
     * en lugar de llamar directamente al objeto envuelto. Este enfoque simplifica la extensión de las clases de decoradores.
     * Los decoradores pueden ejecutar su comportamiento antes o después de la llamada a un objeto envuelto.
     */

    return `ConcreteDecoratorA(${super.operation()})`;
  }
}