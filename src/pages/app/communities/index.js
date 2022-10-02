import styles from './communities.module.scss'

const communities = [
  {
    name: 'SAP Mountaineers',
    description:
      'A local community in Vancouver for those who love traversing the peaks and valleys of British Columbia! Anyone is welcome!',
    location: 'Yaletown, Vancouver',
  },
  {
    name: 'SAP Pride Vancouver',
    description:
      'LGBT pride is the promotion of the self-affirmation, dignity, equality, and increased visibility of lesbian, gay, bisexual, and transgender (LGBT).',
    location: 'Yaletown, Vancouver',
  },
  {
    name: 'SAP Indigenous',
    description:
      'Representing the Indigenous population of British Columbia at SAP',
    location: 'Canada',
  },
  {
    name: 'SAP Gourmet Chef club',
    description:
      'Cooking, cookery, or culinary arts is the art, science and craft of using heat to prepare food for consumption',
    location: 'Britz, Berlin',
  },
  {
    name: 'SAP birdie slappers',
    description:
      'A community dedicated to those who enjoy the sport of badminton. Weekly game nights are held at the SAP offices!',
    location: 'Yaletown, Vancouver',
  },
  {
    name: 'SAP Anime club',
    description:
      'Anime is hand-drawn and computer-generated animation originating from Japan. Outside of Japan and in English, anime refers specifically to animation produced in Japan.',
    location: 'Yaletown, Vancouver',
  },
]

const HorizontalCard = ({ community }) => (
  <div className={styles.box}>
    <div className={styles.name}>{community.name}</div>
    <div className={styles.description}>{community.description}</div>
    <div className={styles.location}>{community.location}</div>
  </div>
)

export default function Communities() {
  return (
    <div>
      <div className={styles.title}>Communities page</div>
      <img
        alt="search bar"
        style={{ height: 75, marginLeft: '290px', marginBottom: '36px' }}
        src="https://cdn.discordapp.com/attachments/1025178974290194492/1026213068885209179/unknown.png"
      />
      <div className={styles.maingrid}>
        {communities.map((community) => (
          <HorizontalCard key={community.name} community={community} />
        ))}
      </div>
    </div>
  )
}
