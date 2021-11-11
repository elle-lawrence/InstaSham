import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Browse from '../views/Browse';
import Create from '../views/Create';
import Hearts from '../views/Hearts';
import Feed from '../views/Feed';
import User from '../views/User';
import Login from '../views/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/feed']} component={Feed} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/hearts" component={Hearts} />
      <Route exact path="/sham/:uid" component={User} />
    </Switch>
  );
}
