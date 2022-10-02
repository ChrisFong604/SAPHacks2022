import NavBar from 'components/NavBar'
import Dashboard from 'pages/app/dashboard'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { path } from 'utils/const'
import Communities from './communities'
import Events from './events'
import Teams from './teams'
import Workspaces from './workspaces'
// import styles from './app.module.scss'

const App = () => (
  <div>
    <NavBar top fluid light full expand />

    <Switch>
      <Route path={path.dashboard}>
        <Dashboard />
      </Route>
      <Route path={path.workspaces}>
        <Workspaces />
      </Route>
      <Route path={path.communities}>
        <Communities />
      </Route>
      <Route path={path.events}>
        <Events />
      </Route>
      <Route path={path.teams}>
        <Teams />
      </Route>
      <Redirect to={path.dashboard} />
    </Switch>
  </div>
)

export default App
