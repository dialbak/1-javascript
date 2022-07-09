/**
 * Create a constructor
 * @param artist
 * @param albumName
 * @param yearRelease
 * @param genre
 * @param titleFavoriteSong
 * @param tempsMn
 * @param texte
 * @constructor
 */
class ConstructSong {
    constructor(artist, albumName, yearRelease, genre, titleFavoriteSong, tempsMn, texte) {
        this.artist = artist;
        this.albumName = albumName;
        this.yearRelease = yearRelease;
        this.genre = genre;
        this.titleFavoriteSong = titleFavoriteSong;
        this.tempsMn = tempsMn;
        this.tempsSec = "mn"
    }

    description = () => this
}

const myFavouriteSong = new ConstructSong(
    "Dire Straits",
    "Brothers in arms release in ",
    1985,
    "Blues rock",
    "So far Away",
    3,
    27
)
const myFavouriteSongTwo = new ConstructSong(
    "Dire Straits",
    "Brothers in arms release in ",
    1985,
    "Blues rock",
    "So far Away",
    3,
    27
)
const myFavouriteSongThree = new ConstructSong(
    "Dire Straits",
    "Brothers in arms release in ",
    1985,
    "Blues rock",
    "So far Away",
    3,
    27
)

arrayOfSongs = []

arrayOfSongs.push(
    myFavouriteSong.description(),
    myFavouriteSongTwo.description(),
    myFavouriteSongThree.description()
)

if (arrayOfSongs.length) {
    for (let i = 0; i < arrayOfSongs.length; i++) {
        console.log(`arrayOfSongs ${i} => `, arrayOfSongs[i])
    }
}



