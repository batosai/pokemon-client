
import { pokedex } from '../../actions'

const initialState = { id: null }

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case pokedex.types.REQUEST:
      return Object.assign({}, state, { id: payload })
    default:
      return state
  }
}

export { initialState }
export default reducer
