import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RegisterForm from '../auth/RegisterForm';

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
        </Switch>
      </Router>
    </div>
  );
}
