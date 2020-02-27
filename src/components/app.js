import { Component } from 'preact'
import Helmet from 'preact-helmet'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
const store = configureStore()

import Router from './router'
import Header from './header'
import Loading from './loading'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Pokemon from '../routes/pokemon'
import Regions from '../routes/regions'
import Region from '../routes/region'

export default class App extends Component {
	render() {
		return (
      <div id="app">
        <Helmet
          htmlAttributes={{lang: "fr", amp: undefined}} // amp takes no value
          titleTemplate="Pokemon - %s"
          defaultTitle=""
          titleAttributes={{itemprop: "name", lang: "fr"}}
        />
        <Provider store={store}>
          <Loading />
          <Header />
          <Router>
            {/* <Home path="/" /> */}
            <Pokemon path="/pokemon/:id" />
            <Regions path="/" />
            {/* <Regions path="/regions" /> */}
            <Region path="/region/:id" />
          </Router>
        </Provider>
      </div>
		)
	}
}
