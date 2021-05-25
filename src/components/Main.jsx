import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import ProductPage from './ProductPage';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about-us' component={AboutUs}></Route>
      <Route exact path="/product/:id" component={ProductPage}></Route>
    </Switch>
  );
}

export default Main;