// Tipo de dato anny
// Este admite cualquier tipo de dato
// Se debe utilizar cuando no sabemos que tipo de dato vamos a utilizar
// Cuando el tipo de dato puede cambiar al pasar el tiempo
// Typo Explicito
let idUser : any
idUser = 1
idUser = 'id1'
console.log('idUser', idUser)

// Tipo inferido
let otherId
otherId = 1
otherId = 'id11'
console.log('otherId', otherId)

let surprise : any = 'hello typescript'
// surprise.sayHello() // Al utilizar any el compilador no se puede dar cuanta si existe un error, ese erros se arrojara en tiempo de ejecucion
const res = surprise.substring(6) // De igual manera no controla las funciones que pueden tener los distintos tipos de datos, esto puede dar un error
console.log('res', res)