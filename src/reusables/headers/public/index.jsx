import renderer from '../../../init/renderer'
import styles from './styles.css'

export default ({
  actions
}) => (
  <header className={styles.header}>
    <h1>todos</h1>
    <input
      attributes={{
        autofocus: ''
      }}
      className={styles['new-todo']}
      placeholder="What needs to be done?"
      onkeyup={async (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
          await actions.addTodo(e.target.value)
          e.target.value = ''
          actions.reload()
        }
      }}/>
  </header>
)
