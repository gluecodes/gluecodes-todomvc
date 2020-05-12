export default async () => JSON.parse(global.localStorage.getItem('gluecodes_todos') || '[]')
