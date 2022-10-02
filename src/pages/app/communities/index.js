import { useSelector } from 'react-redux'
import styles from './communities.module.scss'

export default function Communities() {
  const { me } = useSelector((state) => state.app)

  return (
    <>
      <div style={styles.root}>
        <div className={styles.main_grid}>Communities page + {me}</div>
      </div>
    </>
  )
}
