/**
 * La interfaz componente declara operaciones comunes para
 * objetos simples y complejos de una composición.
 */
export interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}