import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store'
import { Provider } from 'react-redux';

import Navbar from './components/navbar'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Navbar />
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

