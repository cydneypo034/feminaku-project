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
    
    


/* example: do not use
///////////////////GET ALL USERS/////////////////////////////
userRouter.get('/', function (req, res) {
        userApi.getAllUsers().then((users) => {
            res.json(users) 
        })
    })
    
    /////////////////////GET ONE USER//////////////////////////
    userRouter.get('/:userId', function(req,res){
        userApi.getOneUser(req.params.userId).then((foundUser) => {
            res.json(foundUser);
        })
      })
    
    /////////////////////ADD USER///////////////////////////////
    userRouter.post('/', function (req, res) {
        userApi.addNewUser(req.body).then((newUser) => {
            res.json(newUser)
        })
    })
    
    /////////////////EDIT USER/////////////////////////////////
    userRouter.put('/:userId', function(req, res) {
        userApi.editUser(req.params.userId, req.body).then((brandnew) => {
        res.json(brandnew)
        })
    })
    
    ////////////////////DELETE USER/////////////////////////////
    userRouter.delete('/:userId', function(req,res){
        userApi.deleteUser(req.params.userId).then((nouser) => {
            res.json(nouser);
        })
      })

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
