import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Addition from './pages/Addition/Addition';
import Subtraction from './pages/Subtraction/Subtraction';
import Multiplication from './pages/Multiplication/Multiplication';
import Division from './pages/Division/Division';
import './assets/styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/addition" component={Addition} />
        <Route path="/subtraction" component={Subtraction} />
        <Route path="/multiplication" component={Multiplication} />
        <Route path="/division" component={Division} />
        <Route path="/" exact>
          <h1>Welcome to the Calculator App</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;