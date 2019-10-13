const express = require('express')

const clothesApi = require('../models/clothes.js')

const clothesRouter = express.Router()


//HTTP Requests
// 
///////////////////GET ALL USERS/////////////////////////////
clothesRouter.get('/', function (req, res) {
    clothesApi.getAllClothes().then((clothes) => {
        res.send(clothes)
    })
})
/////////////////////GET ONE USER//////////////////////////
clothesRouter.get('/:clothesId', function(req,res){
    clothesApi.getOneClothes(req.params.clothesId).then((foundClothes) => {
        res.send(foundClothes);
    })
})

/////////////////////ADD USER///////////////////////////////

clothesRouter.post('/', function(req, res) {
    clothesApi.addNewClothes(req.body).then((newClothes) => {
        res.send(newClothes);
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


module.exports = {
    clothesRouter
}


