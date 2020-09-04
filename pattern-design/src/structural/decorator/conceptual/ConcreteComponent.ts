import { Component } from './Component';

/**
 * Componente concreto: proporcionan implementaciones predeterminadas
 * de los metodos
 * Pueden haber varias variaciones de esta clase.
 */
export class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }

}