import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import {Layout} from './components/Layout.js';
import  NavigationBar from './components/NavigationBar.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
