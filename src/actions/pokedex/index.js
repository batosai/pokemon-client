import { createTypes, createActions } from '../../utils'

export const types = createTypes('POKEDEX')
export const actions = createActions(types)

export const dispatch = id => dispatch => {
  dispatch(actions.request(id))
}
