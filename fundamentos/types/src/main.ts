console.log('Hola Platzi')

// Tipos de datos
// Number
// Declaracion explicita
let phone: number

phone = 79867986
// phone = 'Hola' // Error no se puede asignar ese tipo de dato

// Declaracion inferida
let phoneNumber = 6875858
// phoneNumber = true // Error por tipo de dato

let hex : number = 0xf00d
let binary : number = 0b101010
let octal : number = 0o67567

// TIPO BOOLEANO
let isPro: boolean
isPro = true

// Inferido
let isUserPro = false
isUserPro = true

// TIPO STRING
let username : string = 'Byron'
username = 'Pedro'

// Template string
// Uso del caracter backtick
let userInfo : string
userInfo = `
    User Info
    username: ${username}
    firstName: ${username + ' Cueva'}
    phone: ${phone}
    isPro: ${isPro}
`

console.log('userInfo', userInfo)

