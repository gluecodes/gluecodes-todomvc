import styles from './styles.css'

export default () =>
  `<section class="${styles.main}">
    <input id="toggle-all" class="${styles['toggle-all']}" type="checkbox"/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul class="${styles['todo-list']}">
    </ul>
  </section>
`
