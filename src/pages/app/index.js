import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { images } from 'theme'
import { path } from 'utils/const'
import styles from './app.module.scss'

const App = () => (
  <div className={styles.root}>
    <div className={styles.leftContainer}>
      <img src={images.logo} className={styles.logo} alt="logo" />
      <h1 className={styles.header}>👋 React Firebase Boilerplate</h1>
      <p className={styles.title}>What’s includes?</p>
      <p className={styles.description}>
        Firebase Authentication | Firebase Hosting | Firestore | Firebase
        Storage | Storybook | Prettier | Eslint | Jest | Bundle Analizer | Redux
        | React Router Dom ...and more!
      </p>
      <p className={styles.prompt}>Try it and check how it works 👉</p>
    </div>
    <div className={styles.rightContainer}>
      <Switch>
        <Route path={path.login}>
          <p>path</p>
        </Route>
        <Route path={path.signup}>
          <p>signup</p>
        </Route>
        <Route path={path.resetPassword}>
          <p>resetpassword</p>
        </Route>
        <Redirect to={path.login} />
      </Switch>
    </div>
  </div>
)

export default Auth
