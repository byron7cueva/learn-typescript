export {}
// Functions

type SquareSize = '100x100' | '500x500' | '1000x1000'
function createPictureTs (title: string, date: string, size: SquareSize) {
    console.log('create picture using', title, date, size)
}

createPictureTs('My birthdat', '2020-03-10', '100x100')

// Parametros opcionales
function createPictureOpcionales (title?: string, date?: string, size?: SquareSize) {
    console.log('create picture using', title, date, size)
}

createPictureOpcionales('Colombia Trip', '2020-09-10')
createPictureOpcionales()

// Flat Array functions
const createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    }
}

const picture = createPic('Platzi session', '2020-01-29', '1000x1000')
console.log('picture', picture)

// Tipo de retorno con TypsScript
// Permite retornar dos tipos de dato
function handleError (code: number, message: string): never | string {
    if (message === 'error') {
        throw new Error(`${message}. Code: ${code}`)
    }

    return 'An error has ocurred'
}

let result = handleError(200, 'OK')
console.log('result', result)
result = handleError(400, 'error')
console.log('result', result)