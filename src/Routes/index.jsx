import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { App, Login } from '../components';

export default () => (
  // <div className>
  //   <div>
  //     Permanent placement of header
  //   </div>
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </Router>
  // </div>
);
