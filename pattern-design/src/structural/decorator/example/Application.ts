import { DataSource } from './DataSource';
import { FileDataSource } from './FileDataSource';
import { CompressionDecorator } from './CompressionDecorator';
import { EncryptionDecorator } from './EncryptionDecorator';

// Ejemplo 1
// Un ejemplo sencillo del montaje de un decorador.
export class Application {
  dumbUsageExample(salaryRecord: string): void {
    // Puedes envolver objetos en varias capas de decoradores.

    let source: DataSource = new FileDataSource('somefile.dat');
    source.writeData(salaryRecord);
    // El archivo objetivo se ha escrito con datos sin formato.

    source = new CompressionDecorator(source);
    source.writeData(salaryRecord);
    // El archivo objetivo se ha escrito con datos comprimidos.

    source = new EncryptionDecorator(source);
    // La variable source ahora contiene esto:
    // Cifrado > Compresión > FileDataSource
    source.writeData(salaryRecord);
    // El archivo se ha escrito con datos comprimidos y encriptados.
  }
}