//El siguiente decorador modifica la clase

function init(target) {
    return class extends target {
        nombre = 'Byron'
        aplellido = 'Cueva'

        sayMyName () {
            return  `${this.nombre} ${this.aplellido}`
        }
    }
}

@init
class P {
    constructor () {

    }

    sayMyName () {

    }
}

const p: P = new P()
console.log(p.sayMyName())
