import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Experience from './Experience';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Experience" component={Experience} />
              <Route exact path="/Projects" component={Projects} />
            </Switch>
           </React.Fragment>
        </Router>
    );
  }
}

export default App;
