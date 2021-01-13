import React from 'react'
import { Route } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Cart from './screens/CartScreen'

function App() {
  return (
    <>
      <ReactNotification />
      <Route exact path='/' component={HomeScreen} />
      <Route path='/products/:id' component={ProductScreen} />
      <Route path='/cart' component={Cart} />
    </>
  )
}

export default App
