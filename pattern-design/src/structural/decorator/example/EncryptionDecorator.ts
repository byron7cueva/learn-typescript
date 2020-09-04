import { DataSourceDecorator } from './DataSourceDecorator';

/**
 * Los decoradores concretos deben invocar métodos en el objeto
 * envuelto, pero pueden añadir algo de su parte al resultado.
 * Los decoradores pueden ejecutar el comportamiento añadido
 * antes o después de la llamada a un objeto envuelto.
 */
export class EncryptionDecorator extends DataSourceDecorator {
  
  /**
   * Los decoradores concretos pueden invocar la
   * implementación padre de la operación en lugar de invocar
   * directamente al objeto envuelto. Esta solución simplifica
   * la extensión de las clases decoradoras.
   */
  writeData(data: string) {
    // 1. Encripta los datos pasados.
    // 2. Pasa los datos encriptados al método writeData
    // (escribirDatos) del objeto envuelto.
    console.log(`Encriptando los datos: ${data}`);
    const encrypted = `Encrypted(${data})`
    this.wrappee.writeData(encrypted);
  }

  readData(): string {
    // 1. Obtiene datos del método readData (leerDatos) del
    // objeto envuelto.
    // 2. Intenta descifrarlo si está encriptado.
    // 3. Devuelve el resultado.
    console.log('Desencriptando información');
    return this.wrappee.readData();
  }
}