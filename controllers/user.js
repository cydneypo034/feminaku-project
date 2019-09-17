const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()


//HTTP Requests
// 
userRouter.get('/', function (req, res) {
    userApi.getAllUsers().then((users) => {
        res.send(users) 
    })
})
/////////////////////GET ONE USER//////////////////////////
userRouter.get('/:userId', function(req,res){
    userApi.getOneUser(req.params.userId).then((foundUser) => {
        res.send(foundUser);
    })
  })

/////////////////////ADD USER///////////////////////////////

userRouter.post('/', function (req, res) {
    userApi.addNewUser(req.body).then((newUser) => {
        res.send(newUser)
    })
})

/////////////////EDIT USER/////////////////////////////////
userRouter.put('/:userId', function(req, res) {
    userApi.editUser(req.params.userId, req.body).then((brandnew) => {
    res.send(brandnew)
    })
})

////////////////////DELETE USER/////////////////////////////
userRouter.delete('/:userId', function(req,res){
    userApi.deleteUser(req.params.userId).then((nouser) => {
        res.send(nouser);
    })
  })

module.exports = {
    userRouter
}
