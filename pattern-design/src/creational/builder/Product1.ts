export class Product1 {
  parts: string[] = [];

  listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}