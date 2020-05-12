import { getTodosFromStorage, storeTodos } from '../../../reusables/functions'

export default async () => {
  const existingTodos = await getTodosFromStorage()
  const completedTodos = existingTodos
    .filter(todo => (!todo.isActive))
    .map(todo => existingTodos.indexOf(todo))
    .reverse()

  for (const todoIndex of completedTodos) {
    existingTodos.splice(todoIndex, 1)
  }

  storeTodos(existingTodos)
}
