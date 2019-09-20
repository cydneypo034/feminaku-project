const express = require('express')

const animeApi = require('../models/anime.js')

const animeRouter = express.Router()


//HTTP Requests
// 

///////////////////GET ALL USERS/////////////////////////////
animeRouter.get('/', function (req, res) {
    animeApi.getAllAnime().then((shows) => {
        res.json(shows)
    })
})
/////////////////////GET ONE USER//////////////////////////
animeRouter.get('/:animeId', function(req,res){
    animeApi.getOneAnime(req.params.animeId).then((foundAnime) => {
        res.json(foundAnime);
    })
})
/////////////////////ADD USER///////////////////////////////

animeRouter.post('/', function(req, res) {
    animeApi.addNewAnime(req.body).then((newAnime) => {
        res.json(newAnime);
    })
})

/////////////////EDIT USER/////////////////////////////////

animeRouter.put('/:animeId', function(req, res) {
    animeApi.editAnime(req.params.animeId, req.body).then((generAnime) => {
    res.json(generAnime)
    })
})

////////////////////DELETE USER/////////////////////////////

animeRouter.delete('/:animeId', function(req,res){
    animeApi.deleteAnime(req.params.animeId).then((noAnime) => {
        res.json(noAnime);
    })
  })

/* 
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
animeRouter.put('/:animeId', (req, res) => {
    animeApi.editAnime(req.params.animeId, req.body)
    .then(updatedAnime => {
        res.json(updatedAnime)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            massage: err.message
        })
    })
})
animeRouter.delete('/:animeId', (req, res) => {
    animeApi.deleteAnime(req.params.animeId)
    .then(deletedAnime => {
        res.json(deletedAnime)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
*/

module.exports = {
    animeRouter
}


