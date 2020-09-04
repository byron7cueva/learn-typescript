import { clientCode, clientCode2 } from './client';
import { Leaf } from './Leaf';
import { Composite } from './Composite';

const simple = new Leaf();
console.log('Simple component');
clientCode(simple);
console.log('');

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);
console.log('Composite componente');
clientCode(tree);
console.log('');

console.log('Simple into composite');
clientCode2(tree, simple);