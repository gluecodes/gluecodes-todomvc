import renderer from '../../../../init/renderer'

import styles from './styles.css'

export default ({
  actionResults,
  actions
}) => (
  actionResults.getTodos.length > 0 ? (
    <footer className={styles.footer}>
      <span className={styles['todo-count']}><strong>{actionResults.getRemainingTodosCount}</strong> item left</span>
      <ul className={styles.filters}>
        <li>
          <a
            className={!actionResults.parseUrlQueryParams.filter ? styles.selected : ''}
            href="/"
            onclick={(e) => {
              e.preventDefault()
              actions.setTodosFilter('')
              actions.reload()
            }}>All</a>
        </li>
        <li>
          <a
            className={actionResults.parseUrlQueryParams.filter === 'active' ? styles.selected : ''}
            href="/?filter=active"
            onclick={(e) => {
              e.preventDefault()
              actions.setTodosFilter('active')
              actions.reload()
            }}>Active</a>
        </li>
        <li>
          <a
            className={actionResults.parseUrlQueryParams.filter === 'completed' ? styles.selected : ''}
            href="/?filter=completed"
            onclick={(e) => {
              e.preventDefault()
              actions.setTodosFilter('completed')
              actions.reload()
            }}>Completed</a>
        </li>
      </ul>
      {
        actionResults.getCompletedTodosCount > 0 ? (
          <button
            className={styles['clear-completed']}
            onclick={async () => {
              await actions.clearCompletedTodos()
              actions.reload()
            }}>Clear completed</button>
        ) : null
      }
    </footer>
  ) : null
)
