const userApi = require('./user.js')


userApi.getAllUsers().then((allUsers) => {
    console.log(allUsers)
})

userApi.createUser().then((newUser) => {
    console.log(newUser)
})

userApi.deleteUser().then((noUser) => {
    console.log(noUser)
})
userApi.getAllUsers().then((users) => Promise.all(users.map(userApi.deleteUser)))