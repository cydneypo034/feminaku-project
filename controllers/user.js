const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()


//HTTP Requests
// 

userRouter.get('/', (req, res) => {
    userApi.getAllUsers().then(users => {
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
    userApi.getOneUser(req.params.userId) .then(user => {
    res.json(user)
})
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

userRouter.post('/', (req, res) => {
    userApi.addNewUser(req.body).then(newUser => {
        res.json(newUser)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

userRouter.put('/:userId', (req, res) => {
    userApi.editUser(req.params.userId, req.body).then(updatedUser => {
        res.json(updatedUser)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            massage: err.message
        })
    })
})
userRouter.delete('/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId).then(deletedUser => {
        res.json(deletedUser)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})


/* example: do not use
userRouter.get('/', (req,res) => {
    res.json({
        confirmation: 'success',
        data: 'this is the profile'
    })
})
///////////////////GET ALL USERS/////////////////////////////
userRouter.get('/', function (req, res) {
    userApi.getAllUsers().then((users) => {
        res.send(users) 
    })
})

/////////////////////GET ONE USER//////////////////////////
userRouter.get('/:userId', function(req,res){
    userApi.getOneUser(req.params.userId).then((foundUser) => {
        res.send(foundUser);
    })
  })

/////////////////////ADD USER///////////////////////////////
userRouter.post('/', function (req, res) {
    userApi.addNewUser(req.body).then((newUser) => {
        res.send(newUser)
    })
})

/////////////////EDIT USER/////////////////////////////////
userRouter.put('/:userId', function(req, res) {
    userApi.editUser(req.params.userId, req.body).then((brandnew) => {
    res.send(brandnew)
    })
})

////////////////////DELETE USER/////////////////////////////
userRouter.delete('/:userId', function(req,res){
    userApi.deleteUser(req.params.userId).then((nouser) => {
        res.send(nouser);
    })
  })
*/



module.exports = {
    userRouter
}
