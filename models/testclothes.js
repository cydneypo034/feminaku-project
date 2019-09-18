const clothesApi = require('./clothes.js')

clothesApi.getAllClothes().then((allAClothesinDB) => {
    console.log(allAClothesinDB)
})

clothesApi.createClothes().then((newClothes) => {
    console.log(newClothes)
})

clothesApi.addNewClothes().then((addClothesinDb) =>  {
    console.log(addClothesinDb)
})