import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './admin/Dashboard'
import Login from './admin/Login'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/admin" component={Dashboard} />
              <Route path="/admin/login" component={Login} />
          </div>
      </Router>
    );
  }
}

export default App;
