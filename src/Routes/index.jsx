import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  App, Login, Register, Test,
} from '../components';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/test" exact component={Test} />
    </Switch>
  </Router>
);
