import footer from '../../reusables/footers/public/index.jsx'
import header from '../../reusables/headers/public/index.jsx'
import initPage from '../../init/page'
import renderPage from './layout.jsx'
import * as slots from './slots/index'

initPage({
  providers: [

  ],
  rootNode: global.document.querySelector('#layout'),
  renderPage,
  slots: {
    ...slots,
    footer,
    header
  }
})
