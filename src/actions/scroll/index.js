import { createTypes, createActions } from '../../utils'

export const types = createTypes('SCROLL:POSITION')
export const actions = createActions(types)

export const dispatch = position => dispatch => {
  dispatch(actions.request(position))
}
