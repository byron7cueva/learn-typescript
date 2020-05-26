// Interface
// Es un tipo abstracto
// Es como una especie de contrato de la estructura que se espera de un tipo de objeto
type Dni = number

interface Persona {
    altura?: number // Con ? (simbolo elvis) se indica que es una propidada opcional
    edad: number
    nombre: string
    apellido: string
    dni: Dni
}

const persona: Persona = {
    altura: 1.75,
    edad: 30,
    nombre: 'Byron',
    apellido: 'Cueva',
    dni: 1
}