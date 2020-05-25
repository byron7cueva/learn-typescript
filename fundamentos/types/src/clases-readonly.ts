// readonly
// Acceso de solo lectura

export {}
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Superclase
// No se puede crear objetos de la clase abstracta
abstract class Item {
    protected readonly _id: number //Miembro de solo lectura
    protected _title: string

    constructor (id: number, title: string) {
        this._id = id
        this._title = title
    }

    get id () {
        return this._id
    }

    get title () {
        return this._title
    }

    set title (title: string) {
        this._title = title
    }
}

class Picture extends Item {
    // Por defecto su acceso es publico pero se lo puede indeicar explicitamente
    public static photoOrientation = PhotoOrientation
    //Propidades
    private _orientation: PhotoOrientation

    constructor (id: number, title: string, orientation: PhotoOrientation) {
        super(id, title)
        this._orientation = orientation
    }

    get orientation () {
        return this._orientation
    }

    set orientation (orientation: PhotoOrientation) {
        this._orientation = orientation
    }

    // Comportamiento
    toString () {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

class Album extends Item {
    private _pictures: Picture[]

    constructor (id: number, title: string) {
        super(id, title) // Constructor de la superclase
        this._pictures = []
    }

    get pictures () {
        return this._pictures
    }

    addPicture (picture: Picture) {
        this._pictures.push(picture)
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

console.log('PhotoOrientation', Picture.photoOrientation.Landscape)