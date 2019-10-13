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



module.exports = {
    animeRouter
}


