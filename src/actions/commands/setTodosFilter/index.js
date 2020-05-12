import { setUrlQueryParam } from '../../../reusables/functions/index'

export default async (value) => {
  setUrlQueryParam({
    name: 'filter',
    value
  })
}
