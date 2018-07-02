import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {DashboardPage, AgencyRegisterPage, LoginPage} from 'components/index'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/login" component={LoginPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/agency/register" component={AgencyRegisterPage} />
          </div>
      </Router>
    );
  }
}

export default App;
