import { DataSource } from './DataSource';

// Ejemplo 2
// El código cliente que utiliza una fuente externa de
// datos. Los objetos SalaryManager no conocen ni se preocupan
// por las especificaciones del almacenamiento de datos.
// Trabajan con una fuente de datos preconfigurada recibida del
// configurador de la aplicación.
export class SalaryManager {
  source: DataSource;

  constructor(source: DataSource) {
    this.source = source;
  }

  load(): string {
    return this.source.readData();
  }

  save(salaryRecord: string) {
    this.source.writeData(salaryRecord);
  }
}