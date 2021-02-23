import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './views/home'
import About from './views/about'
import RegisterPoke from './views/register-poke';
import ListPoke from './views/list-poke';
import DetailPoke from './views/detail-poke';
import Bonus from './views/bonus';

const Routes = () => (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register-poke" component={RegisterPoke} />
      <Route exact path="/list-poke" component={ListPoke} />
      <Route exact path="/detail-poke/:id" component={DetailPoke} />
      <Route exact path="/bonus" component={Bonus} />
    </Switch>
);

  export default Routes;
