import { Item } from './item'
import { Picture } from './picture'

export class Album extends Item {
    private pictures: Picture[]

    constructor (id: number, title: string) {
        super(id, title) // Constructor de la superclase
        this.pictures = []
    }

    addPicture (picture: Picture) {
        this.pictures.push(picture)
    }
}