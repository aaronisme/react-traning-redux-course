import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HomeContainer, compoentWrapper } from '../containers';

const Routes = () => (
  <HashRouter>
    <Route path="/" component={compoentWrapper(HomeContainer)} />
  </HashRouter>
);

export default Routes;
