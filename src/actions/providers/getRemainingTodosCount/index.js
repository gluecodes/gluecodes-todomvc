export default actionResults => actionResults.getTodos.reduce((acc, todo) => (acc + todo.isActive), 0)
