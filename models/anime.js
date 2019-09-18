const mongoose = require('./connection.js')

var AnimeSchema = new mongoose.Schema({
    name: {type: String, trim: true, default: ''},
    favoriteSeason: {type: String, trim: true, default: ''},
    numberOfSeasons: {type: Number, trim: true, default: ''},
    favoriteCharacter: {type: String, trim: true, default: ''},
    animeGenre: {type: String, trim: true, default: ''},
    characterCosplay: {type: String, trim: true, default: ''},
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

