import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.app)
  return (
    <div className={styles.root}>
      <h2 className={styles.greeting}>{`Hey👋 ${me?.name || 'User\n'}!`}</h2>

      <div className={styles.flexboxContainer}>
        <div className={styles.flexboxItem1}>
          <h4 className={styles.introL}>Whats happening?</h4>
        </div>
        <div className={styles.flexboxItem2}>
          <h4 className={styles.introR}>Whos in?</h4>
        </div>
      </div>

      <div className={styles.BIGflexbox}>
        <div className={styles.SMALLflexbox1}>
          <div className={styles.MINIflexboxEvent}>
            <h4 className={styles.EventComponent}>Whats happening?</h4>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <h4 className={styles.EventComponent}>Whats happening?</h4>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <h4 className={styles.EventComponent}>Whats happening?</h4>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <h4 className={styles.EventComponent}>Whats happening?</h4>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <h4 className={styles.EventComponent}>Whats happening?</h4>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <h4 className={styles.EventComponent}>Whats happening?</h4>
          </div>
        </div>

        <div className={styles.SMALLflexbox2}>
          <div className={styles.MINIflexboxTeam}>
            <img
              src="https://cdn.discordapp.com/attachments/1025178974290194492/1026087737448747129/Screenshot_4.png"
              className={styles.TeamComponent}
              alt="team"
            />
          </div>
          <div className={styles.MINIflexboxTeam}>
            <img
              src="https://cdn.discordapp.com/attachments/1025178974290194492/1026087737448747129/Screenshot_4.png"
              className={styles.TeamComponent}
              alt="team"
            />
          </div>
          <div className={styles.MINIflexboxTeam}>
            <img
              src="https://cdn.discordapp.com/attachments/1025178974290194492/1026087737448747129/Screenshot_4.png"
              className={styles.TeamComponent}
              alt="team"
            />
          </div>
          <div className={styles.MINIflexboxTeam}>
            <img
              src="https://cdn.discordapp.com/attachments/1025178974290194492/1026087737448747129/Screenshot_4.png"
              className={styles.TeamComponent}
              alt="team"
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          label="Logout"
          className={`btn-purple-outline ${styles.logout}`}
          onClick={() => dispatch(actions.logout())}
        />
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
