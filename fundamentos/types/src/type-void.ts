export {}
// Es lo opuesto de any
// Representa la ausencia de valor
// Comunmente se usa como tipo de retorno en funciones

// Tipo explicito
function showInfo (user: any): void {
    console.log('User info', user.id, user.username, user.firstname)
}

const byron = {
    id: 1,
    username: 'Byron Cueva',
    firstname: 'Byron'
}

showInfo(byron)

// Tipo inferido
function showFormattedInfor(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstname}
    `)
}

showFormattedInfor(byron)

// Varibale de tipo void
// Solo se puede asignar null o undefined
// null y undefined son subtipos de void

let unusable: void
// unusable = null // En modo estricto esto da error
unusable = undefined


// Tipo never
// Es un tipo especial
// Representa el tipo de valor que nunca ocurre
// Se utiliza cuando
// Funciones que lanzan excepciones
// Funciones que nunca retornan un valor
// Cuando la funcion tiene un ciclo infenito y no permite que se finaclice

function handleError (code: number, message: string): never {
    throw new Error(`${message}. Code: ${code}`)
}

try {
    handleError(404, 'Not Found')
} catch (error) {

}

function sumNumbers (limit: number): never {
    let sum = 0
    while (true) {
        sum++
    }
}

sumNumbers(10)
// El programa nunca termina