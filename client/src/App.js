import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import  NavigationBar from './components/NavigationBar.js';
import AddUser from './components/AddUser.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/adduser" component={AddUser} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
