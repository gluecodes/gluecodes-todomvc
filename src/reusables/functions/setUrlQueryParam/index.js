export default ({
  name,
  value
}) => {
  const params = new URLSearchParams(global.location.search)
  params.set(name, value)
  global.history.replaceState({}, '', decodeURIComponent(`${global.location.pathname}?${params}`))
}
