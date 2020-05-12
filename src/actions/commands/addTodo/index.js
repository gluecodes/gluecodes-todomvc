import { getTodosFromStorage, storeTodos } from '../../../reusables/functions/index'

const generateId = title => `${Math.random().toString(36).substr(2, 9)}${btoa(title)}`

export default async (title) => {
  const existingTodos = await getTodosFromStorage()

  storeTodos([
    {
      id: generateId(title),
      title,
      isActive: true
    },
    ...existingTodos
  ])
}
