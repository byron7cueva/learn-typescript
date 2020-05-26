// Shapes

class Persona {
    private edad: number
    private altura: number
    private dni: string

    constructor (edad: number, altura: number, dni: string) {
        this.edad = edad
        this.altura = altura
        this.dni = dni
    }
}

class Alumno extends Persona {
    private matricula: string

    constructor (edad: number, altura: number, dni: string, matricula: string) {
        super(edad, altura, dni)
        this.matricula = matricula
    }
}

let persona: Persona = new Persona(30, 1.70, '1233')
let alumno: Alumno = new Alumno(30, 1.70, '1233', '1212')

// Todo alumno puede ser una persona
persona = alumno // Esto si funciona porque la estructura le contiene ya que alumno tiene las propiedades que necesita persona
// Pero toda persona no puede ser un alumno
// alumno = persona // Esto no funciona porque la estructura no le contiene, le hace falta la matricula a persona