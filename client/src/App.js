import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import NavigationBar from './components/NavigationBar.js';
import AllAnime from './components/allAnime.js';
import AllClothes from './components/allClothes.js';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/api/anime" component={AllAnime} />
            <Route path="/api/clothes" component={AllClothes} />
          </Switch>
        </Router>

      </React.Fragment>
    )
  }
}

export default App;
