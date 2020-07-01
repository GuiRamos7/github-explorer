import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Repository } from 'pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
};

export default Routes;
