import { DataSource } from './DataSource';

/**
 * La clase decoradora base sigue la misma interfaz que los
 * demás componentes.
 * El principal propósito de esta clase es
 * definir la interfaz de encapsulación para todos los
 * decoradores concretos.
 * La implementación por defecto del
 * código de encapsulación puede incluir un campo para almacenar
 * un componente envuelto y los medios para inicializarlo.
 */
export class DataSourceDecorator implements DataSource {
  wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
  }

  /**
   * La decoradora base simplemente delega todo el trabajo al
   * componente envuelto. En los decoradores concretos se
   * pueden añadir comportamientos adicionales.
   */
  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  readData(): string {
    return this.wrappee.readData();
  }

}