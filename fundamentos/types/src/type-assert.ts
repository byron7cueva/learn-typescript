export {}
// Conversiones de tipos de datos
// En la asercion puede ser parecido al casting, pero no es lo mismo ya que no se realiza ninguna verificacion y no afecta
// al rendimiento o al tiempo de ejecucion

// Angle bracket syntax // Se utiliza mas esta sintaxis

let username: any
username = 'Luis'


// Asumimos que tenemos una cadena
// Asume el compilador al tipo de dato que le estamos indicando
let message : string = (<string>username).length > 5 ? `Wellcome ${username}` : 'Username is too short'
console.log('message', message)

// Otro ejemplo
let usernameWithId: any = 'Byron 1'
username = (<string>usernameWithId).substring(0, 5)
console.log('Only username', username)

// Sintaxis "as"
message = (message as string).length > 5 ? `Wellcome` : 'Warning'

let helloUser: any
helloUser = 'hello paparazzi'
username = (helloUser as string).substring(6)
console.log('username', username)

