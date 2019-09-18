const express = require('express')

const animeApi = require('../models/anime.js')

const animeRouter = express.Router()


//HTTP Requests
// 
animeRouter.get('/', (req, res) => {
    animeApi.getAllAnime()
    .then(animes => {
        res.json(animes)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
animeRouter.get('/:animeId', (req, res) => {
    animeApi.getOneUser(req.params.animeId)
    .then(anime => {
        res.json(anime)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
animeRouter.post('/', (req, res) => {
    animeApi.addNewAnime(req.body)
    .then(newAnime => {
        res.json(newAnime)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
/*
///////////////////GET ALL USERS/////////////////////////////
animeRouter.get('/', function (req, res) {
    animeApi.getAllAnime().then((shows) => {
        res.send(shows)
    })
})
/////////////////////GET ONE USER//////////////////////////
animeRouter.get('/:animeId', function(req,res){
    animeApi.getOneAnime(req.params.animeId).then((foundAnime) => {
        res.send(foundAnime);
    })
})
/////////////////////ADD USER///////////////////////////////

animeRouter.post('/', function(req, res) {
    animeApi.addNewAnime(req.body).then((newAnime) => {
        res.send(newAnime);
    })
})

/////////////////EDIT USER/////////////////////////////////

animeRouter.put('/:animeId', function(req, res) {
    animeApi.editAnime(req.params.animeId, req.body).then((generAnime) => {
    res.send(generAnime)
    })
})

////////////////////DELETE USER/////////////////////////////

animeRouter.delete('/:animeId', function(req,res){
    animeApi.deleteAnime(req.params.animeId).then((noAnime) => {
        res.send(noAnime);
    })
  })
*/

module.exports = {
    animeRouter
}


