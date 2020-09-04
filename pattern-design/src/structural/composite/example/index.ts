import { ImageEditor } from './ImageEditor';
import { Dot } from './Dot';
import { Circle } from './Circle';

const editor = new ImageEditor();
editor.load();

const dot = new Dot(8,8);
const circle = new Circle(5,5,5);

editor.graphics.add(dot);
editor.graphics.add(circle);
editor.groupSelected([dot, circle]);
