export {}

// Implementar el metadata de un parametro
// target es la clase
// propertyName es la propiedad
// index Es la posicion en la cual se encuentra el parametro
function logParameter (target, propertyName, index) {
    const metadatakey = `log_${propertyName}_parameters`
    // Agregando metadata a la clase
    // Se valida primero si la metadata existe
    if (Array.isArray(target)[metadatakey]) {
        target[metadatakey].push(index)
    } else {
        // Creando el array del metadata
        target[metadatakey] = [index]
    }
}

class P {
    greet (@logParameter message: string): string {
        return message
    }
}

const p = new P()
p.greet('Hola')
