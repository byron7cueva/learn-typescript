export {}

// target la clase
// key que es la propiedad
function logProperty (target, key) {
    let _val = this[key] // Obteniendo el valor de la propiedad

    // Creando un getter y poniendo un log
    const getter = () => {
        console.log(`Get: ${key} : ${_val}`)
        return _val
    }

    const setter = (newValue) => {
        console.log(`Set: ${key} : ${newValue}`)
        _val = newValue
    }

    const objectProperty = {
        get: getter,
        set: setter
    }
    // Definiendo una propiedad a la clase target, con el mismo nombre de la propiedad, redefiniendo su getter y setter
    Object.defineProperty(target, key, objectProperty)
}

class Persona {

    @logProperty
    name: string

    constructor (name: string) {
        this.name = name
    }
}

const p = new Persona('Byron')

p.name = 'Platzi'
const nameFromClass = p.name
