import React from 'react'
import { Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Cart from './screens/CartScreen'

function App() {
  return (
    <>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/products/:id' component={ProductScreen} />
      <Route path='/cart' component={Cart} />
    </>
  )
}

export default App
