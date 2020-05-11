import renderer from '../../../../init/renderer'

import styles from './styles.css'

export default ({
  actionResults
}) => (
  <section className={styles.main}>
    <input id="toggle-all" className={styles['toggle-all']} type="checkbox"/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className={styles['todo-list']}>
      {/* These are here just to show the structure of the list items */}
      {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
      <li className={styles.completed}>
        <div className={styles.view}>
          <input className={styles.toggle} type="checkbox" checked/>
          <label>Taste JavaScript</label>
          <button className={styles.destroy}/>
        </div>
        <input className={styles.edit} value="Create a TodoMVC template"/>
      </li>
      <li>
        <div className={styles.view}>
          <input className={styles.toggle} type="checkbox"/>
          <label>Buy a unicorn</label>
          <button className={styles.destroy}/>
        </div>
        <input className={styles.edit} value="Rule the web"/>
      </li>
    </ul>
  </section>
)
