import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import FormContainer from '../components/FormContainer'

import { saveShippingAddress } from '../actions/cartActions'
import { Top, Form, FormControl, Button } from './LoginScreen'
import CheckoutSteps from '../components/CheckoutSteps'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: url('/images/login-bg.jpg') center/cover no-repeat fixed;
`

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = e => {
    e.preventDefault()
    if (address && city && postalCode && country) {
      dispatch(saveShippingAddress({ address, postalCode, city, country }))
      history.push('/payment')
    } else {
      toast.error('Please fill all fields!')
    }
  }

  return (
    <>
      <Wrapper>
        <CheckoutSteps step1 step2 />
        <FormContainer>
          <Top>
            <i className='fas fa-key'></i>
            <div>
              <h2>Shipping address</h2>
            </div>
          </Top>

          <Form onSubmit={submitHandler}>
            <FormControl>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                placeholder='Address'
                value={address}
                onChange={e => setAddress(e.target.value)}
                id='address'
              />
            </FormControl>

            <FormControl>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                placeholder='City'
                value={city}
                onChange={e => setCity(e.target.value)}
                id='city'
              />
            </FormControl>

            <FormControl>
              <label htmlFor='postalCode'>Postal Code</label>
              <input
                type='text'
                placeholder='Postal Code'
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
                id='postalCode'
              />
            </FormControl>

            <FormControl>
              <label htmlFor='country'>Country</label>
              <input
                type='country'
                placeholder='Country'
                value={country}
                onChange={e => setCountry(e.target.value)}
                id='country'
              />
            </FormControl>

            <Button type='submit'>Continue</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </>
  )
}

export default ShippingScreen
