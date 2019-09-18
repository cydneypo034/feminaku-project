import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AllUsers from "./components/allusers.component";
import CreateUser from "./components/createuser.component";
import EditUser from "./components/edituser.component";


class App extends Component {

  render() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={AllUsers} />
          <Route path="/create" component={CreateUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </React.Fragment>
  );
  }
}
  

export default App;

/*
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
  
  {multipleUsers(testUser)}
*/