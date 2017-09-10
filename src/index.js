import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import GlobalRoutes from './routes/GlobalRoutes'
import configureStore from './store'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore(); //Initial State can be passed here
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalRoutes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
