import renderer from '../../../init/renderer'
import styles from './styles.css'

export default ({
  actionResults
}) => (
  <header className={styles.header}>
    <h1>todos</h1>
    <input className={styles['new-todo']} placeholder="What needs to be done?" autoFocus/>
  </header>
)
