import { Target } from './Target';

export function clientCode(target: Target) {
  console.log(target.request());
}