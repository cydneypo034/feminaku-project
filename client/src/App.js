import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import theseUsers from './components/user-lists.js'
import createUser from './components/createUser.js';
import editUser from './components/editUser.js';
import user from './components/user.js';
import UsersAnime from './components/userAnime.js';
import CreateAnime from './components/createAnime.js';
import EditAnime from './components/editAnime.js';
import CreateClothes from './components/createClothes.js';
import UsersClothes from './components/user-clothes.js';
import EditClothes from './components/editClothes.js';
import Nav from './components/navbar.js';

class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={user} />
              <Route path="/allusers" component={theseUsers} />
              <Route path="/create" component={createUser} />
              <Route path="/edit/:id" component={editUser} />
              <Route path="/allanime" component={UsersAnime} />
              <Route path="/createAnime" component={CreateAnime} />
              <Route path="/editanime/:id" component={EditAnime} />
              <Route path="/allclothes" component={UsersClothes} />
              <Route path="/createClothes" component={CreateClothes} />
              <Route path="/editclothes/:id" component={EditClothes} />
              </Switch>
             
      </Router>
    </React.Fragment>
)     
  }
}

export default App;
