import { Component } from './Component';

/**
 * La clase básica Decorator sigue la misma interfaz que los otros componentes.
 * El propósito principal de esta clase es definir la interfaz de envoltura
 * para todos los decoradores de concreto.
 * La implementación predeterminada del código de empaquetado
 * puede incluir un campo para almacenar un componente empaquetado
 * y los medios para inicializarlo.
 */
export class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    // El decorador delega todo el trabajo a los componentes envueltos.
    return this.component.operation();
  }
}