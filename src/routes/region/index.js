import { connect } from 'react-redux'
import Region from './region'

import * as actions from '../../actions'

const mapStateToProps = appState => {
  return {
    pokemons: appState.pokemons,
    pokedex: appState.pokedex,
    position: appState.scroll,
    ...appState,
  }
}

const mapDispatchToProps = {
  fetchPokemons: actions.pokemons.dispatch,
  loading: actions.loading.dispatch,
  setPosition: actions.scroll.dispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Region)
