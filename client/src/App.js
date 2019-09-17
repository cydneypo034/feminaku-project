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
    name: "Lacy Adams",
    originCity: "Norway",
    age: 19,
    instagram: "@fixitfelix",
    favoriteAnime: "Attack on Titan",
    favoriteFood: "Ramen"
  }, {name: "Mary Adams",
  originCity: "Norway",
  age: 19,
  instagram: "@fixitfelix",
  favoriteAnime: "Attack on Titan",
  favoriteFood: "Ramen"} ]
  return (
    <div>
      <h1>Hello World</h1>
      {multipleUsers(testUser)}
    </div>
  );
}

export default App;
