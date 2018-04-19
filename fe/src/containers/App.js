import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './admin/Dashboard'
import Login from './admin/Login'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/admin/login" component={Login} />
              <Route path="/admin/dashboard" component={Dashboard} />
          </div>
      </Router>
    );
  }
}

export default App;
