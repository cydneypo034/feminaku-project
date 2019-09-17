const mongoose = require('./connection.js')

var AnimeSchema = new mongoose.Schema({
    name: String,
    favoriteSeason: String,
    favoriteCharacter: String,
    genre: String,
    wouldTheyCosplay: String,
})

const AnimeCollection = mongoose.model('Anime', AnimeSchema)

function createAnime() {
    return AnimeCollection.create({
        name: " ",
        favoriteSeason: " ",
        favoriteCharacter: " ",
        genre: " ",
        wouldTheyCosplay: " ",
    })
}
function getAllAnime() {
    return AnimeCollection.find()
}

function deleteAnime(killedAnime) {
    return AnimeCollection.findByIdAndDelete(killedAnime)
}

function getOneAnime(oneAnimeId) {
    return AnimeCollection.findById(oneAnimeId)
}

function addNewAnime(newAnimeId) {
    return AnimeCollection.create(newAnimeId);
}

function editAnime(thisAnimeId, brandNewAnime) {
    return AnimeCollection.findByIdAndUpdate(thisAnimeId, brandNewAnime)
}


module.exports = {
    addNewAnime,
    createAnime,
    deleteAnime,
    editAnime,
    getAllAnime,
    getOneAnime
}

