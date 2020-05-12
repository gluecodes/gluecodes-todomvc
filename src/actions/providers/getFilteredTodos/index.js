export default async actionResults => (
  actionResults.getTodos.filter(todo => (
    !actionResults.parseUrlQueryParams.filter ||
    (actionResults.parseUrlQueryParams.filter === 'active' && todo.isActive) ||
    (actionResults.parseUrlQueryParams.filter === 'completed' && !todo.isActive)
  ))
)
