// Instersection types

interface Interface1 {
    prop1: number
}

interface Interface2 {
    prop2: number
}

// Hace la operacion and
type InterfaceMix = Interface1 & Interface2

// Al definir el objeto debe cumplir con todas la propiedades del alias creado con el 
// Deben contener todas las propiedades
// intersection types
// No importa si las propiedades se repiten
const intersectionMix: InterfaceMix = {
    prop1: 2, // Es requerida
    prop2: 2 // Es requerida
}