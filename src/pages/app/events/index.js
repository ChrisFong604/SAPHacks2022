import React from 'react'
import styles from './events.module.scss'

const upcomingEvents = [
  { name: 'Board games night', date: 'Oct 6, 7:00p.m - 9:00p.m' },
  { name: 'Pride Gathering', date: 'Oct 9th, All day' },
  { name: 'Tetris Tirade', date: 'Oct 9th, 7:00p.m - 9:00p.m' },
  { name: 'Seawall Bike Trip', date: 'Oct 10th, 8:00a.m - 12:00p.m' },
  { name: 'Jazz/Karaoke Night', date: 'Oct 12th, 6:00 - 11:00p.m' },
  { name: 'Board games night', date: 'Oct 17th, 7:00 - 9:00p.m' },
  { name: 'Beer Friday', date: 'Oct 21st, 6:00p.m' },
  { name: 'Dine-in night', date: 'Oct 25th, 6:00 - 11:00p.m' },
  { name: 'League of Legends tournament', date: 'Oct 27th, 5:30p.m - 9:00p.m' },
]

const HorizontalCard = ({ event }) => (
  <div className={styles.box}>
    <div className={styles.name}>{event.name}</div>
    <div className={styles.date}>{event.date}</div>
  </div>
)

export default function Events() {
  return (
    <div>
      <div className={styles.title}>Events page</div>
      <img
        alt="search bar"
        style={{ height: 75, marginLeft: '290px', marginBottom: '36px' }}
        src="https://cdn.discordapp.com/attachments/1025178974290194492/1026213068885209179/unknown.png"
      />
      <div className={styles.maingrid}>
        {upcomingEvents.map((event) => (
          <HorizontalCard key={event.date} event={event} />
        ))}
      </div>
    </div>
  )
}
