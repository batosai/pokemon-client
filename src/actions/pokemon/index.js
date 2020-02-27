import { createTypes, createActions } from '../../utils'
import config from '../../config'
import * as loading from '../loading'

export const types = createTypes('POKEMON:FETCH_ONE')
export const actions = createActions(types)

export const dispatch = id => async dispatch => {
  const query = `
  query {
    pokemon(id: "${id}") {
      id
      name
      content
      size
      weight
      thumbnail { url }
      audioCry { url }
      audioDescription { url }
      audioName { url }
      images { url }
      types { id }
    }
  }`

  const response = await fetch(`${config.baseUrl}/graphql`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  })


  if (response.ok) {
    const json = await response.json()

    const types = json.data.pokemon.types.map(type => `"${type.id}"`)

    const q = `
    query {
      types(where: { id: [${types}] }) {
        name
      }
    }`

    const res = await fetch(`${config.baseUrl}/graphql`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: q })
    })

    if (res.ok) {
      const t = await res.json()
      json.data.pokemon.types = t.data.types

      dispatch(actions.request(json.data.pokemon))
      dispatch(loading.actions.request(false))
    }
  }
}
