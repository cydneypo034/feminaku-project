const mongoose = require('./connection.js')

var UserSchema = new mongoose.Schema({
    name: String,
    cityAndState: String,
    age: Number,
    socialMedia: String,
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