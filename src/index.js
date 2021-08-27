// Tools
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'

// Data
import store from './store/store'

// Assets
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
