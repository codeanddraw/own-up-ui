import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './stylesheets/component/Header.css'
import './stylesheets/container/TableContainer.css'
import './stylesheets/container/FormContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import store from './store/store'

require('dotenv').config()

/**
 * Code is attached to the root dom here
 * @return {APP}
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);