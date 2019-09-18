const mongoose = require('./connection.js')

var ClothesSchema = new mongoose.Schema({
    storeName: {type: String, trim: true, default: ''},
    favoriteCharacter: {type: String, trim: true, default: ''},
    shirtSize: {type: String, trim: true, default: ''},
    pantSize: {type: String, trim: true, default: ''},
    favoriteAccessory: {type: String, trim: true, default: ''},
    shoeSize: {type: Number, trim: true, default: ''},
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

