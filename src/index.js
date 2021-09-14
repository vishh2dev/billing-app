import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

import { startGetCustomer } from './actions/customerAction';
import { startGetProduct } from './actions/productAction';
import { startGetAllBill } from './actions/billAction';
import { startGetUserInfo } from './actions/userAction';
import App from './App';
import configureStore from './store/configureStore'

import { isLogin } from './actions/userAction'
const store = configureStore()


if(localStorage.getItem('token')){
  store.dispatch(isLogin(true))
  store.dispatch(startGetCustomer())
  store.dispatch(startGetProduct())
  store.dispatch(startGetAllBill())
  store.dispatch(startGetUserInfo())
}

console.log('state',store.getState())

store.subscribe(() =>{
  console.log('state updated',store.getState())
})



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
,
document.getElementById('root')
)


