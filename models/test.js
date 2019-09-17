const userApi = require('./user.js')


userApi.getAllUsers().then((allUsers) => {
    console.log(allUsers)
})

userApi.createUser().then((newUser) => {
    console.log(newUser)
})