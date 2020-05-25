// Corchetes []

// Tipo Explicito
let users: string[]
users = ['Byron', 'Luis', 'Carlos']
// users = [1,'as', true] // Da un error ya que se le indico qu el array va contener tipo string


// Tipo Inferido
let otherUsers = ['Carlos', 'Luis', 'Pedro']
// otherUsers = [1,'as', true] // Da un error ya que typescript identifico que debe ser de tipo array en la definicion

// Array<TIPO>
let pictureTitles: Array<string>
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape']

console.log('First use', users[0])
console.log('First title', pictureTitles[0])

//Propiedades
console.log('users.length', users.length)

users.push('Alex')
users.sort()
console.log('users', users)