// Enum
// Permiten definir un conjunto de constantes con nombre
// Tiene sentido su uso cuando tenemos un cojunto de valores limitados

/*enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama //3
}*/


enum PhotoOrientation {
    Landscape = 0,
    Portrait = 2,
    Square = 3,
    Panorama = 4
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('landscape', landscape)
console.log('landscape', PhotoOrientation[landscape])

enum PictureOrientation {
    Landscape = 10, // Los demas continuan a partir del primer valor indicado 
    Portrait, // 11
    Square, // 12
    Panorama // 13
}

console.log('portrait', PictureOrientation.Portrait)

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia
console.log('country', country)