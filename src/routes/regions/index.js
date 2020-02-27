import { connect } from 'react-redux'
import Regions from './regions'

import * as actions from '../../actions'

const mapStateToProps = appState => {
  return {
    regions: appState.regions,
    ...appState,
  }
}

const mapDispatchToProps = {
  fetchRegions: actions.regions.dispatch,
  loading: actions.loading.dispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Regions)
