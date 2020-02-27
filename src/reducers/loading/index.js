
import { loading } from '../../actions'

const initialState = {
  open: true,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loading.types.REQUEST:
      return Object.assign({}, state, { open: payload })
    default:
      return state
  }
}

export { initialState }
export default reducer
