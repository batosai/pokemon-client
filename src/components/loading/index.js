
import { connect } from 'react-redux'
import Loading from './loading'

import * as actions from '../../actions'

const mapStateToProps = appState => {
  return {
    isActive: appState.loading.open,
    ...appState,
  }
}

const mapDispatchToProps = {
  stateLoading: actions.loading.dispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
