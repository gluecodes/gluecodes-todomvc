import styles from './styles.css'

export default () => `
  <header class="${styles.header}">
    <h1>todos</h1>
    <input
      attributes=${{
        autofocus: ''
      }}
      class="${styles['new-todo']}"
      placeholder="What needs to be done?"
      />
  </header>
`
