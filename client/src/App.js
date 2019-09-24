import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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

class App extends React.Component {
  render() {
    return (
      <Router>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">Feminaku</Link> 
              <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/allusers" className="nav-link">All Users</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create User</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/allanime" className="nav-link">All Anime</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/createAnime" className="nav-link">Enter An Anime</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/allclothes" className="nav-link">All Merch</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/createClothes" className="nav-link">Enter Clothes</Link>
                  </li>
                  
                </ul>
              </div>
              
            </nav>
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
    </Router>
)     
  }
}

export default App;

/*



<Router>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand">Feminaku</Link> 
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/allusers" className="nav-link">All Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create User</Link>
              </li>
              <li className="navbar-item">
                <Link to="/allanime" className="nav-link">All Anime</Link>
              </li>
              <li className="navbar-item">
                <Link to="/createAnime" className="nav-link">Enter An Anime</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
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