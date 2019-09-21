import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import theseUsers from './components/user-lists.js'
import createUser from './components/createUser.js';
import editUser from './components/editUser.js';
import user from './components/user.js';
import UsersAnime from './components/userAnime.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Feminaku</Link> 
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/allusers" className="nav-link">All Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={user} />
        <Route path="/allusers" component={theseUsers} />
        <Route path="/create" component={createUser} />
        <Route path="/edit/:id" component={editUser} />
        <Route path="/anime/:id" component={UsersAnime} />
        </div>
        
        </Router>
      )
  }
}

export default App;

/*
import Home from './components/Home.js';
import About from './components/About.js';
import NavigationBar from './components/NavigationBar.js';
import user from './components/user.js';
<React.Fragment>
        <NavigationBar />
        <About />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={user} />
          </Switch>
        
        </Router>

      </React.Fragment>
*/