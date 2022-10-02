import NavBar from 'components/NavBar'
import Dashboard from 'pages/dashboard'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { path } from 'utils/const'
// import styles from './app.module.scss'

const App = () => (
  <div>
    <NavBar top fluid light full expand />

    <Switch>
      <Route path={path.dashboard}>
        <Dashboard />
      </Route>
      <Route path={path.workspaces}>
        <p>workspaces</p>
      </Route>
      <Route path={path.communities}>
        <p>communities</p>
      </Route>
      <Route path={path.events}>
        <p>events</p>
      </Route>
      <Route path={path.teams}>
        <p>teams</p>
      </Route>
      <Redirect to={path.dashboard} />
    </Switch>
  </div>
)

export default App
