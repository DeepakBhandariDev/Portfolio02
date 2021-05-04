import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './views/about'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={About} />
  </Switch>
)

export default Routes
