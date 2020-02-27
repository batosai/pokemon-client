
import { pokemon } from '../../actions'

const initialState = {
  name: '',
  size: '',
  weight: '',
  types: [],
  description: '',
  audioCry: '',
  audioName: '',
  descriptionName: '',
  images: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case pokemon.types.REQUEST:
      return Object.assign({}, state, payload)
    default:
      return state
  }
}

export { initialState }
export default reducer
