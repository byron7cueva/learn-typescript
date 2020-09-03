export abstract class Shape {
  // (!) aserciones de asignación definidas
  // El operador afirmación no nulo, ! , le permite afirmar que una expresión no es null o undefined cuando el compilador de TypeScript no puede inferir eso automáticamente
  x!: number;
  y!: number;
  color!: string;

  abstract clone(): Shape;
}