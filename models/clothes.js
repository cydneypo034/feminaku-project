const mongoose = require('./connection.js')

var ClothesSchema = new mongoose.Schema({
    storeName: String,
    favoriteCharacter: String,
    favoriteAccessory: String,
    fashionSite: String
})

const ClothesCollection = mongoose.model('Clothes', ClothesSchema)

function getAllClothes() {
    return ClothesCollection.find()
}

function deleteClothes(noClothes) {
    return ClothesCollection.findByIdAndDelete(noClothes)
}

function getOneClothes(clothesOneId) {
    return ClothesCollection.findById(clothesOneId)
}

function addNewClothes(newClothes) {
    return ClothesCollection.create(newClothes);
}

function editClothes(clothesEditId, brandNewClothes) {
    return ClothesCollection.findByIdAndUpdate(clothesEditId, brandNewClothes)
}


module.exports = {
    addNewClothes,
    deleteClothes,
    editClothes,
    getAllClothes,
    getOneClothes
}

