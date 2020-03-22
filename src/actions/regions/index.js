import { createTypes, createActions } from '../../utils'
import config from '../../config'
import * as loading from '../loading'

export const types = createTypes('REGIONS:FETCH_ALL')
export const actions = createActions(types)

export const dispatch = () => async dispatch => {
  const query = `
  query {
    regions(sort: "_id:asc") {
      id
      name
      image {
        url
      }
    }
  }`

  const response = await fetch(`${config.baseUrl}/graphql`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  })

  if (response.ok) {
    const json = await response.json()

    dispatch(actions.request(json.data.regions))
    dispatch(loading.actions.request(false))
  }
}
