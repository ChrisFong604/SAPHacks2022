import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import { images } from 'theme'
import { path } from 'utils/const'
import Login from './Login'
import Signup from './Signup'
import ResetPassword from './ResetPassword'
import styles from './auth.module.scss'

const Auth = () => (
  <div className={styles.root}>
    <div className={styles.leftContainer}>
      <img
        src="https://media.discordapp.net/attachments/1025178974290194492/1026030057371750451/logo.png"
        className={styles.logo}
        alt="logo"
      />
      <h1 className={styles.header}>
        Coordinate with your coworkers for working and socializing in-office
      </h1>
      <p className={styles.description}>
        Schedule your time • Socialize with teammates • Have fun while working
      </p>
    </div>
    <div className={styles.rightContainer}>
      <Switch>
        <Route path={path.login}>
          <Login />
        </Route>
        <Route path={path.signup}>
          <Signup />
        </Route>
        <Route path={path.resetPassword}>
          <ResetPassword />
        </Route>
        <Redirect to={path.login} />
      </Switch>
    </div>
  </div>
)

export default Auth
