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
userRouter.get('/new', function(req, res) {
    userApi.createUser().then((newUser) => {
      res.send(newUser)
    })
  })
userRouter.post('/', function (req, res) {
    userApi.addNewUser(req.body).then((newUser) => {
        res.send(newUser)
    })
})



userRouter.put('/feminaku/:userId', function(req, res) {
    userApi.updateUser(req.params.index, req.body).then(() => {
    res.send(200)
    })
})

userRouter.delete('/:userId', function(req,res){
    userApi.deleteUser(req.params.userId).then(() => {
        res.send(200);
    })
  })

module.exports = {
    userRouter
}
