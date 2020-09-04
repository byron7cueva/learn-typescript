import { Graphic } from './Graphic';

/**
 * La clase compuesta representa componentes complejos que
 * pueden tener hijos. Normalmente los objetos compuestos
 * delegan el trabajo real a sus hijos y después "recapitulan"
 * el resultado.
 */
export class CompoundGraphic implements Graphic {
  children: Graphic[] = [];

  /**
   * Un objeto compuesto puede añadir o eliminar otros
   * componentes (tanto simples como complejos) a o desde su
   * lista hija.
   */

  add(child: Graphic): void {
    this.children.push(child);
  }

  remove(child: Graphic): void {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  /**
   *  Un compuesto ejecuta su lógica primaria de una forma
   * particular. Recorre recursivamente todos sus hijos,
   * recopilando y recapitulando sus resultados. Debido a que
   * los hijos del compuesto pasan esas llamadas a sus propios
   * hijos y así sucesivamente, se recorre todo el árbol de
   * objetos como resultado.
   */

  move(x: number, y: number): void {
    this.children.forEach(child => {
      child.move(x, y);
    });
  }
  draw(): void {
    console.log('Compound Graphic: ');
    this.children.forEach(child => {
      // Para cada componente hijo se dibuja el componente
      child.draw();
    });
  }

}