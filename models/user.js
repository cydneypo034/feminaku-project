const mongoose = require('./connection.js')

global.user = [];

const getOneUser = () => global.user

const addNewUser = (newUser) => global.user.push(newUser)

const createUser = () => ""


module.exports = {
    addNewUser,
    createUser,
    getOneUser,
}

