import { getTodosFromStorage, storeTodos } from '../../../reusables/functions'

export default async (id, data) => {
  const existingTodos = await getTodosFromStorage()
  const targetTodoIndex = existingTodos.findIndex(todo => (todo.id === id))

  existingTodos[targetTodoIndex] = {
    ...existingTodos[targetTodoIndex],
    ...data
  }

  storeTodos(existingTodos)
}
