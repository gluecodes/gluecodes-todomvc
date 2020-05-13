import footer from '../../reusables/footers/public/prerender'
import header from '../../reusables/headers/public/prerender'
import list from './slots/list/prerender'
import bottomBar from './slots/bottomBar/prerender'
import styles from './styles.css'

export default () => `
   <div id="layout">
    <section class="${styles.todoapp}">
      ${header()}
      ${list()}
      ${bottomBar()}
    </section>
    ${footer()}
  </div>
`
