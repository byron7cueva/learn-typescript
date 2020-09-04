import { Component } from './Component';

export function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

export function clientCode2(component1: Component, component2: Component) {
  if(component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);
}