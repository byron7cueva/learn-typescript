import { DataSource } from './DataSource';

/**
 * Los componentes concretos proporcionan implementaciones por
 * defecto para las operaciones. En un programa puede haber
 * muchas variaciones de estas clases.
 */
export class FileDataSource implements DataSource {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  writeData(data: string): void {
    console.log(`Escribe los datos: ${data} en el archivo: ${this.filename}`);
  }

  readData(): string {
    return 'Leendo datos desde un archivo';
  }

}