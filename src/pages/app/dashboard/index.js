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
          <h3 className={styles.introL}>Whats happening?</h3>
        </div>
        <div className={styles.flexboxItem2}>
          <h3 className={styles.introR}>Whos in?</h3>
        </div>
      </div>

      <div className={styles.BIGflexbox}>
        <div className={styles.SMALLflexbox1}>
          <div className={styles.MINIflexboxEvent}>
            <body className={styles.EventComponent1}>Code with Cats</body>
            <img
              src="https://media.discordapp.net/attachments/1025178616952266814/1026140125828231259/Image.png"
              className={styles.EventComponent4}
              alt="team"
            />
            <h3 className={styles.EventComponent2}>
              You get to code with cats around you!
            </h3>
            <h3 className={styles.EventComponent3}>Today in 10min</h3>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <body className={styles.EventComponent1}>Code with Cats</body>
            <img
              src="https://media.discordapp.net/attachments/1025178616952266814/1026140125828231259/Image.png"
              className={styles.EventComponent4}
              alt="team"
            />
            <h3 className={styles.EventComponent2}>
              You get to code with cats around you!
            </h3>
            <h3 className={styles.EventComponent3}>Today in 10min</h3>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <body className={styles.EventComponent1}>Code with Cats</body>
            <img
              src="https://media.discordapp.net/attachments/1025178616952266814/1026140125828231259/Image.png"
              className={styles.EventComponent4}
              alt="team"
            />
            <h3 className={styles.EventComponent2}>
              You get to code with cats around you!
            </h3>
            <h3 className={styles.EventComponent3}>Today in 10min</h3>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <body className={styles.EventComponent1}>Code with Cats</body>
            <img
              src="https://media.discordapp.net/attachments/1025178616952266814/1026140125828231259/Image.png"
              className={styles.EventComponent4}
              alt="team"
            />
            <h3 className={styles.EventComponent2}>
              You get to code with cats around you!
            </h3>
            <h3 className={styles.EventComponent3}>Today in 10min</h3>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <body className={styles.EventComponent1}>Code with Cats</body>
            <img
              src="https://media.discordapp.net/attachments/1025178616952266814/1026140125828231259/Image.png"
              className={styles.EventComponent4}
              alt="team"
            />
            <h3 className={styles.EventComponent2}>
              You get to code with cats around you!
            </h3>
            <h3 className={styles.EventComponent3}>Today in 10min</h3>
          </div>
          <div className={styles.MINIflexboxEvent}>
            <body className={styles.EventComponent1}>Code with Cats</body>
            <img
              src="https://media.discordapp.net/attachments/1025178616952266814/1026140125828231259/Image.png"
              className={styles.EventComponent4}
              alt="team"
            />
            <h3 className={styles.EventComponent2}>
              You get to code with cats around you!
            </h3>
            <h3 className={styles.EventComponent3}>Today in 10min</h3>
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
