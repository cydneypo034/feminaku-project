const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()


//HTTP Requests
// 


userRouter.get('/', (req, res) => {
    userApi.getAllUsers().then(users => {
        res.json(users)
    })
})

userRouter.get('/:userId', (req, res) => {
    userApi.getOneUser(req.params.userId) .then(user => {
    res.json(user)
    })
})

userRouter.post('/', (req, res) => {
    userApi.addNewUser(req.body).then(newUser => {
        res.json(newUser)
    })
})

userRouter.put('/:userId', (req, res) => {
    userApi.editUser(req.params.userId, req.body).then(updatedUser => {
        res.json(updatedUser)
    })

})
userRouter.delete('/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId).then(deletedUser => {
        res.json(deletedUser)
    })
})
    
    



module.exports = {
    userRouter
}
