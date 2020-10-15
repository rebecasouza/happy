import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OprhanagesMap';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
