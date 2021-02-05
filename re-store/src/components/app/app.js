import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home-page';
import CardPage from '../pages/card-page';
import './app.css';

const App = () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path='/card' component={CardPage}/>
    </Switch>
  );
};

export default App;
