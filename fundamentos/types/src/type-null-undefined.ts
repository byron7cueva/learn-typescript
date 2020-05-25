// Tipo null
// Explicita
let nullVariable: null
// nullVariable = 1 // Esto daria un error

// Lo infiere como any
let otherVariable = null
otherVariable = 'test'

// console.log('nullVariable', nullVariable)
console.log('otherVariable', otherVariable)

// Tipo undefined
// Explicita
let undefinedVariable: undefined = undefined
// undefinedVariable = 'test' // Esto da un error

// Infiere como any
let otherUndefined = undefined
otherUndefined = 1

console.log('undefinedVarible', undefinedVariable)
console.log('otherUndefined', otherUndefined)

// Null y undefined como subtipos
// Flag --strictNullChecks
let albumNane: string
// albumNane = null // Esto genera un error
// albumNane = undefined
