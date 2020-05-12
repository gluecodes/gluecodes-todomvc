export default async (todos) => {
  global.localStorage.setItem('gluecodes_todos', JSON.stringify(todos))
}
