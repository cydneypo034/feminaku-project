import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import NavigationBar from './components/NavigationBar.js';
import users from './components/users.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <About />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={users} />
          </Switch>
        
        </Router>

      </React.Fragment>
    )
  }
}

export default App;
