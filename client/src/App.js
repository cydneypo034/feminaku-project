import React from 'react';

const singleUser = ({name, originCity, age, instagram, favoriteAnime, favoriteFood}) => {
  return (
    <li>{name} - {originCity} - {age} - {instagram} - {favoriteAnime} - {favoriteFood} </li>
  )
}

const multipleUsers = (userinfo) => {
  return (
    <ul>{userinfo.map(singleUser)}</ul>
  )
}

function App() {
  const testUser = [{
    name: "Name : Lacy Adams",
    originCity: "Origin City: Norway",
    age: 19,
    instagram: "Instagram: @fixitfelix",
    favoriteAnime: "Favorite Anime: Attack on Titan",
    favoriteFood: "Favorite Food: Ramen"
  }, {
    name: "Name : Mary Adams",
    originCity: "Origin City: Norway",
    age: 19,
    instagram: "Instagram: @fixitfelix",
    favoriteAnime: "Favorite Anime: Attack on Titan",
    favoriteFood: "Favorite Food: Ramen"
  } ]
  return (
    <div>
      <h1>Feminaku</h1>
      {multipleUsers(testUser)}
    </div>
  );
}

export default App;
