import * as commands from '../actions/commands'
import { createPageInitializer } from '@gluecodes/framework'
import * as providers from '../actions/providers'
import store from './store'

export default createPageInitializer({
  commands,
  providers,
  store
})
