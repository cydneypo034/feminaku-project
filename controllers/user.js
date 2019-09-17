const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()


userRouter.get('/', (req, res) => {
    res.send(userApi.getOneUser())
  })
  userRouter.put('/', (req, res) => {
    userApi.addNewUser(req.body);
    res.send(200);
  })
  userRouter.get('/new', (req, res) => {
    res.send(userApi.createUser())
  })

module.exports = {
    userRouter
}
