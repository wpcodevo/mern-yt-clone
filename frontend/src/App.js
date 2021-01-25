import React from 'react'
import { Route } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Cart from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <>
      <ReactNotification />
      <Route path='/products/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={Cart} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route exact path='/' component={HomeScreen} />
    </>
  )
}

export default App
