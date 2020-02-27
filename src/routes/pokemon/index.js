import { connect } from 'react-redux'
import Pokemon from './pokemon'

import * as actions from '../../actions'

const mapStateToProps = appState => {
  return {
    pokemon: appState.pokemon,
    ...appState,
  }
}

const mapDispatchToProps = {
  fetchPokemon: actions.pokemon.dispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
