import footer from '../../reusables/footers/public/prerender'
import header from '../../reusables/headers/public/prerender'
import list from './slots/list/prerender'

export default () => `
   <div id="layout">
    ${header()}
    ${list()}
    ${footer()}
  </div>
`
