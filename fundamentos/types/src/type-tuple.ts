export {} // Para que no tener problemas de repeticion de variables
let user: [number, string]
user = [1, 'Byron']

console.log('user', user)
console.log('username', user[1])
console.log('id', user[0])

// Tuplas con varios valores
// id, username, isPro
// Para la defincion de tuplas idealmente los tipos deben ser diferentes para cada una de la posiciones
let userInfo: [number, string, boolean]
userInfo = [2, 'paparazzi', true]
console.log('userInfo', userInfo)

// Arreglo de tuplas
// El arreglo tiene que inicializarce
let array: [number, string][] = []
array.push([1, 'Byron'])
array.push([2, 'Pedro'])
array.push([3, 'Carlos'])
array[0][1] = array[0][1].concat('001')
console.log('array', array)