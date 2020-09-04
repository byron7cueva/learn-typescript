import { DataSource } from './DataSource';
import { FileDataSource } from './FileDataSource';
import { EncryptionDecorator } from './EncryptionDecorator';
import { CompressionDecorator } from './CompressionDecorator';
import { SalaryManager } from './SalaryManager';

// La aplicación puede montar distintas pilas de decoradores
// durante el tiempo de ejecución, dependiendo de la
// configuración o el entorno.

export class ApplicationConfigurator {
  private salary: string = '';
  enableEncryption: boolean = false;
  enableCompression: boolean = false;

  configuraionExample(): void {

    let source: DataSource = new FileDataSource('salary.dat');

    if(this.enableEncryption) {
      source = new EncryptionDecorator(source);
    } 

    if (this.enableCompression) {
      source = new CompressionDecorator(source);
    }

    const logger = new SalaryManager(source);
    this.salary = logger.load();
  }

  getSalary(): string {
    return this.salary;
  }
}