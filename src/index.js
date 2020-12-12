import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './stylesheets/component/Header.css'
import './stylesheets/container/FormContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
require('dotenv').config()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);