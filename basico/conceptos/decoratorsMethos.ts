// Decorators
// Permite extender la funcionalidad de ciertos elementos

// target hace referencia al elemento que contenga el elemento al cual estamos aplicando el decorador
// key hace referencia al elemento al que se esta aplicando

function log (target, key) {
    console.log(key + 'se ha llamado')
}

class Persona {
    private name: string

    constructor (name: string) {
        this.name = name
    }

    // Aplicando el decorador al metodo
    @log
    sayMyName () {
        console.log(this.name)
    }
}

const persona: Persona = new Persona('Byron')
persona.sayMyName()