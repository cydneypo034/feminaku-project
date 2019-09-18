const animeApi = require('./anime.js')

animeApi.getAllAnime().then((allAnimeinDB) => {
    console.log(allAnimeinDB)
})

animeApi.createAnime().then((newDBClass) => {
    console.log(newDBClass)
})

animeApi.addNewAnime().then((addAnimeToDB) =>  {
    console.log(addAnimeToDB)
})