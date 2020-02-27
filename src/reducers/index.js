import { combineReducers } from 'redux'
import loading from './loading'
import pokedex from './pokedex'
import pokemons from './pokemons'
import pokemon from './pokemon'
import regions from './regions'
import scroll from './scroll'

export default combineReducers({
  loading,
  pokedex,
  pokemons,
  pokemon,
  regions,
  scroll
})
