export default () => {
  const params = new URLSearchParams(global.location.search)

  return Array.from(params.keys()).reduce((acc, key) => ({
    ...acc,
    [key]: params.get(key)
  }), {})
}
