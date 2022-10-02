import NavBar from 'components/NavBar'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { images } from 'theme'
import { path } from 'utils/const'
import styles from './app.module.scss'

const App = () => (
  <>
    <NavBar />
    <Switch>
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
      <Redirect to={path.login} />
    </Switch>
  </>
)

export default App
