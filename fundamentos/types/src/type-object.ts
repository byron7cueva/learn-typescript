// Type: object

// El tipo object no se puede acceder a las propiedades del objeto

let user: object
user = {} // Object

user = {
    id: 1,
    nombre: 'Byron',
    apellido: 'Cueva',
    isPro: true
}

console.log('user', user)
// console.log('user.nombre', user.nombre) // No se puede acceder a los atributos

// Object (JavaScript) vs object (TypeScript)
// Inferido se define como clase Object de JavaScript
const myObj = {
    id: 1,
    nombre: 'Byron',
    apellido: 'Cueva',
    isPro: true
}

const isInstance = myObj instanceof Object
console.log('isInstance', isInstance)
console.log('myObject.nombre', myObj.nombre)