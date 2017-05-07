import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HomeContainer, MainContainer } from '../containers';

const App = () => (
  <MainContainer>
    <HomeContainer />
  </MainContainer>
);

const Routes = () => (
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>
);

export default Routes;
