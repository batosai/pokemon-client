
import { regions } from '../../actions'

const initialState = []

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case regions.types.REQUEST:
      return Object.assign([], state, payload)
    default:
      return state
  }
}

export { initialState }
export default reducer
