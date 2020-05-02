import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Home, Projects, JS30 } from './components';

export const ROUTES = {
  'ABOUT': 1,
  'CONTACT': 2,
  'PROJECTS': 3,
  'RESUME': 4
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route: ROUTES.ABOUT
    }
  }

  render() {

    const route = this.state.route;

    return (
      <div className="App">
        <Router>
          <div className="header">
            <Navbar />
          </div>
          <div className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/javascript30" component={JS30} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
