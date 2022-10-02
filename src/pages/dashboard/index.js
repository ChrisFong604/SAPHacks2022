import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import { images } from 'theme'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.app)
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={images.logo} className={styles.logo} alt="logo" />
        <h3 className={styles.greeting}>{`Hi👋, ${me?.name || 'User\n'}`}</h3>
        <h1 className={styles.title}>CoSync</h1>
        <p className={styles.description}>
          {'\n'}
          Sync with like-minded communities at
          <h4 color="white">
            {`${me?.office || 'Somewhere in the Universe'}`}
          </h4>
          {'\n'}
          or branch out to something new, with people there to support you!
        </p>

        <div className={styles.buttonContainer}>
          <Button
            label="Download for free"
            className={`btn-purple-fill ${styles.download}`}
            onClick={() => {
              window.location.href =
                'https://github.com/WataruMaeda/react-firebase-boilerplate'
            }}
          />
          <Button
            label="Logout"
            className={`btn-purple-outline ${styles.logout}`}
            onClick={() => dispatch(actions.logout())}
          />
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
