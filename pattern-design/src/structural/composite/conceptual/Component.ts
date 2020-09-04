export abstract class Component {
  protected parent: Component | null = null;

  setParent(parent: Component | null) {
    this.parent = parent;
  }

  getParent(): Component | null {
    return this.parent;
  }

  add(component: Component) : void {}
  remove(component: Component): void {}
  isComposite(): boolean {
    return false;
  }

  abstract operation(): string;
}