const mongoose = require('./connection.js')

var AnimeSchema = new mongoose.Schema({
    name: String,
    favoriteSeason: String,
    favoriteCharacter: String,
    characterCosplay: String,
})

const AnimeCollection = mongoose.model('Anime', AnimeSchema)

function getAllAnime() {
    return AnimeCollection.find()
}

function deleteAnime(noAnime) {
    return AnimeCollection.findByIdAndDelete(noAnime)
}

function getOneAnime(animeOneId) {
    return AnimeCollection.findById(animeOneId)
}

function addNewAnime(newAnime) {
    return AnimeCollection.create(newAnime);
}

function editAnime(animeEditId, brandNewAnime) {
    return AnimeCollection.findByIdAndUpdate(animeEditId, brandNewAnime)
}


module.exports = {
    addNewAnime,
    deleteAnime,
    editAnime,
    getAllAnime,
    getOneAnime
}

