
import { scroll } from '../../actions'

const initialState = 0

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case scroll.types.REQUEST:
      return payload
    default:
      return state
  }
}

export { initialState }
export default reducer
