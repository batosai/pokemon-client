
import { pokemons } from '../../actions'

const initialState = []

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case pokemons.types.REQUEST:
      return Object.assign([], state, payload)
    case pokemons.types.RESET:
      return []
    default:
      return state
  }
}

export { initialState }
export default reducer
