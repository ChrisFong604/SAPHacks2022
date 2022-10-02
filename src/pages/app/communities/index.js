import { useSelector } from 'react-redux'
import styles from './communities.module.scss'

export default function Communities() {
  const { data } = useSelector((state) => state.app)

  return (
    <>
      <div style={styles.root}>
        <div className={styles.main_grid}>Wassup {data?.name}</div>
      </div>
    </>
  )
}
