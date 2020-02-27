import { createTypes, createActions } from '../../utils'
import config from '../../config'
import * as loading from '../loading'
import * as pokedex from '../pokedex'
import * as scroll from '../scroll'

export const types = createTypes('POKEMONS:FETCH_ALL')
export const actions = createActions(types)

// query {
//   pokedexes(where: { region: { id: "5e39df7b62a62159b5e2c01a" }} ) {
//     number
//     pokemon {
//       id
//       name
//       thumbnail { url }
//     }
//   }
// }

export const dispatch = id => async dispatch => {
  dispatch(pokedex.actions.request(id))
  dispatch(scroll.actions.request(0))
    // const query = `
    // query {
    //   pokemons(sort: "name:asc") {
    //     id
    //     name
    //     thumbnail { url }
    //   }
    // }`

    // const response = await fetch(`${config.baseUrl}/graphql`, {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ query })
    // })

    // if (response.ok) {
    //   const json = await response.json()

    //   dispatch(actions.request(json.data.pokemons))
    //   dispatch(loading.actions.request(false))
    // }

  const response = await fetch(`${config.baseUrl}/pokedexes?region=${id}&_limit=1000`)

  if (response.ok) {
    const json = await response.json()

    dispatch(actions.request(json))
    dispatch(loading.actions.request(false))
  }
}
