import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes'
import history from './routes/history'
import GlobalStyle from './styles/global'

import store from './store'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
    <GlobalStyle />
  </Provider>
)

export default App
