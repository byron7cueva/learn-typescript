// Funtion Type
// Es la representacion de un tipo para estructirar una determinada funcion

// Definiendo la estructura
type CallbackError = Error | null
type Callback = (error: CallbackError, response: Object) => void
type SendRequest = (cb: Callback) => void

// Al indicar que la funcion es del tipo que define la estructura esta debe cumplir con ella
const sendResquest: SendRequest = (cb: Callback): void => {
    if (cb) {
        cb(null, { message: 'todo salio como lo planiamos'})
    }
}