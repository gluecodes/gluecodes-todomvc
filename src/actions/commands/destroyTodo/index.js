import { getTodosFromStorage, storeTodos } from '../../../reusables/functions'

export default async (id) => {
  const existingTodos = await getTodosFromStorage()
  const targetTodoIndex = existingTodos.findIndex(todo => (todo.id === id))

  existingTodos.splice(targetTodoIndex, 1)
  storeTodos(existingTodos)
}
