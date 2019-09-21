const mongoose = require('./connection.js')

var UserSchema = new mongoose.Schema({
    name: String,
    cityAndState: String,
    age: Number,
    socialMedia: String,
    imageURL: {data: Buffer, contentType: String}
})

const UserCollection = mongoose.model('User', UserSchema)


function getAllUsers() {
    return UserCollection.find()
}

function deleteUser(noUsers) {
    return UserCollection.findByIdAndDelete(noUsers)
}

function getOneUser(userOneId) {
    return UserCollection.findById(userOneId)
}

function addNewUser(newUser) {
    return UserCollection.create(newUser);
}

function editUser(userEditId, brandNewUser) {
    return UserCollection.findByIdAndUpdate(userEditId, brandNewUser)
}
module.exports = {
    addNewUser,
    deleteUser,
    editUser,
    getAllUsers,
    getOneUser
}

/*
name: {type:String, trim: true, default: ''},
    originCity: {type: String, trim: true, default: ''},
    age: {type: Number, trim: true, default: ''},
    instagram: {type: String, trim: true, default: ''},
    favoriteAnime: {type: String, trim: true, default: ''},
    favoriteFood: {type: String, trim: true, default: ''},
*/