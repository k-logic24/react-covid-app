import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css'
import Layout from "./layouts/Layout"
import { store } from './app/store'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Layout />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
