import renderer from '../../../../init/renderer'

import styles from './styles.css'

export default ({
  actionResults
}) => (
  <footer className={styles.footer}>
    {/* This should be `0 items left` by default */}
    <span className={styles['todo-count']}><strong>0</strong> item left</span>
    {/* Remove this if you don't implement routing */}
    <ul className={styles.filters}>
      <li>
        <a className={styles.selected} href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    {/* Hidden if no completed items are left ↓ */}
    <button className={styles['clear-completed']}>Clear completed</button>
  </footer>
)
