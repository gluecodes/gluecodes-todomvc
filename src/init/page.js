import * as commands from '../actions/commands'
import { createPageInitializer } from '@gluecodes/framework'
import * as providers from '../actions/providers'
import store from './store'

const getHeadingPosition = (node) => {
  const { top } = node.getBoundingClientRect()
  const extraTopMargin = 25

  return [
    0,
    top + global.document.documentElement.scrollTop - global.document.querySelector('nav').clientHeight - extraTopMargin
  ]
}

const scrollToHash = () => {
  if (global.location.hash) {
    const hash = global.location.hash.replace(/^#(jump-to-)?/, '')
    const headingNode = document.querySelector(`#${hash}`)

    if (headingNode) {
      global.scrollTo(0, 0)

      setTimeout(() => {
        global.scrollTo(...getHeadingPosition(headingNode))
        global.history.replaceState({}, '', decodeURIComponent(`${global.location.pathname}${global.location.search ? `?${global.location.search}` : ''}#jump-to-${hash}`))
      }, 0)
    }
  }
}

const setSmoothPageScrolling = () => {
  setTimeout(() => {
    const styleNode = global.document.createElement('style')

    styleNode.textContent = 'html{height: 100%;scroll-behavior:smooth}'
    global.document.head.appendChild(styleNode)
  }, 1000)
}

export default createPageInitializer({
  afterProviders: () => {
    if (global.outerWidth > 991.98) {
      setSmoothPageScrolling()
    }

    global.addEventListener('hashchange', () => scrollToHash())
    scrollToHash()
  },
  commands,
  providers,
  store
})
