// Es el punto de entrada del poyecto
// Compilando solo el proyecto
// tsc --project photo-app --watc

// Resolucion de modulos
// tsc --moduleResolution node //Common.js y mas configurable
// tsc --moduleResolution classic // Cuando se maneja modulos amd, system es2015, poco configurable
import { User } from './user'
import { Album } from './album'
import { Picture } from './picture'
import { PhotoOrientation } from './photo-orientation'

const user: User = new User(1, 'byron', 'Byron', true)
const album: Album = new Album(10, 'Platzi Pictures')
const picture = new Picture(11, 'TypeScript Course', '2020-03-10', PhotoOrientation.Landscape)

// Relacionando
user.addAlbum(album)
album.addPicture(picture)
console.log('user', user)

user.removeAlbum(album)
console.log('user', user)