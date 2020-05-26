// Union Types
// Sirve para hacer una unificacion de tipos en un alias

type SumaParameter = number | string
type SumaReturnType = number | string

function suma (num1: SumaParameter, num2: SumaParameter): SumaReturnType {
    // Al covertirlo al primero en string el segundo tambien se convierte en string
    return String(num1) + num2
}

interface Interface1 {
    prop1: number
}

interface Interface2 {
    prop2: number
}

// Hace una operacion or con las propiedades puede contener o no las propiedades
// De una o otra interface
type InterfaceMix = Interface1 | Interface2

// Puede contener las propiedades de las dos definiciones
// Pero no puedo incluir una propiedad que no contengan ninguna de las dos interfaces
const interfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 3
}