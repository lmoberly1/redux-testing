import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import RegisterForm from './auth/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
