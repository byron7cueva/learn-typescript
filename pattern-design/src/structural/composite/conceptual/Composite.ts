import { Component } from './Component';

export class Composite extends Component {
  protected children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  remove(component: Component) {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
    component.setParent(null);
  }

  isComposite(): boolean {
    return true;
  }

  operation(): string {
    const result: string[] = this.children.map(child => {
      return child.operation();
    });
    return `Branch(${result.join('+')})`;
  }
}