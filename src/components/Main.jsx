import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about-us' component={AboutUs}></Route>
    </Switch>
  );
}

export default Main;