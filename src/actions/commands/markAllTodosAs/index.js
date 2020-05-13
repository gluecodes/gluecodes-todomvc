import { getTodosFromStorage, storeTodos } from '../../../reusables/functions'

export default async (isCompleted) => {
  const existingTodos = await getTodosFromStorage()

  for (const todo of existingTodos) {
    todo.isActive = !isCompleted
  }

  storeTodos(existingTodos)
}
