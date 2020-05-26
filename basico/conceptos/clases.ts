class Transporte {
    private _velocidad: number
    private _formaDeMovilidad: string

    constructor (velocidad: number, formaDeMovilidad: string) {
        this._velocidad = velocidad
        this._formaDeMovilidad = formaDeMovilidad
    }

    get velocidad (): number {
        return this._velocidad
    }

    set velocidad (velocidad: number) {
        this._velocidad = velocidad
    }

    get formaDeMovilidad (): string {
        return this._formaDeMovilidad
    }

    set formaDeMovilidad (formaDeMovilidad: string) {
        this._formaDeMovilidad = formaDeMovilidad
    }
}

const transporte: Transporte = new Transporte(20, 'suelo')

class Auto extends Transporte {
    private _cantidadDePuertas: number
    constructor (velocidad: number, formaDeMovilidad: string, cantidadDePuertas: number) {
        super(velocidad, formaDeMovilidad)
        this._cantidadDePuertas = cantidadDePuertas
    }

    get cantidadDePuertas (): number {
        return this._cantidadDePuertas
    }

    set cantidadDePuertas (cantidadDePuertas: number) {
        this._cantidadDePuertas = cantidadDePuertas
    }
}

const auto: Auto = new Auto(20, 'suelo', 4)
