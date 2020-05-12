import { getTodosFromStorage } from '../../../reusables/functions/index'

export default async (actionResults) => {
  const todos = await getTodosFromStorage()

  return todos.filter(todo => (
    !actionResults.parseUrlQueryParams.filter ||
      (actionResults.parseUrlQueryParams.filter === 'active' && todo.isActive) ||
      (actionResults.parseUrlQueryParams.filter === 'completed' && !todo.isActive)
  ))
}
