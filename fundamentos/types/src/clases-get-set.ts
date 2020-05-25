// Modificadores de acceso
// Estos permiten
// Controlar de que forma podemos acceder y cambiar
// Tambien se puede utilizar como un mecanismo para validar los valores que se pretende asignar a estos atributos

export {}
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propidades
    #id: number
    #title: string
    #orientation: PhotoOrientation

    constructor (id: number, title: string, orientation: PhotoOrientation) {
        this.#id = id
        this.#title = title
        this.#orientation = orientation
    }

    get id () {
        return this.#id
    }

    get title () {
        return this.#title
    }

    set title (title: string) {
        this.#title = title
    }

    get orientation () {
        return this.#orientation
    }

    set orientation (orientation: PhotoOrientation) {
        this.#orientation = orientation
    }

    // Comportamiento
    toString () {
        return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`
    }
}

class Album {
    #id: number
    #title: string
    #pictures: Picture[]

    constructor (id: number, title: string) {
        this.#id = id
        this.#title = title
        this.#pictures = []
    }

    get id () {
        return this.#id
    }

    get title () {
        return this.#title
    }

    set title (title: string) {
        this.#title = title
    }

    get pictures () {
        return this.#pictures
    }

    addPicture (picture: Picture) {
        this.#pictures.push(picture)
    }
}

const album: Album = new Album(1, 'Personal picture')
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture)

console.log('album', album)

// Las siguientes propiedades son privadas
// picture.id = 100
picture.title = 'Another title'
album.title = 'Persona Activities'

console.log('album', album)

console.log('pcture.id', picture.id)
console.log('pcture.title', picture.title)