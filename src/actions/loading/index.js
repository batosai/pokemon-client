import { createTypes, createActions } from '../../utils'

export const types = createTypes('LOADING:TOGGLE')
export const actions = createActions(types)

export const dispatch = visible => dispatch => {
  dispatch(actions.request(visible))
}
