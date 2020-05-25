
export {}
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

function showPicture (picture: {title: string, date: string, orientation: PhotoOrientation}) {
    console.log(`
        [title: ${picture.title}],
        [date: ${picture.date}],
        [orientation: ${picture.orientation}]
    `)
}

const myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'prueba' // No admite
})

// Interfaces
// Son como contratos para nuestro codigo
interface Picture {
    title: string
    date: string
    orientation: PhotoOrientation
}

function showPictureInt (picture: Picture) {
    console.log(`
        [title: ${picture.title}],
        [date: ${picture.date}],
        [orientation: ${picture.orientation}]
    `)
}

showPictureInt ({
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'prueba' // No admite
})

// Propiedades opcionales
interface PictureConfig {
    title?: string
    date?: string
    orientatio?: PhotoOrientation
}

function generatePicture (config: PictureConfig) {
    const pic = {title: 'Default', date: '2020-03'}
    if (config.title) {
        pic.title = config.title
    }

    if (config.date) {
        pic.date = config.date
    }

    return pic
}

let picture = generatePicture({})
console.log('picture', picture)
picture = generatePicture({title: 'Travel Pic'})
console.log('picture', picture)
picture = generatePicture({title: 'Travel Pic', date: '2021'})
console.log('picture', picture)

// Indicar un atributo de solo lectura
interface User {
    readonly id: number
    username: string
    isPro: boolean
}

let user: User
user = {id: 1, username: 'byron', isPro: true}
console.log('user', user)
user.username = 'paparazzi'
// user.id = 2 // No se puede asignar ya que solo es de lectura el campo
console.log('user', user)