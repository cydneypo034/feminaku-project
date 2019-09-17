const mongoose = require('./connection.js')

var UserSchema = new mongoose.Schema({
    name: String,
    originCity: String,
    age: Number,
    instagram: String,
    favoriteAnime: String,
    favoriteFood: String,
})

const UserCollection = mongoose.model('User', UserSchema)

function createUser() {
    return UserCollection.create({
        name: " ",
        originCity: " ",
        age: 0,
        instagram: " ",
        favoriteAnime: " ",
        favoriteFood: " ",
    })
}
function getAllUsers() {
    return UserCollection.find()
}

function deleteUser(noUsers) {
    return UserCollection.findByIdAndDelete(noUsers)
}

function getOneUser(userOneId) {
    return UserCollection.findById(userOneId)
}

function addNewUser(newUser) {
    return UserCollection.create(newUser);
}

function editUser(userEditId, brandNewUser) {
    return StoreCollection.findByIdAndUpdate(userEditId, brandNewUser)
}


module.exports = {
    addNewUser,
    createUser,
    deleteUser,
    editUser,
    getOneUser,
    getAllUsers,
}

