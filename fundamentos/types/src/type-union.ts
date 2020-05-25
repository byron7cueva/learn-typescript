export {}
// Type Union
// Permite que una variable soporte varios tipos de dato
let idUser: number | string
idUser = 10
idUser = 'id10'

// Buscar username dado un ID
function getUseNameById(id: number | string) {
    return 'Byron'
}

console.log(getUseNameById(idUser))

// Alias de Tipos
// Crea un alias como un nuevo nombre para un tipo
// Tambien se puede aplicar a un conjunto o combinacion de tipos
// Se usa la palbra reservada type
type IdUser = number |  string
type Username = string
let id: IdUser

function getUserName (id: IdUser) : Username {
    return 'Luis'
}

// Tipos Literales
// Unavariable con un tipo literal puede contener unicamente una cadena del conjunto
type SquareSize = '100x100' | '500x500' | '1000x1000'
// let smallPicture: SquareSize = '200x200' // Esto genera un error ya que no se indico en la lista de valores validos

let smallPicture: SquareSize = '100x100'
let mediumPicture: SquareSize = '500x500'