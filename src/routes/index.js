import React from 'react'
import { Switch, Route } from 'react-router-dom'

import pathUrl from './pathUrl'

const Routes = () => (
  <Switch>
    {pathUrl.map(route => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact
      />
    ))}
  </Switch>
)

export default Routes
