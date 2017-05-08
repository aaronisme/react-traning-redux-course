import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { HomeContainer, MainContainer, AuthContainer } from '../containers';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <Route path="auth" component={AuthContainer} />
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

export default Routes;
