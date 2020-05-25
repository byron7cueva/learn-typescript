import { Album } from './album'

/**
 * User class
 */
export class User {
    private albums: Album[]

    constructor (private id: number,
            private username: string,
            private firstName: string,
            private isProd: boolean) {
                this.albums = []
    }

    addAlbum (album: Album) {
        this.albums.push(album)
    }

    removeAlbum (album: Album): Album | undefined {
        // Buscar el objeto album
        const index = this.albums.findIndex(a => a.id === album.id)
        let deletedAlbum
        if (index >= 0) {
            deletedAlbum = this.albums[index]
            this.albums.splice(index, 1)
        }
        return deletedAlbum
    }
}