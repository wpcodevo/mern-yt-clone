import React from 'react'
import { Route } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-toastify/dist/ReactToastify.css'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Cart from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { ToastContainer } from 'react-toastify'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <ReactNotification />
      <Route path='/products/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={Cart} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route exact path='/' component={HomeScreen} />

      <Footer />
      <ToastContainer autoClose={2500} />
    </>
  )
}

export default App
