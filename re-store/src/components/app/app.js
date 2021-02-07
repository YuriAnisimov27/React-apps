import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home-page';
import CardPage from '../pages/card-page';
import ShopHeader from '../shop-header/shop-header';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={222}/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/card' component={CardPage}/>
      </Switch>
      <ShoppingCartTable />
    </main>
  );
};

export default App;
