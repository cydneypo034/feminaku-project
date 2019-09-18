const express = require('express')

const clothesApi = require('../models/clothes.js')

const clothesRouter = express.Router()


//HTTP Requests
// 
clothesRouter.get('/', (req, res) => {
    clothesApi.getAllClothes()
    .then(clothes => {
        res.json(clothes)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
clothesRouter.get('/:clothesId', (req, res) => {
    clothesApi.getOneClothes(req.params.clothesId)
    .then(oneclothes => {
        res.json(oneclothes)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
clothesRouter.post('/', (req, res) => {
    clothesApi.addNewClothes(req.body)
    .then(newClothes => {
        res.json(newClothes)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

clothesRouter.put('/:clothesId', (req, res) => {
    clothesApi.editClothes(req.params.clothesId, req.body)
    .then(updatedClothes => {
        res.json(updatedClothes)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            massage: err.message
        })
    })
})

/* DO NOt Use
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
*/

module.exports = {
    clothesRouter
}


