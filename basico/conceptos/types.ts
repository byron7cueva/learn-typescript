let a: string = 'hola'
a = 'holas'
// a = 3 //Esto genera un error ya que la variable es de tipo estring

let b: number = 10
// b = a // Igual da error ya que la variable a es un string y b es number

function suma (num1: number, num2: number): number {
    return num1 + num2
}

// Tipo de dato any, para asignar cualquier tipo de dato
let anyvalue: any = 10
anyvalue = 'Hola'

// Type Keyword
// Sirve para connotacion semantica
// Para que tenga un nombre significativo en nuetras aplicacions
type dni = number
let dniNumber: dni = 123