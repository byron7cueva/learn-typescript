import { DataSourceDecorator } from './DataSourceDecorator';

export class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string) {
    // 1. Comprime los datos pasados.
    // 2. Pasa los datos comprimidos al método writeData del
    // objeto envuelto.

    console.log(`Comprimiendo la data: ${data}`);
    const compressed = `Compressed(${data})`;
    this.wrappee.writeData(compressed);
  }

  readData(): string {
    // 1. Obtiene datos del método readData del objeto envuelto.
    // 2. Intenta descomprimirlo si está comprimido.
    // 3. Devuelve el resultado.
    console.log('Descomprimiendo la data:');
    return this.wrappee.readData();
  }
}