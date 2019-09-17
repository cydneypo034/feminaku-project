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
    shopsApi.getOneUser(req.body.userId).then((foundUser) => {
        res.send(foundUser);
    })
  })


module.exports = {
    userRouter
}
