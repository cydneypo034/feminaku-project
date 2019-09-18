const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()


//HTTP Requests
// 

userRouter.get('/', (req, res) => {
    userApi.getAllUsers()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
userRouter.get('/:userId', (req, res) => {
    userApi.getOneUser(req.params.userId)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
/*
userRouter.post('/', (req, res) => {
    
    user.create(req.body)
    .then(newUser => {
        res.json({
            confirmation: 'success',
            data: newUser
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
*/
/*
userRouter.get('/', (req,res) => {
    res.json({
        confirmation: 'success',
        data: 'this is the profile'
    })
})
*/

module.exports = {
    userRouter
}
