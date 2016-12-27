import 'object-assign'
import 'es6-promise'
import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import configureStore from '../store/configure-store'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-redux-linked-prices-jon'),
)

