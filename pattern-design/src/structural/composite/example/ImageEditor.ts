import { Graphic } from './Graphic';
import { Dot } from './Dot';
import { Circle } from './Circle';
import { CompoundGraphic } from './CompoundGraphic';

/**
 * El código cliente trabaja con todos los componentes a través
 * de su interfaz base. De esta forma el código cliente puede
 * soportar componentes de hoja simples así como compuestos
 * complejos.
 */
export class ImageEditor {
  graphics: CompoundGraphic;

  constructor() {
    this.graphics = new CompoundGraphic();
  }

  load(): void {
    this.graphics.add(new Dot(1, 2));
    this.graphics.add(new Circle(5, 3, 10));
  }

  groupSelected(components: Graphic[]) {
    const group = new CompoundGraphic();

    components.forEach(component => {
      group.add(component);
      this.graphics.remove(component);
    });

    this.graphics.add(group);
    this.graphics.draw();
  }
}