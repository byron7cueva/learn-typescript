/**
 * La interfaz de componente define operaciones que los
 * decoradores pueden alterar.
 */
export interface DataSource {
  writeData(data: string): void;
  readData(): string;
}