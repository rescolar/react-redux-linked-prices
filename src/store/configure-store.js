import { compose, createStore, applyMiddleware } from 'redux'
// import { enableBatching } from 'redux-batched-actions'
import middleware from '../middleware/middleware'
import rootReducer from '../reducers/combined'

const configureStore = () => {
  if ( window.reduxStore === undefined ) {
    window.reduxStore = createStore(rootReducer, compose(
    // window.reduxStore = createStore(enableBatching(rootReducer), compose(
      applyMiddleware(...middleware),
      // window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
  }
  return window.reduxStore
}

export default configureStore

