import renderer from '../../../../init/renderer'

import styles from './styles.css'

let isTodoBeingSaved = false

export default ({
  actionResults,
  actions
}) => (
  <section className={styles.main}>
    {
      actionResults.getTodos.length > 0 ? [
        <input
          id="toggle-all"
          className={styles['toggle-all']}
          type="checkbox"
          onchange={async (e) => {
            await actions.markAllTodosAs(e.target.checked)
            actions.reload()
          }}/>,
          <label htmlFor="toggle-all">Mark all as complete</label>
      ] : null
    }
    <ul className={styles['todo-list']}>
      {
        actionResults.getFilteredTodos.map(todo => (
          <li
            className={`${!todo.isActive ? styles.completed : ''} ${todo.id === actionResults.makeTodoEditable ? styles.editing : ''}`}
            ondblclick={() => {
              actions.makeTodoEditable(todo.id)
            }}>
            <div className={styles.view}>
              <input
                className={styles.toggle}
                type="checkbox"
                checked={!todo.isActive}
                onchange={async (e) => {
                  await actions.modifyTodo(todo.id, { isActive: !e.target.checked })
                  actions.reload()
                }}/>
              <label>{todo.title}</label>
              <button
                className={styles.destroy}
                onclick={async () => {
                  await actions.destroyTodo(todo.id)
                  actions.reload()
                }}/>
            </div>
            {
              todo.id === actionResults.makeTodoEditable ? (
                <input
                  className={styles.edit}
                  value={todo.title}
                  gc-onceDomNodeVisited={(node) => {
                    node.focus()
                  }}
                  onkeyup={async (e) => {
                    if (e.key === 'Enter') {
                      if (e.target.value.trim() !== '') {
                        isTodoBeingSaved = true
                        await actions.modifyTodo(todo.id, { title: e.target.value })
                      } else {
                        await actions.destroyTodo(todo.id)
                      }

                      actions.makeTodoEditable(null)
                      isTodoBeingSaved = false
                      actions.reload()
                    }
                  }}
                  onblur={async (e) => {
                    if (!isTodoBeingSaved) {
                      if (e.target.value.trim() !== '') {
                        await actions.modifyTodo(todo.id, { title: e.target.value })
                      } else {
                        await actions.destroyTodo(todo.id)
                      }

                      actions.makeTodoEditable(null)
                      actions.reload()
                    }
                  }}/>
              ) : null
            }
          </li>
        ))
      }
    </ul>
  </section>
)
