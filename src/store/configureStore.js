import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

export default () =>
  createStore(
    reducers,
    compose(
      applyMiddleware(
        store => next => action => {
          next(action);
        },
        thunkMiddleware,
      ),
      process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );
