
import { connect } from 'react-redux'
import Router from './router'
import Link from './link'

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

export { Link }

export default connect(mapStateToProps, mapDispatchToProps)(Router)
