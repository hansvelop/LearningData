import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {DashboardPage, MemberJoinPage, LoginPage, WorkerPage} from 'components'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/login" component={LoginPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/worker" component={WorkerPage} />
              <Route path="/join" component={MemberJoinPage} />
          </div>
      </Router>
    );
  }
}

export default App;
