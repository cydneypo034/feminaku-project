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

  
userRouter.get('/new', function(req, res) {
    userApi.createUser().then((newUser) => {
      res.send(newUser)
    })
  })
  
userRouter.get('/:userId', function(req,res){
    userApi.getOneUser(req.body.userId).then((foundUser) => {
        res.send(foundUser);
    })
  })

userRouter.delete('/:userId', function(req,res){
    userApi.deleteUser(req.params.userId).then((noUser) => {
        res.send(noUser);
    })
  })
module.exports = {
    userRouter
}
